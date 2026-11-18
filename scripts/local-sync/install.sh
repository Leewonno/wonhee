#!/bin/bash
# run.sh를 이 Mac의 launchd에 등록한다. 등록하면 바로 한 번 돈다.
#
#   bash scripts/local-sync/install.sh              등록 (run.sh를 고친 뒤 다시 실행하면 갱신)
#   bash scripts/local-sync/install.sh --uninstall  등록 해제
#
# 로그: ~/Library/Application Support/wonhee-fancam-sync/sync.log
set -euo pipefail

LABEL="wonhee.fancam-sync"
APP="$HOME/Library/Application Support/wonhee-fancam-sync"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HERE="$(cd "$(dirname "$0")" && pwd)"
DOMAIN="gui/$(id -u)"

launchctl bootout "$DOMAIN/$LABEL" 2>/dev/null || true

if [[ "${1:-}" == "--uninstall" ]]; then
  rm -f "$PLIST"
  echo "등록을 해제했다. 남은 파일은 $APP 에 있다 (지워도 된다)"
  exit 0
fi

for cmd in node npm git gh; do
  command -v "$cmd" > /dev/null || { echo "$cmd 를 찾지 못했다"; exit 1; }
done
[[ -x "$CHROME" ]] || { echo "크롬을 찾지 못했다: $CHROME"; exit 1; }
gh auth status > /dev/null 2>&1 || { echo "gh auth login 을 먼저 한다"; exit 1; }

mkdir -p "$APP"
cp "$HERE/run.sh" "$APP/run.sh"
chmod +x "$APP/run.sh"

# 작업 폴더와 따로 쓰는 전용 사본
if [[ ! -d "$APP/repo/.git" ]]; then
  git clone -q "$(git -C "$HERE" remote get-url origin)" "$APP/repo"
fi

# launchd는 PATH가 비어 있어서, 지금 쓰는 node · gh 위치를 넣어 준다
path="$(dirname "$(command -v node)"):$(dirname "$(command -v gh)"):$(dirname "$(command -v git)"):/usr/bin:/bin:/usr/sbin:/sbin"

mkdir -p "$(dirname "$PLIST")"
cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>$APP/run.sh</string>
  </array>
  <!-- 로그인할 때 한 번, 켜져 있는 동안 한 시간마다. 오늘 이미 성공했으면 run.sh가 바로 끝낸다 -->
  <key>RunAtLoad</key>
  <true/>
  <key>StartInterval</key>
  <integer>3600</integer>
  <key>EnvironmentVariables</key>
  <dict>
    <key>PATH</key>
    <string>$path</string>
    <key>CHROME_PATH</key>
    <string>$CHROME</string>
  </dict>
  <key>StandardOutPath</key>
  <string>$APP/launchd.log</string>
  <key>StandardErrorPath</key>
  <string>$APP/launchd.log</string>
</dict>
</plist>
EOF

launchctl bootstrap "$DOMAIN" "$PLIST"
echo "등록했다. 지금 한 번 돌고 있다. 로그: $APP/sync.log"
