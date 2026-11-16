/*
  직캠 모달에 나오는 원희 직캠. 나무위키 "원희(ILLIT)/음악 방송 직캠" 문서의 영상 목록을 옮겼다.
  썸네일은 유튜브 영상 번호로 유튜브에서 바로 불러온다 (파일을 따로 받지 않는다).

  - id: 유튜브 영상 번호. https://www.youtube.com/watch?v=○○○ 의 ○○○ 부분
  - album: 활동 묶음. ALBUMS에 있는 이름이어야 하고, 모달 위쪽 버튼 하나로 묶인다
  - song: 곡 이름 (메들리는 "A + B"처럼 적는다)
  - show: 무대 이름 (인기가요, 쇼! 음악중심 등)
  - date: 방송 날짜 (YYYY-MM-DD). 방송일을 모르면 유튜브에 올린 날을 적고 줄 끝에 표시해 둔다
  - kind: 전신 직캠이면 "직캠", 얼굴 위주면 "페이스캠"
  - length: 영상 길이 (분:초)

  모달은 날짜 내림차순으로 다시 정렬해서 보여주므로, 여기서는 묶음별로 모아 적기만 하면 된다.
*/

/*
  모달 위쪽 버튼 순서. 나무위키 "ILLIT/음반" 문서의 발매일 기준 최신순이고,
  앨범이 아닌 R U Next?(데뷔 전)와 기타는 맨 뒤에 둔다.
  축제 · 연말 무대 · 스튜디오 춤이라도 발매된 곡이면 그 음반에 넣는다.
  기타에는 음원으로 나오지 않은 특별 무대(커버 · 메들리 · 인트로 댄스 브레이크)만 둔다
*/
export const ALBUMS = [
  "BREAK EVEN", // 미니 5집 · 2026.10.26
  "I Got Your Back", // 일본 싱글 2집 · 2026.07.26
  "ICONIC BY MISTAKE", // 참여 음반 · 2026.06.12
  "MAMIHLAPINATAPAI", // 미니 4집 · 2026.04.30
  "NOT CUTE ANYMORE", // 싱글 1집 · 2025.11.24
  "비밀찾기", // 포켓몬스터 OST · 2025.11.04
  "bomb", // 미니 3집 · 2025.06.16
  "Almond Chocolate", // 디지털 싱글 · 2025.02.14
  "I’LL LIKE YOU", // 미니 2집 · 2024.10.21
  "SUPER REAL ME", // 미니 1집 · 2024.03.25
  "R U Next?", // 데뷔 전 서바이벌 · 앨범 아님
  "기타", // 발매되지 않은 특별 무대
] as const;

export type FancamAlbum = (typeof ALBUMS)[number];
export type FancamKind = "직캠" | "페이스캠";

export interface Fancam {
  readonly id: string;
  readonly album: FancamAlbum;
  readonly song: string;
  readonly show: string;
  readonly date: string;
  readonly kind: FancamKind;
  readonly length: string;
}

export const FANCAMS: readonly Fancam[] = [
  // BREAK EVEN
  { id: "79eFsTF2ETQ", album: "BREAK EVEN", song: "체포하겠어", show: "쇼! 음악중심", date: "2026-11-07", kind: "직캠", length: "3:23" },
  { id: "bEej5aJNSxY", album: "BREAK EVEN", song: "체포하겠어", show: "인기가요", date: "2026-11-01", kind: "페이스캠", length: "4:03" },
  { id: "qb4lic2UBdA", album: "BREAK EVEN", song: "체포하겠어", show: "쇼! 음악중심", date: "2026-10-31", kind: "직캠", length: "4:17" },
  { id: "5SP8NYp7oJ0", album: "BREAK EVEN", song: "체포하겠어", show: "쇼! 음악중심", date: "2026-10-31", kind: "직캠", length: "3:57" },
  { id: "UAHoxFjMlXs", album: "BREAK EVEN", song: "체포하겠어", show: "뮤직뱅크", date: "2026-10-30", kind: "직캠", length: "3:30" },
  { id: "D-WMX7x5aW4", album: "BREAK EVEN", song: "체포하겠어", show: "뮤직뱅크", date: "2026-10-30", kind: "페이스캠", length: "3:50" },

  // I Got Your Back
  { id: "3grDu2wJjGQ", album: "I Got Your Back", song: "I Got Your Back", show: "M2", date: "2026-08-22", kind: "직캠", length: "2:48" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "5KfivgT3FPk", album: "I Got Your Back", song: "I Got Your Back", show: "M2", date: "2026-08-20", kind: "직캠", length: "3:03" }, // 방송일을 몰라 유튜브에 올린 날

  // ICONIC BY MISTAKE
  { id: "ytShgMAJf6I", album: "ICONIC BY MISTAKE", song: "ICONIC BY MISTAKE", show: "엠카운트다운", date: "2026-06-11", kind: "직캠", length: "3:11" },
  { id: "tbQd97HnJNM", album: "ICONIC BY MISTAKE", song: "ICONIC BY MISTAKE", show: "엠카운트다운", date: "2026-06-11", kind: "직캠", length: "2:40" },

  // MAMIHLAPINATAPAI
  { id: "GAOf0eWlbSM", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "엠카운트다운", date: "2026-05-28", kind: "직캠", length: "2:53" },
  { id: "G6ytJvLW2ZQ", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "엠카운트다운", date: "2026-05-28", kind: "직캠", length: "3:02" },
  { id: "uCVtTv6kcgY", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "쇼! 음악중심", date: "2026-05-16", kind: "직캠", length: "3:03" },
  { id: "fCtT4vZZOVQ", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "인기가요", date: "2026-05-10", kind: "페이스캠", length: "2:37" },
  { id: "eFcS-9e3kQk", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "인기가요", date: "2026-05-10", kind: "직캠", length: "3:19" },
  { id: "VhfebX6OUQw", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "쇼! 음악중심", date: "2026-05-09", kind: "직캠", length: "2:55" },
  { id: "9-n5CzWavR8", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "쇼! 음악중심", date: "2026-05-09", kind: "직캠", length: "3:02" },
  { id: "om8AQYy-XWk", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "뮤직뱅크", date: "2026-05-08", kind: "페이스캠", length: "3:19" },
  { id: "o-upxLNLIa4", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "뮤직뱅크", date: "2026-05-08", kind: "직캠", length: "3:08" },
  { id: "Rb538wjedME", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "스튜디오 춤", date: "2026-05-04", kind: "직캠", length: "3:04" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "gOGU2zO4POY", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "인기가요", date: "2026-05-03", kind: "직캠", length: "3:15" },
  { id: "0CGY14xXFpQ", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "인기가요", date: "2026-05-03", kind: "페이스캠", length: "2:45" },
  { id: "kbTdVYr9KiQ", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "쇼! 음악중심", date: "2026-05-02", kind: "직캠", length: "2:50" },
  { id: "Tbt1ii21D3E", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "쇼! 음악중심", date: "2026-05-02", kind: "직캠", length: "3:06" },
  { id: "FDffN3Ztk7s", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "뮤직뱅크", date: "2026-05-01", kind: "직캠", length: "3:11" },
  { id: "6GFWkl9-9p0", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "뮤직뱅크", date: "2026-05-01", kind: "페이스캠", length: "3:03" },
  { id: "t4hK4EpaB_c", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "엠카운트다운", date: "2026-04-30", kind: "직캠", length: "3:01" },
  { id: "3Wzv4_irsmk", album: "MAMIHLAPINATAPAI", song: "It’s Me", show: "엠카운트다운", date: "2026-04-30", kind: "직캠", length: "3:40" },

  // NOT CUTE ANYMORE
  { id: "nLAXFUqOjTQ", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "인기가요", date: "2026-01-11", kind: "직캠", length: "3:20" },
  { id: "Ty8q-CCmec8", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "인기가요", date: "2026-01-11", kind: "페이스캠", length: "2:59" },
  { id: "EX7UEUOfwzg", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "엠카운트다운", date: "2026-01-08", kind: "직캠", length: "2:43" },
  { id: "CEuqEXFvyEc", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "엠카운트다운", date: "2026-01-08", kind: "직캠", length: "3:04" },
  { id: "3Kk0On120Os", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "쇼! 음악중심", date: "2025-12-13", kind: "직캠", length: "3:01" },
  { id: "L2TVe3dNkCg", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "인기가요", date: "2025-12-07", kind: "페이스캠", length: "2:35" },
  { id: "xiewqAymd34", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "쇼! 음악중심", date: "2025-12-06", kind: "직캠", length: "3:07" },
  { id: "9eIntMkGu5w", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "뮤직뱅크", date: "2025-12-05", kind: "직캠", length: "3:12" },
  { id: "KTn3I-x9Oaw", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "인기가요", date: "2025-11-30", kind: "페이스캠", length: "2:26" },
  { id: "WrqsJ4ilDtA", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "쇼! 음악중심", date: "2025-11-29", kind: "직캠", length: "2:37" },
  { id: "9s80S8ihRKw", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "쇼! 음악중심", date: "2025-11-29", kind: "직캠", length: "3:06" },
  { id: "g23xPH8f7do", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "뮤직뱅크", date: "2025-11-28", kind: "직캠", length: "3:03" },
  { id: "Mt2hSLgkXx8", album: "NOT CUTE ANYMORE", song: "NOT CUTE ANYMORE", show: "뮤직뱅크", date: "2025-11-28", kind: "페이스캠", length: "3:37" },

  // 비밀찾기
  { id: "7fqbghDFmBU", album: "비밀찾기", song: "비밀찾기", show: "MBC 가요대제전", date: "2025-12-31", kind: "직캠", length: "3:48" },

  // bomb
  { id: "9ncXSLsDo-Y", album: "bomb", song: "빌려온 고양이 (Summer Ver.)", show: "SBS 가요대전 썸머", date: "2025-08-10", kind: "직캠", length: "3:46" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "dFlSOyrXwco", album: "bomb", song: "jellyous", show: "인기가요", date: "2025-07-13", kind: "페이스캠", length: "3:21" },
  { id: "HKNC7IUGxuE", album: "bomb", song: "jellyous", show: "인기가요", date: "2025-07-13", kind: "직캠", length: "3:13" },
  { id: "MY1Qoh2t-zc", album: "bomb", song: "jellyous", show: "쇼! 음악중심", date: "2025-07-12", kind: "직캠", length: "3:02" },
  { id: "ZVLuNJQtBM0", album: "bomb", song: "jellyous", show: "MOVE TO PERFORMANCE", date: "2025-07-12", kind: "페이스캠", length: "3:01" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "hq9nBC1uD1g", album: "bomb", song: "jellyous", show: "뮤직뱅크", date: "2025-07-11", kind: "페이스캠", length: "3:59" },
  { id: "0uEtRN1mBNs", album: "bomb", song: "jellyous", show: "뮤직뱅크", date: "2025-07-11", kind: "직캠", length: "3:18" },
  { id: "TV42ArgSzvo", album: "bomb", song: "빌려온 고양이", show: "인기가요", date: "2025-07-06", kind: "직캠", length: "3:52" },
  { id: "OVf6L7VdA_A", album: "bomb", song: "빌려온 고양이", show: "뮤직뱅크", date: "2025-07-04", kind: "직캠", length: "3:29" },
  { id: "5weDq3ZrecY", album: "bomb", song: "빌려온 고양이", show: "엠카운트다운", date: "2025-07-03", kind: "직캠", length: "3:18" },
  { id: "gjk0OthzIOI", album: "bomb", song: "빌려온 고양이", show: "인기가요", date: "2025-06-29", kind: "직캠", length: "3:32" },
  { id: "10hz8PXoLeM", album: "bomb", song: "빌려온 고양이", show: "쇼! 음악중심", date: "2025-06-28", kind: "직캠", length: "3:23" },
  { id: "glP_T12Wl58", album: "bomb", song: "빌려온 고양이", show: "인기가요", date: "2025-06-22", kind: "직캠", length: "3:31" },
  { id: "UaSy7rN_l0k", album: "bomb", song: "빌려온 고양이", show: "인기가요", date: "2025-06-22", kind: "페이스캠", length: "4:05" },
  { id: "x2fDD_oUwQA", album: "bomb", song: "빌려온 고양이", show: "쇼! 음악중심", date: "2025-06-21", kind: "직캠", length: "3:50" },
  { id: "kvQby5gEQrU", album: "bomb", song: "빌려온 고양이", show: "쇼! 음악중심", date: "2025-06-21", kind: "직캠", length: "3:53" },
  { id: "ThGZiMhXEfY", album: "bomb", song: "빌려온 고양이", show: "뮤직뱅크", date: "2025-06-20", kind: "직캠", length: "3:37" },
  { id: "9jKsJtlh5_k", album: "bomb", song: "빌려온 고양이", show: "뮤직뱅크", date: "2025-06-20", kind: "페이스캠", length: "3:58" },
  { id: "VZuDgW3Ea08", album: "bomb", song: "빌려온 고양이", show: "스튜디오 춤", date: "2025-06-20", kind: "직캠", length: "3:31" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "fU-g_tD_x6U", album: "bomb", song: "빌려온 고양이", show: "엠카운트다운", date: "2025-06-19", kind: "직캠", length: "6:21" },
  { id: "YqM7KkWU9JE", album: "bomb", song: "빌려온 고양이", show: "엠카운트다운", date: "2025-06-19", kind: "직캠", length: "3:31" },

  // Almond Chocolate
  { id: "HnJsJLo5KiE", album: "Almond Chocolate", song: "Almond Chocolate", show: "뮤직뱅크", date: "2025-03-21", kind: "직캠", length: "3:54" },
  { id: "zgE98SH-V6c", album: "Almond Chocolate", song: "Almond Chocolate", show: "인기가요", date: "2025-03-16", kind: "직캠", length: "3:45" },
  { id: "soFoJxN0opI", album: "Almond Chocolate", song: "Almond Chocolate", show: "쇼! 음악중심", date: "2025-03-15", kind: "직캠", length: "3:40" },
  { id: "_7PCGghr2uo", album: "Almond Chocolate", song: "Almond Chocolate", show: "뮤직뱅크", date: "2025-03-14", kind: "직캠", length: "4:00" },
  { id: "5xm55wjNNpM", album: "Almond Chocolate", song: "Almond Chocolate", show: "뮤직뱅크", date: "2025-03-14", kind: "페이스캠", length: "4:19" },

  // I’LL LIKE YOU
  { id: "46RUm9jj9ls", album: "I’LL LIKE YOU", song: "Tick-Tack", show: "뮤직뱅크 글로벌 페스티벌", date: "2024-12-19", kind: "직캠", length: "3:02" },
  { id: "pfsiXnLKK-c", album: "I’LL LIKE YOU", song: "Tick-Tack", show: "인기가요", date: "2024-11-24", kind: "직캠", length: "3:07" },
  { id: "mkNEK_gxucA", album: "I’LL LIKE YOU", song: "Tick-Tack", show: "인기가요", date: "2024-11-24", kind: "페이스캠", length: "2:37" },
  { id: "AqtR0UWCglo", album: "I’LL LIKE YOU", song: "Tick-Tack", show: "쇼! 음악중심", date: "2024-11-23", kind: "직캠", length: "3:14" },
  { id: "IpIa34pgzA4", album: "I’LL LIKE YOU", song: "Tick-Tack", show: "뮤직뱅크", date: "2024-11-22", kind: "직캠", length: "3:02" },
  { id: "AZxIiu_yqKY", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "뮤직뱅크", date: "2024-11-08", kind: "페이스캠", length: "3:19" },
  { id: "Ib9fkdsb6yA", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "쇼! 음악중심", date: "2024-11-02", kind: "직캠", length: "3:33" },
  { id: "l13Fx0A9PjM", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "뮤직뱅크", date: "2024-11-01", kind: "페이스캠", length: "3:20" },
  { id: "5LIi66UDJX0", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "뮤직뱅크", date: "2024-11-01", kind: "직캠", length: "3:20" },
  { id: "nXbP65A9zrQ", album: "I’LL LIKE YOU", song: "IYKYK", show: "인기가요", date: "2024-10-27", kind: "직캠", length: "2:41" },
  { id: "EhA5Kf4hhKo", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "인기가요", date: "2024-10-27", kind: "페이스캠", length: "3:26" },
  { id: "3dsl5HS7LMs", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "인기가요", date: "2024-10-27", kind: "직캠", length: "3:29" },
  { id: "OiY5wtOgToE", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "쇼! 음악중심", date: "2024-10-26", kind: "직캠", length: "3:44" },
  { id: "9F5ug-8wMJw", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "쇼! 음악중심", date: "2024-10-26", kind: "직캠", length: "3:57" },
  { id: "iyuPappzzFI", album: "I’LL LIKE YOU", song: "IYKYK", show: "뮤직뱅크", date: "2024-10-25", kind: "직캠", length: "2:51" },
  { id: "ZsSa_7Pn2ow", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "뮤직뱅크", date: "2024-10-25", kind: "직캠", length: "3:22" },
  { id: "eAKjpFrXv7Y", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "스튜디오 춤", date: "2024-10-25", kind: "직캠", length: "3:11" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "zkWBTGHNOqQ", album: "I’LL LIKE YOU", song: "IYKYK", show: "엠카운트다운", date: "2024-10-24", kind: "직캠", length: "3:39" },
  { id: "Y4FQ8c9O1mI", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "엠카운트다운", date: "2024-10-24", kind: "직캠", length: "6:04" },
  { id: "NvbHNGrxZpE", album: "I’LL LIKE YOU", song: "IYKYK", show: "엠카운트다운", date: "2024-10-24", kind: "직캠", length: "3:05" },
  { id: "IOgV7TjHY7Y", album: "I’LL LIKE YOU", song: "Cherish (My Love)", show: "엠카운트다운", date: "2024-10-24", kind: "직캠", length: "3:20" },

  // SUPER REAL ME
  { id: "GsJ826LWFik", album: "SUPER REAL ME", song: "Magnetic", show: "고려대 석탑대동제", date: "2025-05-22", kind: "페이스캠", length: "2:43" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "Qyhq41Up3u0", album: "SUPER REAL ME", song: "Magnetic", show: "뮤직뱅크 글로벌 페스티벌", date: "2024-12-19", kind: "직캠", length: "3:22" },
  { id: "YHbjYf_DOCo", album: "SUPER REAL ME", song: "Magnetic (Festival Ver.)", show: "SBS 가요대전 썸머", date: "2024-07-26", kind: "직캠", length: "2:57" },
  { id: "lM3UJFvpTWo", album: "SUPER REAL ME", song: "INTRO+Magnetic", show: "인기가요 K-WAVE CONCERT", date: "2024-06-09", kind: "직캠", length: "3:42" },
  { id: "GZi_4MGTcYQ", album: "SUPER REAL ME", song: "Lucky Girl Syndrome", show: "뮤직뱅크", date: "2024-04-26", kind: "직캠", length: "2:45" },
  { id: "0_bJXCKAOL0", album: "SUPER REAL ME", song: "Lucky Girl Syndrome", show: "뮤직뱅크", date: "2024-04-26", kind: "페이스캠", length: "2:53" },
  { id: "bxoIY0vujmA", album: "SUPER REAL ME", song: "Lucky Girl Syndrome", show: "쇼챔피언", date: "2024-04-24", kind: "직캠", length: "2:34" },
  { id: "RD_5pM6ixPs", album: "SUPER REAL ME", song: "Lucky Girl Syndrome", show: "쇼챔피언", date: "2024-04-24", kind: "직캠", length: "2:27" },
  { id: "1R5ig3brBf4", album: "SUPER REAL ME", song: "Lucky Girl Syndrome", show: "인기가요", date: "2024-04-21", kind: "직캠", length: "2:38" },
  { id: "sAlm8jlMFuQ", album: "SUPER REAL ME", song: "Lucky Girl Syndrome", show: "쇼! 음악중심", date: "2024-04-20", kind: "직캠", length: "2:59" },
  { id: "FgNTm3fFtVU", album: "SUPER REAL ME", song: "Magnetic", show: "쇼! 음악중심", date: "2024-04-13", kind: "직캠", length: "3:33" },
  { id: "UDSZZ6kisCw", album: "SUPER REAL ME", song: "Magnetic", show: "뮤직뱅크", date: "2024-04-12", kind: "직캠", length: "3:04" },
  { id: "xtpaCuMdZVc", album: "SUPER REAL ME", song: "Magnetic", show: "엠카운트다운", date: "2024-04-11", kind: "직캠", length: "2:58" },
  { id: "JqrrEGVO4n8", album: "SUPER REAL ME", song: "Magnetic", show: "쇼챔피언", date: "2024-04-10", kind: "직캠", length: "2:53" },
  { id: "AA5MCvH2hro", album: "SUPER REAL ME", song: "My World", show: "Simply K-Pop", date: "2024-04-09", kind: "직캠", length: "1:56" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "_azaxjSyBAk", album: "SUPER REAL ME", song: "Magnetic", show: "Simply K-Pop", date: "2024-04-08", kind: "직캠", length: "2:52" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "u7alKVBfDMQ", album: "SUPER REAL ME", song: "Magnetic", show: "인기가요", date: "2024-04-07", kind: "직캠", length: "3:12" },
  { id: "-ECjerSCvpM", album: "SUPER REAL ME", song: "Magnetic", show: "쇼! 음악중심", date: "2024-04-06", kind: "직캠", length: "4:18" },
  { id: "SYv9qs-hz-Q", album: "SUPER REAL ME", song: "Magnetic", show: "뮤직뱅크", date: "2024-04-05", kind: "직캠", length: "3:08" },
  { id: "70N4sMR1__k", album: "SUPER REAL ME", song: "Magnetic", show: "뮤직뱅크", date: "2024-04-05", kind: "페이스캠", length: "3:21" },
  { id: "eRhZmErZxXk", album: "SUPER REAL ME", song: "Magnetic", show: "쇼챔피언", date: "2024-04-03", kind: "직캠", length: "2:56" },
  { id: "HGsHH6hcJIE", album: "SUPER REAL ME", song: "My World", show: "쇼챔피언", date: "2024-04-03", kind: "직캠", length: "1:50" },
  { id: "E8b6Gb_VPcQ", album: "SUPER REAL ME", song: "Magnetic", show: "쇼챔피언", date: "2024-04-03", kind: "직캠", length: "2:57" },
  { id: "UiJLsfv4NqM", album: "SUPER REAL ME", song: "Magnetic", show: "스튜디오 춤", date: "2024-04-03", kind: "직캠", length: "2:58" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "zua9LimHERs", album: "SUPER REAL ME", song: "Magnetic", show: "인기가요", date: "2024-03-31", kind: "페이스캠", length: "3:06" },
  { id: "VFGNtTMt7u8", album: "SUPER REAL ME", song: "Magnetic", show: "인기가요", date: "2024-03-31", kind: "직캠", length: "3:20" },
  { id: "4ejaOVVHJRY", album: "SUPER REAL ME", song: "My World", show: "인기가요", date: "2024-03-31", kind: "직캠", length: "2:04" },
  { id: "YTLxsZN1mMw", album: "SUPER REAL ME", song: "Magnetic", show: "쇼! 음악중심", date: "2024-03-30", kind: "직캠", length: "2:53" },
  { id: "50kZ9AEKapw", album: "SUPER REAL ME", song: "Magnetic", show: "쇼! 음악중심", date: "2024-03-30", kind: "직캠", length: "3:38" },
  { id: "alT3I8Tg0V4", album: "SUPER REAL ME", song: "Magnetic", show: "뮤직뱅크", date: "2024-03-29", kind: "페이스캠", length: "3:16" },
  { id: "LKBX4RaOKiE", album: "SUPER REAL ME", song: "Magnetic", show: "뮤직뱅크", date: "2024-03-29", kind: "직캠", length: "3:09" },
  { id: "0gCPGPSwyLc", album: "SUPER REAL ME", song: "Magnetic", show: "엠카운트다운", date: "2024-03-28", kind: "직캠", length: "3:08" },
  { id: "ePS4Lb2zSU4", album: "SUPER REAL ME", song: "Magnetic", show: "주간아이돌", date: "2024-03-27", kind: "직캠", length: "2:51" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "zUuH3ShU4gc", album: "SUPER REAL ME", song: "My World", show: "데뷔 쇼케이스", date: "2024-03-25", kind: "직캠", length: "2:02" },
  { id: "cnhel_I3UcI", album: "SUPER REAL ME", song: "Magnetic", show: "데뷔 쇼케이스", date: "2024-03-25", kind: "직캠", length: "2:57" },
  { id: "OMPm5N5-MGI", album: "SUPER REAL ME", song: "My World", show: "데뷔 쇼케이스", date: "2024-03-25", kind: "직캠", length: "2:02" },
  { id: "0zAdPbMhd2E", album: "SUPER REAL ME", song: "Magnetic", show: "데뷔 쇼케이스", date: "2024-03-25", kind: "직캠", length: "2:58" },

  // R U Next?
  { id: "xCn_cceuHVA", album: "R U Next?", song: "R U Next? FINAL", show: "리허설", date: "2023-09-02", kind: "직캠", length: "1:29" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "m0Y3c771KBI", album: "R U Next?", song: "R U Next? FINAL", show: "리허설", date: "2023-09-02", kind: "직캠", length: "3:09" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "5dk1uGxtS7E", album: "R U Next?", song: "R U Next? FINAL", show: "리허설", date: "2023-09-02", kind: "직캠", length: "3:24" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "fTOqo3sBcwY", album: "R U Next?", song: "R U Next? 6R", show: "리허설", date: "2023-08-25", kind: "직캠", length: "2:46" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "64B9RlpRj6w", album: "R U Next?", song: "R U Next? 6R", show: "리허설", date: "2023-08-25", kind: "직캠", length: "3:19" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "vDh3wJNqetM", album: "R U Next?", song: "R U Next? 5R", show: "리허설", date: "2023-08-11", kind: "직캠", length: "3:16" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "KQcy6Lj0SsY", album: "R U Next?", song: "R U Next? 4R", show: "리허설", date: "2023-08-04", kind: "직캠", length: "3:57" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "XCQw_1jmC4k", album: "R U Next?", song: "R U Next? 3R", show: "리허설", date: "2023-07-28", kind: "직캠", length: "2:53" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "aVqRH3PKFVI", album: "R U Next?", song: "R U Next? 3R", show: "리허설", date: "2023-07-21", kind: "직캠", length: "2:55" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "QnGq3mXFnUI", album: "R U Next?", song: "R U Next? 2R", show: "리허설", date: "2023-07-14", kind: "직캠", length: "2:16" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "avNtX3M3SkE", album: "R U Next?", song: "R U Next? 1R", show: "리허설", date: "2023-07-07", kind: "직캠", length: "2:29" }, // 방송일을 몰라 유튜브에 올린 날
  { id: "_NjyIhaBR5M", album: "R U Next?", song: "R U Next? 1R", show: "리허설", date: "2023-06-30", kind: "직캠", length: "1:28" }, // 방송일을 몰라 유튜브에 올린 날

  // 기타
  { id: "CmpqvfayhrY", album: "기타", song: "좋은 날 (원곡: 아이유)", show: "MBC 가요대제전", date: "2025-12-31", kind: "직캠", length: "3:07" },
  { id: "ATLQwJJ3J9s", album: "기타", song: "NOT CUTE ANYMORE + 빌려온 고양이", show: "MBC 가요대제전", date: "2025-12-31", kind: "직캠", length: "3:56" },
  { id: "4aYeSsFtmEU", album: "기타", song: "좋은 날 (원곡: 아이유)", show: "MBC 가요대제전", date: "2025-12-31", kind: "직캠", length: "2:04" },
  { id: "p5GIaAWXOe4", album: "기타", song: "미리 메리 크리스마스", show: "SBS 가요대전", date: "2025-12-25", kind: "직캠", length: "3:02" },
  { id: "FtDmqA4mssc", album: "기타", song: "INTRO DANCE BREAK + NOT CUTE ANYMORE + jellyous", show: "SBS 가요대전", date: "2025-12-25", kind: "직캠", length: "3:38" },
  { id: "nxGrZSr7wg4", album: "기타", song: "Dance Break + IYKYK (If You Know You Know) + Magnetic (Holiday Ver.)", show: "SBS 가요대전", date: "2024-12-25", kind: "직캠", length: "3:50" },
  { id: "n_FqIXab0bY", album: "기타", song: "INTRO + Dance break", show: "뮤직뱅크 글로벌 페스티벌", date: "2024-12-19", kind: "직캠", length: "3:01" },
  { id: "clKp_2iJgiI", album: "기타", song: "아틀란티스 소녀 (원곡: 보아)", show: "뮤직뱅크 글로벌 페스티벌", date: "2024-12-19", kind: "직캠", length: "3:03" },
];
