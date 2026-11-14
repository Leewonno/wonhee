import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type SyntheticEvent,
} from "react";
import s from "./GalleryDialog.module.css";
import { GALLERY_PHOTOS, type GalleryPhoto } from "./galleryPhotos.ts";
import { trackEvent } from "@/lib/analytics.ts";

const ALL = "ALL";
const SWIPE_THRESHOLD_PX = 50;
// 태그 줄 화살표를 한 번 누르면 보이는 너비의 이만큼 옆으로 민다
const CHIP_SCROLL_RATIO = 0.7;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
// 화면 너비별 열 개수. 위에서부터 먼저 맞는 조건을 쓴다
const COLUMN_RULES = [
  { query: "(max-width: 820px)", count: 2 },
  { query: "(max-width: 1200px)", count: 3 },
] as const;
const DEFAULT_COLUMN_COUNT = 4;

interface IndexedPhoto {
  readonly photo: GalleryPhoto;
  readonly index: number;
}

function getColumnCount() {
  return (
    COLUMN_RULES.find(({ query }) => window.matchMedia(query).matches)
      ?.count ?? DEFAULT_COLUMN_COUNT
  );
}

function useColumnCount() {
  const [count, setCount] = useState(getColumnCount);

  useEffect(() => {
    const lists = COLUMN_RULES.map(({ query }) => window.matchMedia(query));
    const update = () => setCount(getColumnCount());
    lists.forEach((list) => list.addEventListener("change", update));
    return () =>
      lists.forEach((list) => list.removeEventListener("change", update));
  }, []);

  return count;
}

interface ScrollEdges {
  /** 내용이 칸보다 넓어서 옆으로 밀 수 있는지 */
  readonly overflow: boolean;
  readonly atStart: boolean;
  readonly atEnd: boolean;
}

const NO_OVERFLOW: ScrollEdges = { overflow: false, atStart: true, atEnd: true };

function readEdges(element: HTMLElement): ScrollEdges {
  const max = element.scrollWidth - element.clientWidth;
  return {
    overflow: max > 1,
    atStart: element.scrollLeft <= 1,
    atEnd: element.scrollLeft >= max - 1,
  };
}

const sameEdges = (a: ScrollEdges, b: ScrollEdges) =>
  a.overflow === b.overflow && a.atStart === b.atStart && a.atEnd === b.atEnd;

// 가로로 넘치는 줄이 지금 어느 끝에 닿아 있는지 알려준다
function useScrollEdges(
  ref: { readonly current: HTMLElement | null },
  active: boolean,
) {
  const [edges, setEdges] = useState<ScrollEdges>(NO_OVERFLOW);

  useEffect(() => {
    const element = ref.current;
    if (!element || !active) return;
    const update = () => {
      const next = readEdges(element);
      setEdges((current) => (sameEdges(current, next) ? current : next));
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => {
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [ref, active]);

  return edges;
}

/*
  사진을 왼쪽 열부터 한 장씩 돌아가며 넣는다.
  그래서 그리드를 왼쪽→오른쪽으로 읽는 순서와 크게 보기에서 넘기는 순서가 같다
*/
function toColumns(
  photos: readonly GalleryPhoto[],
  count: number,
): readonly (readonly IndexedPhoto[])[] {
  return Array.from({ length: count }, (_, column) =>
    photos
      .map((photo, index) => ({ photo, index }))
      .filter(({ index }) => index % count === column),
  );
}

/*
  위버스 사진 서버는 주소 뒤 ?type=e640 같은 값을 붙이면 비율을 유지한 채 줄인 사진을 준다.
  목록 칸에는 줄인 사진(보통 화면 e640, 고해상도 화면 e1280)을 쓰고, 크게 볼 때만 원본을 받는다
*/
const RESIZABLE_HOST = "phinf.wevpstatic.net";

function resized(src: string, type: string) {
  try {
    const url = new URL(src);
    if (url.hostname !== RESIZABLE_HOST) return src;
    url.searchParams.set("type", type);
    return url.toString();
  } catch {
    return src;
  }
}

function thumbnailOf(src: string) {
  const small = resized(src, "e640");
  return {
    src: small,
    srcSet:
      small === src ? undefined : `${small} 1x, ${resized(src, "e1280")} 2x`,
  };
}

const altOf = (photo: GalleryPhoto, index: number) =>
  photo.alt ?? `원희 사진 ${index + 1}`;

const pad = (value: number) => String(value).padStart(2, "0");

interface ViewerFrameProps {
  readonly src: string;
  readonly alt: string;
  readonly loaded: boolean;
  readonly onFullLoad: () => void;
}

/*
  크게 보기 사진 한 장. 누르면 새 탭에서 원본을 연다.
  사진 비율을 알게 되면 링크 칸을 실제 사진 크기에 맞춰서, 옆 검은 여백은 눌리지 않게 한다
*/
function ViewerFrame({ src, alt, loaded, onFullLoad }: ViewerFrameProps) {
  const [ratio, setRatio] = useState<number | null>(null);

  const readRatio = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (ratio === null && naturalWidth > 0 && naturalHeight > 0) {
      setRatio(naturalWidth / naturalHeight);
    }
  };

  return (
    <div className={s.frame}>
      <a
        className={s.photoLink}
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${alt} 원본을 새 탭에서 보기`}
        draggable={false}
        data-loaded={loaded}
        style={
          ratio === null
            ? undefined
            : ({ "--ratio": ratio } as CSSProperties)
        }
      >
        {/* 원본이 올 때까지 목록에서 받아 둔 작은 사진을 먼저 크게 보여준다 */}
        <img
          {...thumbnailOf(src)}
          alt=""
          referrerPolicy="no-referrer"
          draggable={false}
          onLoad={readRatio}
        />
        <img
          className={s.full}
          src={src}
          alt={alt}
          decoding="async"
          referrerPolicy="no-referrer"
          draggable={false}
          onLoad={(event) => {
            readRatio(event);
            onFullLoad();
          }}
        />
      </a>
    </div>
  );
}

interface GalleryDialogProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

export default function GalleryDialog({ open, onClose }: GalleryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const viewerCloseRef = useRef<HTMLButtonElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const dragFromX = useRef<number | null>(null);
  const [filter, setFilter] = useState<string>(ALL);
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<ReadonlySet<string>>(() => new Set());
  const columnCount = useColumnCount();

  const seriesList = useMemo(
    () => [
      ...new Set(
        GALLERY_PHOTOS.flatMap((photo) => (photo.series ? [photo.series] : [])),
      ),
    ],
    [],
  );
  const photos = useMemo(
    () =>
      filter === ALL
        ? GALLERY_PHOTOS
        : GALLERY_PHOTOS.filter((photo) => photo.series === filter),
    [filter],
  );
  const columns = useMemo(
    () => toColumns(photos, columnCount),
    [photos, columnCount],
  );
  const viewerPhoto = viewerIndex === null ? null : photos[viewerIndex];
  const hasChips = seriesList.length > 1;
  const chipEdges = useScrollEdges(chipsRef, open && hasChips);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (viewerIndex !== null) viewerCloseRef.current?.focus();
  }, [viewerIndex]);

  // 크게 보기를 닫으면 마지막으로 본 사진 칸으로 포커스를 돌려준다
  const closeViewer = () => {
    if (viewerIndex !== null) {
      dialogRef.current
        ?.querySelector<HTMLElement>(`[data-index="${viewerIndex}"]`)
        ?.focus();
    }
    setViewerIndex(null);
  };

  const step = (delta: number) => {
    setViewerIndex((current) =>
      current === null
        ? current
        : (current + delta + photos.length) % photos.length,
    );
  };

  const handleClose = () => {
    setViewerIndex(null);
    onClose();
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDialogElement>) => {
    if (viewerIndex === null) return;
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
    // 크게 보기가 열려 있으면 Esc로 그것만 닫고 갤러리는 남긴다
    if (event.key === "Escape") {
      event.preventDefault();
      closeViewer();
    }
  };

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    if (viewerIndex === null) return;
    event.preventDefault();
    closeViewer();
  };

  const handleImageLoad = (src: string) => {
    setLoaded((current) =>
      current.has(src) ? current : new Set([...current, src]),
    );
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    dragFromX.current = event.pointerType === "mouse" ? null : event.clientX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const startX = dragFromX.current;
    dragFromX.current = null;
    if (startX === null) return;
    const movedX = event.clientX - startX;
    if (Math.abs(movedX) >= SWIPE_THRESHOLD_PX) step(movedX < 0 ? 1 : -1);
  };

  const scrollChips = (direction: -1 | 1) => {
    const chips = chipsRef.current;
    if (!chips) return;
    const reduceMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    chips.scrollBy({
      left: direction * chips.clientWidth * CHIP_SCROLL_RATIO,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const pickFilter = (series: string) => {
    setFilter(series);
    trackEvent({ name: "filter_gallery", params: { series } });
    dialogRef.current?.scrollTo({ top: 0 });
  };

  return (
    <dialog
      ref={dialogRef}
      className={s.sheet}
      aria-labelledby="gallery-title"
      onClose={handleClose}
      onCancel={handleCancel}
      onKeyDown={handleKeyDown}
    >
      <div className={s.head}>
        <h2 className={s.title} id="gallery-title">
          GALLERY <span>{GALLERY_PHOTOS.length}</span>
        </h2>
        {hasChips && (
          <div className={s.chipBar}>
            {chipEdges.overflow && (
              <button
                type="button"
                className={s.chipArrow}
                aria-label="앞쪽 촬영 묶음 보기"
                aria-disabled={chipEdges.atStart}
                onClick={() => !chipEdges.atStart && scrollChips(-1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
            )}
            <div
              ref={chipsRef}
              className={s.chips}
              role="group"
              aria-label="촬영 묶음"
            >
              {[ALL, ...seriesList].map((series) => (
                <button
                  key={series}
                  type="button"
                  className={s.chip}
                  aria-pressed={filter === series}
                  onClick={() => pickFilter(series)}
                >
                  {series}
                </button>
              ))}
            </div>
            {chipEdges.overflow && (
              <button
                type="button"
                className={s.chipArrow}
                aria-label="뒤쪽 촬영 묶음 보기"
                aria-disabled={chipEdges.atEnd}
                onClick={() => !chipEdges.atEnd && scrollChips(1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        )}
        <button
          type="button"
          className={s.close}
          ref={closeRef}
          aria-label="갤러리 닫기"
          onClick={handleClose}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {photos.length === 0 ? (
        <p className={s.empty}>사진을 준비하고 있어요.</p>
      ) : (
        <div className={s.grid}>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className={s.column}>
              {column.map(({ photo, index }) => {
                const thumbnail = thumbnailOf(photo.src);
                return (
                  <button
                    key={photo.src}
                    type="button"
                    className={s.tile}
                    data-index={index}
                    data-loaded={loaded.has(thumbnail.src)}
                    aria-label={`${altOf(photo, index)} 크게 보기`}
                    onClick={() => {
                      setViewerIndex(index);
                      trackEvent({
                        name: "view_photo",
                        params: { series: photo.series ?? "NONE" },
                      });
                    }}
                  >
                    {open && (
                      <img
                        src={thumbnail.src}
                        srcSet={thumbnail.srcSet}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onLoad={() => handleImageLoad(thumbnail.src)}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {viewerPhoto && viewerIndex !== null && (
        <div className={s.viewer} role="group" aria-label="사진 크게 보기">
          <div className={s.viewerHead}>
            <p className={s.counter} aria-live="polite">
              <b>{pad(viewerIndex + 1)}</b> <span>/ {pad(photos.length)}</span>
            </p>
            {viewerPhoto.series && (
              <span className={s.series}>{viewerPhoto.series}</span>
            )}
            <button
              ref={viewerCloseRef}
              type="button"
              className={s.close}
              aria-label="크게 보기 닫기"
              onClick={closeViewer}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div
            className={s.stage}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              dragFromX.current = null;
            }}
          >
            <ViewerFrame
              key={viewerPhoto.src}
              src={viewerPhoto.src}
              alt={altOf(viewerPhoto, viewerIndex)}
              loaded={loaded.has(viewerPhoto.src)}
              onFullLoad={() => handleImageLoad(viewerPhoto.src)}
            />
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  className={`${s.arrow} ${s.prev}`}
                  aria-label="이전 사진"
                  onClick={() => step(-1)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={`${s.arrow} ${s.next}`}
                  aria-label="다음 사진"
                  onClick={() => step(1)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
