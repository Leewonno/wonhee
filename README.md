![WONHEE 메인 페이지](docs/screenshots/magazine-desktop.jpg)

아일릿(ILLIT) 멤버 원희의 팬사이트입니다.

**사이트:** https://woniguinea.com/

## 기술 스택

- React 19, TypeScript
- Vite (빌드, 개발 서버)
- GitHub Actions → GitHub Pages 배포

## 방문자 통계 (GA4)

배포 빌드에만 Google Analytics 4가 붙습니다. 측정 ID가 없으면 아무것도 불러오지 않습니다.

1. [Google Analytics](https://analytics.google.com)에서 속성과 **웹 데이터 스트림**을 만든다 (URL: `https://woniguinea.com/`)
2. 스트림의 **측정 ID**(`G-XXXXXXXXXX`)를 복사한다
3. GitHub 저장소 **Settings → Secrets and variables → Actions → Variables**에 `GA_MEASUREMENT_ID`로 등록한다
4. `main`에 배포하면 적용된다. GA의 **실시간** 보고서에서 내 방문이 잡히는지 확인한다

수집하는 이벤트 ([src/lib/analytics.ts](src/lib/analytics.ts)):

| 이벤트 | 시점 | 매개변수 |
| --- | --- | --- |
| `page_view` | 페이지 열람 (자동) | |
| `open_gallery` | 사진 갤러리 열기 | |
| `filter_gallery` | 갤러리 묶음 버튼 선택 | `series` |
| `view_photo` | 갤러리 사진 크게 보기 | `series` |
| `open_mv` | 뮤직비디오 열기 | |

`series` 별로 보고서에서 나눠 보려면 GA **관리 → 맞춤 정의**에서 이벤트 범위 측정기준 `series`를 등록한다.

로컬에서 확인하려면 `.env.example`을 `.env.local`로 복사해 ID를 넣고 `npm run build && npm run preview`로 연다. 개발 서버(`npm run dev`)에서는 수집하지 않는다.
