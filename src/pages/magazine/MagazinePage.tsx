import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import s from "./MagazinePage.module.css";
import GalleryDialog from "./GalleryDialog.tsx";
import MvDialog from "./MvDialog.tsx";
import { NARROW_SLIDES, SLIDES, type Photo } from "./heroSlides.ts";
import { trackEvent } from "@/lib/analytics.ts";
import { useMediaQuery } from "@/lib/useMediaQuery.ts";

const AUTO_ADVANCE_MS = 3000;
const SWIPE_THRESHOLD_PX = 40;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
// MagazinePage.module.css의 모바일 구간과 같은 폭
const NARROW_QUERY = "(max-width: 820px)";

interface Arrow {
  readonly key: string;
  readonly className: string;
  readonly label: string;
  readonly delta: -1 | 1;
  readonly path: string;
}

// 화면 비율이 달라져도 얼굴이 사진 칸 가운데에 오도록 CSS에 넘길 값
function focusStyle(photo: Photo): CSSProperties {
  return {
    "--fx": photo.focus.x,
    "--fy": photo.focus.y,
    "--ar": photo.width / photo.height,
  } as CSSProperties;
}

const ARROWS: readonly Arrow[] = [
  {
    key: "prev",
    className: s.prev,
    label: "이전 사진",
    delta: -1,
    path: "M15 4l-8 8 8 8",
  },
  {
    key: "next",
    className: s.next,
    label: "다음 사진",
    delta: 1,
    path: "M9 4l8 8-8 8",
  },
];

export default function MagazinePage() {
  const slides = useMediaQuery(NARROW_QUERY) ? NARROW_SLIDES : SLIDES;
  const [index, setIndex] = useState(0);
  const [shownSlides, setShownSlides] = useState(slides);
  // 화면 폭이 바뀌어 슬라이드 목록이 달라지면, 보던 사진이 있는 슬라이드로 옮겨 간다
  if (shownSlides !== slides) {
    const shownPhoto = shownSlides[index]?.photos[0];
    const nextIndex = slides.findIndex((slide) =>
      slide.photos.some((photo) => photo.src === shownPhoto?.src),
    );
    setShownSlides(slides);
    setIndex(Math.max(nextIndex, 0));
  }
  const [held, setHeld] = useState(false);
  const [isHidden, setIsHidden] = useState(() => document.hidden);
  const [isMvOpen, setIsMvOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const isDialogOpen = isMvOpen || isGalleryOpen;
  // 움직임 줄이기를 켠 사용자는 멈춘 상태로 시작한다. 버튼으로 직접 다시 켤 수 있다
  const [isPaused, setIsPaused] = useState(
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
  );
  const dragFromX = useRef<number | null>(null);

  const slideCount = slides.length;
  const move = useCallback(
    (delta: number) => {
      setIndex((current) => (current + delta + slideCount) % slideCount);
    },
    [slideCount],
  );

  // 자동 넘김: 인덱스가 바뀔 때마다 3초 카운트다운을 새로 시작한다
  useEffect(() => {
    if (isPaused || held || isHidden || isDialogOpen) return;
    const timer = window.setTimeout(() => move(1), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [index, isPaused, held, isHidden, isDialogOpen, move]);

  useEffect(() => {
    if (isDialogOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [move, isDialogOpen]);

  useEffect(() => {
    const handleVisibilityChange = () => setIsHidden(document.hidden);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    dragFromX.current = event.pointerType === "mouse" ? null : event.clientX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const startX = dragFromX.current;
    dragFromX.current = null;
    if (startX === null) return;
    const movedX = event.clientX - startX;
    if (Math.abs(movedX) >= SWIPE_THRESHOLD_PX) move(movedX < 0 ? 1 : -1);
  };

  const handlePointerCancel = () => {
    dragFromX.current = null;
  };

  return (
    <div className={s.page}>
      <title>WONHEE</title>
      <main>
        <section
          className={s.stage}
          aria-roledescription="캐러셀"
          aria-label="원희 사진"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div
            className={s.slides}
            id="slides"
            aria-live={isPaused || held ? "polite" : "off"}
          >
            {slides.map((slide, slideIndex) => {
              const isActive = slideIndex === index;
              const className = [
                s.slide,
                isActive ? s.isActive : null,
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <div
                  key={slide.id}
                  className={className}
                  role="group"
                  aria-roledescription="슬라이드"
                  aria-label={`${slides.length}장 중 ${slideIndex + 1}번째`}
                  aria-hidden={!isActive}
                >
                  {slide.photos.map((photo) => (
                    <figure key={photo.src}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        loading={slideIndex === 0 ? "eager" : "lazy"}
                        style={focusStyle(photo)}
                      />
                    </figure>
                  ))}
                </div>
              );
            })}
          </div>

          {ARROWS.map((arrow) => (
            <button
              key={arrow.key}
              type="button"
              className={`${s.arrow} ${arrow.className}`}
              aria-controls="slides"
              aria-label={arrow.label}
              onClick={() => move(arrow.delta)}
              onMouseEnter={() => setHeld(true)}
              onMouseLeave={() => setHeld(false)}
              onFocus={(event) => {
                if (event.currentTarget.matches(":focus-visible"))
                  setHeld(true);
              }}
              onBlur={() => setHeld(false)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={arrow.path} />
              </svg>
            </button>
          ))}
        </section>
      </main>

      <header className={s.mast}>
        <h1 className={s.sign}>
          <span className={s.srOnly}>원희</span>
          <svg viewBox="0 0 321 198" aria-hidden="true" focusable="false">
            <path
              className={s.s1}
              pathLength="1"
              d="M114.8 6C78 67.6 41.9 129.5 6 191.6"
            />
            <path
              className={s.s2}
              pathLength="1"
              d="M6 191.6C25.2 169 44.9 147.2 65.9 126.3C69.2 123 84.5 105.3 88.9 108C93.4 110.7 89.7 121.3 88.6 125C84.7 138.1 77.8 173.9 103 170.9C117.2 169.2 150.1 121.8 160.1 109.3C164.4 103.9 176.3 93 170.8 85.5C164.1 76.5 149.7 91.1 145.1 96C129.9 112.2 104.3 154.9 132.1 171.2C162.2 188.9 202.2 130.6 215.5 109.8C222.5 98.9 232 84 232.3 70.6C232.4 69.7 232.4 67.3 231 67.1C229.2 66.8 217 85.9 215.1 88.8C203.2 106.9 191.5 125.7 182.6 145.4C179.8 151.5 174.5 161.6 178.1 168.2C179.6 171 182.5 172.6 185.4 173.5C198.7 178 209.2 167.8 217.3 158.6C246.9 124.9 265.5 110.2 279.6 65C280.2 59 282.4 50.8 279.4 45.2C272.8 32.6 240.2 61.9 236.4 69.3C235.1 71.9 236 73.9 236.3 76.5C250.7 72.6 264.9 67.7 279.6 65C272 70.5 226.4 112.5 243.8 114.8C251.6 115.8 273.5 72.5 279.6 65C284.4 57.5 288.4 49.8 296.8 45.6C317.3 35.2 324.1 57.1 298.8 66.2C292.4 65.8 286 65.4 279.6 65C286 65.4 292.4 65.8 298.8 66.2C328.4 78.6 298.6 107.2 272.6 96.5"
            />
          </svg>
        </h1>
        <p>ILLIT · WONHEE · 2007.06.26</p>
      </header>

      <div className={s.controls}>
        <button
          type="button"
          className={s.roundButton}
          aria-label="사진 갤러리 열기"
          aria-haspopup="dialog"
          onClick={() => {
            setIsGalleryOpen(true);
            trackEvent({ name: "open_gallery" });
          }}
        >
          {/* 사진 액자: 재생·멈춤 아이콘처럼 꽉 채운 면에 산과 해를 뚫어 그린다 */}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5 3.5h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2zM5 18.5h14l-4.5-6-3 3.5-2.5-3zM15.5 10.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z"
            />
          </svg>
        </button>

        <button
          type="button"
          className={s.roundButton}
          aria-controls="slides"
          aria-label={
            isPaused ? "사진 자동 넘김 다시 시작" : "사진 자동 넘김 멈추기"
          }
          onClick={() => setIsPaused((paused) => !paused)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d={
                isPaused
                  ? "M7 4.5l12 7.5-12 7.5z"
                  : "M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"
              }
            />
          </svg>
        </button>

        <button
          type="button"
          className={s.mvButton}
          onClick={() => {
            setIsMvOpen(true);
            trackEvent({ name: "open_mv" });
          }}
        >
          <span className={s.playDisc} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M6 4l14 8-14 8z" />
            </svg>
          </span>
          <span>
            <small>NEW MV</small>
            <strong>체포하겠어</strong>
          </span>
        </button>
      </div>

      <MvDialog open={isMvOpen} onClose={() => setIsMvOpen(false)} />
      <GalleryDialog
        open={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
}
