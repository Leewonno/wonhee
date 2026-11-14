/*
  GA4(Google Analytics) 연결.
  - 측정 ID는 빌드할 때 VITE_GA_MEASUREMENT_ID 로 넣는다 (예: G-XXXXXXXXXX)
  - 배포 빌드(npm run build)에서만 켜진다. 개발 서버 방문은 집계하지 않는다
  - ID가 없으면 아무것도 하지 않으므로, 설정 전에도 사이트는 그대로 동작한다
*/

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";
const IS_ENABLED =
  import.meta.env.PROD && /^G-[A-Z0-9]+$/.test(MEASUREMENT_ID);

export type AnalyticsEvent =
  | { readonly name: "open_gallery" }
  | { readonly name: "open_mv" }
  | { readonly name: "filter_gallery"; readonly params: { readonly series: string } }
  | { readonly name: "view_photo"; readonly params: { readonly series: string } };

export function initAnalytics(): void {
  if (!IS_ENABLED || window.gtag) return;

  window.dataLayer = window.dataLayer ?? [];
  // gtag.js는 배열이 아니라 arguments 객체 그대로를 받아야 동작한다
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  // page_view는 이 config 호출이 자동으로 보낸다
  window.gtag("config", MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.append(script);
}

export function trackEvent(event: AnalyticsEvent): void {
  if (!IS_ENABLED) return;
  window.gtag?.("event", event.name, "params" in event ? event.params : {});
}
