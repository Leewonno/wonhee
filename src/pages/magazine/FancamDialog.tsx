import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type SyntheticEvent,
} from "react";
import g from "./GalleryDialog.module.css";
import s from "./FancamDialog.module.css";
import ChipBar from "./ChipBar.tsx";
import { ALBUMS, FANCAMS, type Fancam } from "./fancams.ts";
import { trackEvent } from "@/lib/analytics.ts";
import { useCloseOnBack } from "@/lib/useCloseOnBack.ts";

const ALL = "ALL";

/*
  유튜브 썸네일. hqdefault는 4:3 그림에 위아래 검은 띠가 들어 있어서,
  16:9 칸에 꽉 채우면(object-fit: cover) 띠가 잘려 나간다
*/
const thumbnailOf = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const embedOf = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;

// 2026-10-31 → 2026.10.31
const dotDate = (date: string) => date.replaceAll("-", ".");
const titleOf = (fancam: Fancam) =>
  `${fancam.song} ${fancam.show} ${fancam.kind}`;

// 최신 무대가 먼저 오게 날짜 내림차순. 같은 날이면 적어 둔 순서를 지킨다
const SORTED = [...FANCAMS].sort((a, b) => b.date.localeCompare(a.date));
// 직캠이 하나라도 있는 묶음만 버튼으로 만든다
const ALBUM_OPTIONS = ALBUMS.filter((album) =>
  FANCAMS.some((fancam) => fancam.album === album),
);

interface FancamDialogProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

export default function FancamDialog({ open, onClose }: FancamDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const viewerCloseRef = useRef<HTMLButtonElement>(null);
  const [album, setAlbum] = useState<string>(ALL);
  const [playing, setPlaying] = useState<Fancam | null>(null);
  const [loaded, setLoaded] = useState<ReadonlySet<string>>(() => new Set());
  // 영상을 닫은 뒤 포커스를 돌려줄 썸네일. 목록이 다시 눌릴 수 있게 된 뒤에 옮긴다
  const returnFocusTo = useRef<string | null>(null);
  const isPlaying = playing !== null;

  const fancams = useMemo(
    () =>
      album === ALL ? SORTED : SORTED.filter((fancam) => fancam.album === album),
    [album],
  );

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
    if (isPlaying) {
      viewerCloseRef.current?.focus();
      return;
    }
    const id = returnFocusTo.current;
    returnFocusTo.current = null;
    if (id) {
      dialogRef.current
        ?.querySelector<HTMLElement>(`[data-id="${id}"]`)
        ?.focus();
    }
  }, [isPlaying]);

  const play = (fancam: Fancam) => {
    setPlaying(fancam);
    trackEvent({
      name: "play_fancam",
      params: { song: fancam.song, show: fancam.show },
    });
  };

  // 영상을 닫으면 방금 본 썸네일로 포커스를 돌려준다 (위 effect가 옮긴다)
  const closePlayer = () => {
    returnFocusTo.current = playing?.id ?? null;
    setPlaying(null);
  };

  const handleClose = () => {
    setPlaying(null);
    onClose();
  };

  // 뒤로가기는 영상이 열려 있으면 그것부터, 그다음 직캠 모달을 닫는다
  useCloseOnBack(open, handleClose);
  useCloseOnBack(playing !== null, closePlayer);

  // 영상이 열려 있으면 Esc로 영상만 닫고 목록은 남긴다 (갤러리 크게 보기와 같은 방식)
  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDialogElement>) => {
    if (!playing || event.key !== "Escape") return;
    event.preventDefault();
    closePlayer();
  };

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    if (!playing) return;
    event.preventDefault();
    closePlayer();
  };

  const pickAlbum = (next: string) => {
    setAlbum(next);
    trackEvent({ name: "filter_fancam", params: { album: next } });
    dialogRef.current?.scrollTo({ top: 0 });
  };

  const handleThumbnailLoad = (id: string) => {
    setLoaded((current) =>
      current.has(id) ? current : new Set([...current, id]),
    );
  };

  return (
    <dialog
      ref={dialogRef}
      className={g.sheet}
      aria-labelledby="fancam-title"
      onClose={handleClose}
      onCancel={handleCancel}
      onKeyDown={handleKeyDown}
    >
      {/* 영상이 떠 있는 동안 가려진 위쪽 줄과 목록은 눌리지도, 포커스가 가지도 않게 한다 */}
      <div className={g.head} inert={isPlaying}>
        <h2 className={g.title} id="fancam-title">
          FANCAM <span>{FANCAMS.length}</span>
        </h2>
        {ALBUM_OPTIONS.length > 1 && (
          <ChipBar
            label="활동 묶음"
            options={[ALL, ...ALBUM_OPTIONS]}
            selected={album}
            onSelect={pickAlbum}
            active={open}
          />
        )}
        <button
          type="button"
          className={g.close}
          ref={closeRef}
          aria-label="직캠 닫기"
          onClick={handleClose}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {fancams.length === 0 ? (
        <p className={g.empty}>직캠을 준비하고 있어요.</p>
      ) : (
        <ul className={s.grid} inert={isPlaying}>
          {fancams.map((fancam) => (
            <li key={fancam.id}>
              <button
                type="button"
                className={s.tile}
                data-id={fancam.id}
                aria-label={`${titleOf(fancam)} ${dotDate(fancam.date)} 재생`}
                onClick={() => play(fancam)}
              >
                <span
                  className={s.thumb}
                  data-loaded={loaded.has(fancam.id)}
                >
                  {open && (
                    <img
                      src={thumbnailOf(fancam.id)}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onLoad={() => handleThumbnailLoad(fancam.id)}
                    />
                  )}
                  <span className={s.length}>{fancam.length}</span>
                </span>
                <strong className={s.song}>{fancam.song}</strong>
                <small className={s.meta}>
                  {fancam.show} · {dotDate(fancam.date)}
                </small>
              </button>
            </li>
          ))}
        </ul>
      )}

      {playing && (
        <div className={s.viewer} role="group" aria-label={`${titleOf(playing)} 영상`}>
          <div className={s.viewerHead}>
            <p className={s.viewerTitle}>
              <b>{playing.song}</b>
              <span>
                {playing.show} · {dotDate(playing.date)}
              </span>
            </p>
            <button
              ref={viewerCloseRef}
              type="button"
              className={g.close}
              aria-label="영상 닫기"
              onClick={closePlayer}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className={s.stage}>
            <div className={s.player}>
              <iframe
                key={playing.id}
                src={embedOf(playing.id)}
                title={`${titleOf(playing)} 영상`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
