#!/bin/bash
# 나무위키 직캠 동기화를 이 Mac에서 하루 한 번 돌린다.
# 나무위키가 GitHub Actions 서버 접속을 봇 확인 화면으로 막아서, 가정 회선인 Mac에서 돌린다.
#
# install.sh가 이 파일을 ~/Library/Application Support/wonhee-fancam-sync/ 로 복사하고 launchd에 등록한다.
# launchd가 로그인할 때와 켜져 있는 동안 한 시간마다 부르고, 오늘 이미 성공했으면 바로 끝낸다.
#
# 하는 일 (GitHub Actions의 sync-fancams.yml과 같다)
# 1. 전용 사본(repo/)을 origin/main으로 맞춘다. 작업 폴더는 건드리지 않는다
# 2. scripts/sync-fancams.mjs를 돌린다
# 3. 새 직캠이 있으면 빌드를 확인하고 auto/sync-fancams 브랜치를 push한 뒤 PR을 올리거나 고친다
set -euo pipefail

APP="$HOME/Library/Application Support/wonhee-fancam-sync"
REPO="$APP/repo"
STAMP="$APP/last-success"
FAIL_STAMP="$APP/last-failure-notice"
LOCK="$APP/lock"
LOG="$APP/sync.log"
BRANCH="auto/sync-fancams"
DATA_FILE="src/pages/magazine/fancams.ts"
TODAY="$(date +%F)"

# 오늘 이미 성공했으면 할 일이 없다
if [[ -f "$STAMP" && "$(cat "$STAMP")" == "$TODAY" ]]; then
  exit 0
fi

# 로그는 2000줄만 남긴다
if [[ -f "$LOG" ]] && (( $(wc -l < "$LOG") > 2000 )); then
  tail -n 1000 "$LOG" > "$LOG.tmp" && mv "$LOG.tmp" "$LOG"
fi
exec >> "$LOG" 2>&1

# 이미 도는 중이면 끝낸다. 도중에 Mac이 꺼져 남은 잠금은 두 시간이 지나면 푼다
find "$LOCK" -maxdepth 0 -mmin +120 -exec rmdir {} \; 2>/dev/null || true
if ! mkdir "$LOCK" 2>/dev/null; then
  exit 0
fi
trap 'rmdir "$LOCK"' EXIT

notify() {
  osascript -e "display notification \"$1\" with title \"원희 직캠 동기화\"" >/dev/null 2>&1 || true
}

# 실패 알림은 하루에 한 번만 띄운다 (한 시간마다 다시 시도하므로)
on_error() {
  echo "[$(date '+%F %T')] 실패 (줄 $1)"
  if [[ ! -f "$FAIL_STAMP" || "$(cat "$FAIL_STAMP")" != "$TODAY" ]]; then
    echo "$TODAY" > "$FAIL_STAMP"
    notify "실패했어요. 로그: ~/Library/Application Support/wonhee-fancam-sync/sync.log"
  fi
}
trap 'on_error $LINENO' ERR

echo "[$(date '+%F %T')] 시작"
cd "$REPO"

git fetch -q --prune origin
git reset -q --hard
git clean -fdq
git checkout -q --detach origin/main

# 의존성은 package-lock.json이 바뀌었을 때만 다시 설치한다
lock_hash="$(shasum package-lock.json | cut -d' ' -f1)"
if [[ ! -f node_modules/.lock-hash || "$(cat node_modules/.lock-hash)" != "$lock_hash" ]]; then
  npm ci --no-audit --no-fund
  npm install --no-save --no-audit --no-fund playwright-core@1
  echo "$lock_hash" > node_modules/.lock-hash
fi

output="$APP/output"
: > "$output"
SUMMARY_PATH="$APP/summary.md" DEBUG_DIR="$APP/debug" GITHUB_OUTPUT="$output" \
  node scripts/sync-fancams.mjs

if git diff --quiet -- "$DATA_FILE"; then
  echo "[$(date '+%F %T')] 새 직캠 없음"
  echo "$TODAY" > "$STAMP"
  exit 0
fi

count="$(sed -n 's/^count=//p' "$output")"
title="새 직캠 ${count}개 추가"

# 바뀐 목록으로도 타입 검사와 빌드가 통과하는지 확인한 뒤에만 PR을 올린다
npm run build

git checkout -q -B "$BRANCH"
git add "$DATA_FILE"
git commit -q -m "chore: 나무위키에서 새 직캠 ${count}개 추가"
git push -q -f origin "$BRANCH"

pr="$(gh pr list --head "$BRANCH" --state open --json url --jq '.[0].url')"
if [[ -n "$pr" ]]; then
  gh pr edit "$pr" --title "$title" --body-file "$APP/summary.md" > /dev/null
else
  pr="$(gh pr create --base main --head "$BRANCH" --title "$title" --body-file "$APP/summary.md")"
fi

echo "[$(date '+%F %T')] PR: $pr"
echo "$TODAY" > "$STAMP"
notify "새 직캠 ${count}개 PR을 올렸어요"
