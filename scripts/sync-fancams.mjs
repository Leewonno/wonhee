/*
  나무위키 "원희(ILLIT)/음악 방송 직캠" 문서를 읽어서, 새로 올라온 직캠을 src/pages/magazine/fancams.ts에 더한다.
  GitHub Actions(.github/workflows/sync-fancams.yml)가 매일 돌리고, 바뀐 게 있으면 PR을 올린다.

  하는 일
  1. 헤드리스 크롬으로 문서를 열어 유튜브 링크와 그 링크가 있던 문서 목차(앨범)를 모은다
  2. fancams.ts에 없는 영상만 골라 유튜브에서 제목 · 길이 · 올린 날을 받는다
  3. 제목에서 곡 · 무대 · 날짜 · 직캠/페이스캠을 읽고, 곡 이름으로 앨범을 정한다
  4. 새 영상만 fancams.ts의 해당 앨범 묶음 안 날짜 자리에 한 줄씩 끼워 넣고, PR 본문에 쓸 요약을 남긴다

  이미 목록에 있는 줄은 순서 · 내용 모두 건드리지 않는다. 직접 손으로 넣은 영상(문서에 없는 영상)도 그대로 둔다.

  실행: node scripts/sync-fancams.mjs
  - CHROME_PATH: 쓸 크롬 경로 (로컬에서 설치된 크롬을 쓸 때). 비우면 playwright가 받은 크롬을 쓴다
  - SUMMARY_PATH: PR 본문을 쓸 파일 (기본: fancam-sync-summary.md)
  - DEBUG_DIR: 문서를 못 읽었을 때 받은 화면을 남길 폴더 (기본: fancam-sync-debug)
  변경이 있으면 GitHub Actions 출력 changed=true 를 남긴다
*/
import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { chromium } from "playwright-core";

const WIKI_URL =
  "https://namu.wiki/w/%EC%9B%90%ED%9D%AC(ILLIT)/%EC%9D%8C%EC%95%85%20%EB%B0%A9%EC%86%A1%20%EC%A7%81%EC%BA%A0";
const DATA_PATH = new URL("../src/pages/magazine/fancams.ts", import.meta.url);
const SUMMARY_PATH = process.env.SUMMARY_PATH ?? "fancam-sync-summary.md";
const DEBUG_DIR = process.env.DEBUG_DIR ?? "fancam-sync-debug";
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
/*
  문서에서 찾은 영상이 이보다 적으면 문서를 제대로 못 읽은 것(접속 차단 · 문서 구조 변경)으로 보고 멈춘다.
  지금 목록 개수와는 비교하지 않는다. 직접 추가한 영상이 많아도 멈추지 않게 하기 위해서다
*/
const MIN_WIKI_VIDEOS = 100;

/*
  곡 → 앨범. ALBUMS(fancams.ts)에 있는 이름이어야 한다.
  새 앨범이 나오면 fancams.ts의 ALBUMS와 여기에 곡을 함께 더한다.
  여기에 없는 곡은 문서 목차가 아는 앨범이면 그 앨범으로, 아니면 "기타"로 넣고 PR에 확인 필요로 적는다
*/
const SONG_ALBUMS = {
  "체포하겠어": "BREAK EVEN",
  "I Got Your Back": "I Got Your Back",
  "ICONIC BY MISTAKE": "ICONIC BY MISTAKE",
  "It’s Me": "MAMIHLAPINATAPAI",
  "NOT CUTE ANYMORE": "NOT CUTE ANYMORE",
  "비밀찾기": "비밀찾기",
  "빌려온 고양이": "bomb",
  "jellyous": "bomb",
  "Almond Chocolate": "Almond Chocolate",
  "Cherish (My Love)": "I’LL LIKE YOU",
  "IYKYK": "I’LL LIKE YOU",
  "Tick-Tack": "I’LL LIKE YOU",
  "Magnetic": "SUPER REAL ME",
  "My World": "SUPER REAL ME",
  "Lucky Girl Syndrome": "SUPER REAL ME",
};

// 제목에 들어 있는 말 → 무대 이름. 위에서부터 먼저 맞는 것을 쓴다
const SHOWS = [
  ["R U Next", "리허설"],
  ["MCOUNTDOWN", "엠카운트다운"],
  ["뮤직뱅크 글로벌 페스티벌", "뮤직뱅크 글로벌 페스티벌"],
  ["뮤직뱅크", "뮤직뱅크"],
  ["가요대제전", "MBC 가요대제전"],
  ["음악중심", "쇼! 음악중심"],
  ["K-WAVE CONCERT", "인기가요 K-WAVE CONCERT"],
  ["가요대전 썸머", "SBS 가요대전 썸머"],
  ["가요대전썸머", "SBS 가요대전 썸머"],
  ["가요대전", "SBS 가요대전"],
  ["Inkigayo", "인기가요"],
  ["Show Champion", "쇼챔피언"],
  ["I'LL (SHOW) IT", "데뷔 쇼케이스"],
  ["주간아", "주간아이돌"],
  ["STUDIO CHOOM", "스튜디오 춤"],
  ["Simply K-Pop", "Simply K-Pop"],
  ["MOVE TO PERFORMANCE", "MOVE TO PERFORMANCE"],
];

// 제목에 방송일이 없지만 날짜를 아는 특별 무대
const EVENT_DATES = [
  [/I'LL \(SHOW\) IT/, "2024-03-25"],
  [/\[2024 가요대전 4K\]/, "2024-12-25"],
  [/\[2025 가요대전 4K\]/, "2025-12-25"],
];

const FACECAM = /얼빡|페이스캠|face ?cam|focus on face/i;
const UPLOAD_DATE_NOTE = " // 방송일을 몰라 유튜브에 올린 날";

/* ───────── 1. 나무위키 문서 읽기 ───────── */

async function readWiki() {
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || undefined,
  });
  try {
    const page = await browser.newPage({ userAgent: USER_AGENT, locale: "ko-KR" });
    const response = await page.goto(WIKI_URL, { waitUntil: "domcontentloaded", timeout: 60_000 });
    // 문서 본문은 스크립트가 그린다. 유튜브 링크가 보일 때까지 기다린 뒤 조금 더 둔다
    try {
      await page.waitForFunction(
        () => document.querySelectorAll('a[href*="youtu"]').length > 0,
        undefined,
        { timeout: 60_000 },
      );
    } catch (error) {
      await saveDebug(page, response);
      throw new Error(`문서에서 유튜브 링크가 뜨지 않았다. ${DEBUG_DIR}에 남긴 화면을 확인한다`, { cause: error });
    }
    await page.waitForTimeout(3000);
    return await page.evaluate(() => {
      const found = [];
      let section = "";
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      for (let node = walker.currentNode; node; node = walker.nextNode()) {
        if (/^H[2-6]$/.test(node.tagName)) section = node.textContent.replace("[편집]", "").trim();
        if (node.tagName === "A" && /youtu/.test(node.href)) found.push({ section, href: node.href });
      }
      return found;
    });
  } finally {
    await browser.close();
  }
}

/*
  문서를 못 읽었을 때 받은 화면을 남긴다 (접속 차단 · 봇 확인 화면인지 보기 위해).
  GitHub Actions에서는 이 폴더를 artifact로 올린다
*/
async function saveDebug(page, response) {
  mkdirSync(DEBUG_DIR, { recursive: true });
  const info = {
    url: page.url(),
    status: response?.status() ?? null,
    headers: response ? await response.allHeaders() : null,
    title: await page.title(),
    text: (await page.evaluate(() => document.body?.innerText ?? "")).slice(0, 2000),
  };
  writeFileSync(`${DEBUG_DIR}/info.json`, JSON.stringify(info, null, 2));
  writeFileSync(`${DEBUG_DIR}/page.html`, await page.content());
  await page.screenshot({ path: `${DEBUG_DIR}/page.png`, fullPage: true });
  console.error(`응답 ${info.status} · 제목 "${info.title}"\n${info.text.slice(0, 500)}`);
}

function videoIdOf(href) {
  return href.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([\w-]{11})/)?.[1] ?? null;
}

/* ───────── 2. 유튜브에서 영상 정보 받기 ───────── */

async function fetchVideo(id) {
  const watch = `https://www.youtube.com/watch?v=${id}`;
  // 퍼가기가 막힌 영상은 oEmbed가 401을 준다. 모달에서 재생할 수 없으니 넣지 않는다
  const oembed = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(watch)}&format=json`);
  if (!oembed.ok) return { id, error: `퍼가기 불가 또는 없는 영상 (oEmbed ${oembed.status})` };
  const { title, author_name: channel } = await oembed.json();

  const html = await (await fetch(watch, { headers: { "User-Agent": USER_AGENT, "Accept-Language": "ko-KR" } })).text();
  const seconds = Number(html.match(/"lengthSeconds":"(\d+)"/)?.[1]);
  const published = html.match(/"publishDate":"([^"]+)"/)?.[1];
  if (!seconds || !published) return { id, error: "유튜브 페이지에서 길이나 올린 날을 찾지 못함" };
  return { id, title, channel, seconds, published };
}

/* ───────── 3. 제목 읽기 ───────── */

function songOf(title) {
  // 데뷔 전 리허설 직캠은 곡 이름 대신 회차를 적는다 (예: "R U Next? 1R")
  const round = title.match(/R U Next\?.*?l (\S+) rehearsal/);
  if (round) return `R U Next? ${round[1]}`;
  const match =
    title.match(/'([^']+)'/) ??
    title.match(/‘([^’]+)’/) ??
    title.match(/[–-]\s*(.+?)\s*(?:FanCam)?\s*\|/) ??
    title.match(/ - (.+?) \(아일릿/);
  if (!match) return null;
  return normalizeSong(match[1].replace(/\s*\(아일릿.*$/, "").replace(/\s*직캠$/, "").trim());
}

function normalizeSong(song) {
  return song
    .replace(/^Cherish\s*\(My Love\)$/, "Cherish (My Love)")
    .replace(/^IYKYK.*$/, "IYKYK")
    .replace(/^Almond Chocolate.*$/, "Almond Chocolate")
    .replace(/^빌려온 고양이 \(Do the Dance\)$/, "빌려온 고양이")
    .replace(/^I Got Your Back.*$/, "I Got Your Back")
    .replace(/^You[’']re Under Arrest$/, "체포하겠어")
    .replace(/\(원곡:\s*/, "(원곡: ");
}

function showOf(title, channel) {
  return SHOWS.find(([key]) => title.includes(key) || channel.includes(key))?.[1] ?? channel;
}

const pad = (value) => String(value).padStart(2, "0");

// 제목 속 방송일(2026.5.28 또는 260528). 없으면 한국 시간 기준으로 유튜브에 올린 날
function dateOf(title, published) {
  const event = EVENT_DATES.find(([pattern]) => pattern.test(title));
  if (event) return { date: event[1], fromTitle: true };
  const countdown = title.match(/MCOUNTDOWN_(\d{4})\.(\d{1,2})\.(\d{1,2})/);
  if (countdown) return { date: `${countdown[1]}-${pad(countdown[2])}-${pad(countdown[3])}`, fromTitle: true };
  const short = title.match(/(?<!\d)(2\d)(0[1-9]|1[0-2])([0-3]\d)(?!\d)/);
  if (short) return { date: `20${short[1]}-${short[2]}-${short[3]}`, fromTitle: true };
  const kst = new Date(new Date(published).getTime() + 9 * 60 * 60 * 1000);
  return { date: kst.toISOString().slice(0, 10), fromTitle: false };
}

const lengthOf = (seconds) => `${Math.floor(seconds / 60)}:${pad(seconds % 60)}`;

/*
  앨범 정하기
  - R U Next? 목차에 있으면 R U Next?
  - 곡이 하나(인트로 · 버전 표기 제외)이거나 메들리가 모두 한 앨범 곡이면 그 앨범
  - 모르는 곡인데 문서 목차가 아는 앨범이면 그 앨범 (확인 필요)
  - 나머지는 기타 (모르는 곡이면 확인 필요)
*/
function albumOf(song, section, albums) {
  if (section.includes("알유넥스트")) return { album: "R U Next?", sure: true };
  const parts = song
    .split(/\s*\+\s*/)
    .map((part) => part.replace(/\s*\((Festival|Summer|Holiday) Ver\.\)$/i, "").trim())
    .filter((part) => !/^(intro( dance break)?|dance break)$/i.test(part));
  const partAlbums = new Set(parts.map((part) => SONG_ALBUMS[part]));
  if (partAlbums.size === 1 && !partAlbums.has(undefined)) return { album: [...partAlbums][0], sure: true };
  const fromSection = section.match(/《(.+?)》/)?.[1];
  if (fromSection && albums.includes(fromSection)) return { album: fromSection, sure: false };
  // 여러 앨범 곡을 섞은 메들리는 기타가 맞다. 모르는 곡이 섞였을 때만 확인을 부탁한다
  return { album: "기타", sure: !partAlbums.has(undefined) };
}

/* ───────── 4. fancams.ts에 새 줄 끼워 넣기 ───────── */

function lineOf(entry, note) {
  const q = JSON.stringify;
  return `  { id: ${q(entry.id)}, album: ${q(entry.album)}, song: ${q(entry.song)}, show: ${q(entry.show)}, date: ${q(entry.date)}, kind: ${q(entry.kind)}, length: ${q(entry.length)} },${note}`;
}

const isEntry = (line) => line.startsWith("  { id: ");
const dateIn = (line) => line.match(/date: "([^"]+)"/)[1];
const headerOf = (album) => `  // ${album}`;

/*
  lines: fancams.ts를 줄 단위로 나눈 것 (이 배열에 새 줄만 끼워 넣는다)
  - 앨범 묶음이 있으면: 그 묶음 안에서 날짜가 더 이른 첫 줄 바로 앞 (같은 날짜면 기존 줄 뒤)
  - 묶음이 없으면: ALBUMS 순서상 뒤에 오는 첫 묶음 앞에 새 묶음을 만든다
*/
function insertEntry(lines, albums, entry, note) {
  const start = lines.findIndex((line) => line.startsWith("export const FANCAMS"));
  const end = lines.findIndex((line, index) => index > start && line === "];");
  const newLine = lineOf(entry, note);

  const header = lines.findIndex((line, index) => index > start && index < end && line === headerOf(entry.album));
  if (header !== -1) {
    let at = header + 1;
    while (at < end && isEntry(lines[at]) && dateIn(lines[at]) >= entry.date) at += 1;
    lines.splice(at, 0, newLine);
    return;
  }

  const later = albums.slice(albums.indexOf(entry.album) + 1).map(headerOf);
  const next = lines.findIndex((line, index) => index > start && index < end && later.includes(line));
  // 묶음 사이에는 빈 줄이 하나 있다. 다음 묶음 앞 빈 줄 자리에 [빈 줄, 머리말, 새 줄]을 넣는다
  const at = next === -1 ? end : next - 1;
  lines.splice(at, 0, "", headerOf(entry.album), newLine);
}

/* ───────── 실행 ───────── */

const source = readFileSync(DATA_PATH, "utf8");
const albums = [...source.split("export const ALBUMS = [")[1].split("] as const")[0].matchAll(/^\s*"([^"]+)",/gm)].map((m) => m[1]);
const known = new Set([...source.matchAll(/^ {2}\{ id: "([^"]+)"/gm)].map((m) => m[1]));

const links = await readWiki();
const sections = new Map();
for (const { section, href } of links) {
  const id = videoIdOf(href);
  if (id && !sections.has(id)) sections.set(id, section);
}
console.log(`문서에서 영상 ${sections.size}개, 지금 목록 ${known.size}개`);

if (sections.size < MIN_WIKI_VIDEOS) {
  throw new Error(`문서에서 영상을 ${sections.size}개만 찾았다. 문서를 제대로 읽지 못했을 수 있어 멈춘다`);
}

const lines = source.split("\n");
const added = [];
const skipped = [];
for (const [id, section] of sections) {
  if (known.has(id)) continue;
  const video = await fetchVideo(id);
  if (video.error) {
    skipped.push({ id, reason: video.error });
    continue;
  }
  const song = songOf(video.title);
  const { date, fromTitle } = dateOf(video.title, video.published);
  const { album, sure } = song ? albumOf(song, section, albums) : { album: "기타", sure: false };
  const entry = {
    id,
    album,
    song: song ?? video.title,
    show: showOf(video.title, video.channel),
    date,
    kind: FACECAM.test(video.title) ? "페이스캠" : "직캠",
    length: lengthOf(video.seconds),
  };
  added.push({ ...entry, title: video.title, section, sure, fromTitle });
  insertEntry(lines, albums, entry, fromTitle ? "" : UPLOAD_DATE_NOTE);
}

if (added.length > 0) writeFileSync(DATA_PATH, lines.join("\n"));

/* ───────── PR 본문 ───────── */

const link = (id) => `[${id}](https://www.youtube.com/watch?v=${id})`;
const summary = [
  `나무위키 [원희(ILLIT)/음악 방송 직캠](${WIKI_URL}) 문서에서 새 직캠 **${added.length}개**를 찾아 목록에 더했습니다.`,
  "",
  "| 날짜 | 곡 | 무대 | 앨범 | 영상 | 확인 |",
  "|---|---|---|---|---|---|",
  ...added.map(
    (a) =>
      `| ${a.date}${a.fromTitle ? "" : " (올린 날)"} | ${a.song} | ${a.show} | ${a.album} | ${link(a.id)} | ${a.sure ? "" : "⚠️ 앨범 확인"} |`,
  ),
  "",
  "<details><summary>유튜브 원래 제목</summary>",
  "",
  ...added.map((a) => `- ${link(a.id)} ${a.title} (문서 목차: ${a.section || "없음"})`),
  "",
  "</details>",
];
if (added.some((a) => !a.sure)) {
  summary.push(
    "",
    "⚠️ 표시된 영상은 곡 이름으로 앨범을 정하지 못했습니다. 새 앨범 곡이면 `src/pages/magazine/fancams.ts`의 `ALBUMS`와 `scripts/sync-fancams.mjs`의 `SONG_ALBUMS`에 더한 뒤 이 PR에서 앨범을 고쳐 주세요.",
  );
}
if (skipped.length) {
  summary.push("", "**넣지 않은 영상**", ...skipped.map((s) => `- ${link(s.id)}: ${s.reason}`));
}
writeFileSync(SUMMARY_PATH, `${summary.join("\n")}\n`);
console.log(`더함 ${added.length} · 건너뜀 ${skipped.length}`);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `changed=${added.length > 0}\ncount=${added.length}\n`);
}
