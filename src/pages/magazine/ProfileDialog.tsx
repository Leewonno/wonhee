import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
} from "react";
import s from "./ProfileDialog.module.css";
import {
  PROFILE_FACTS,
  PROFILE_NAME_EN,
  PROFILE_PHOTO,
  PROFILE_TIMELINE,
} from "./profile.ts";
import { SIGN_STROKE_DOWN, SIGN_STROKE_NAME, SIGN_VIEWBOX } from "./sign.ts";
import { useCloseOnBack } from "@/lib/useCloseOnBack.ts";

// 끝에서 이만큼 안쪽까지 내려오면 끝까지 내린 것으로 본다 (소수점 픽셀 오차)
const END_TOLERANCE_PX = 2;

function isScrolledToEnd(element: HTMLElement): boolean {
  return (
    element.scrollTop + element.clientHeight >=
    element.scrollHeight - END_TOLERANCE_PX
  );
}

/*
  생략 구간: 선을 끊지 않고, 점(2px) 사이 칸(3px)의 밝기만 차츰 꺼뜨린다.
  실선에 옅은 패임이 생기다 점점 깊어져 점이 되고, 다시 메워지며 실선으로 돌아온다.
  - SKIP_DOT_ALPHAS: 점 9개의 밝기. 양 끝은 실선과 같고(0.18) 가운데로 갈수록 조금 밝다
  - SKIP_NOTCH_ALPHAS: 점 사이 8칸의 밝기. 0이면 완전히 끊긴 칸 (가운데 2칸)
  전체 길이 = 9×2 + 8×3 = 42px. 생략 줄은 높이가 0이라 줄 간격은 다른 줄과 같고,
  조각은 앞 줄 쪽으로 34px, 다음 줄 쪽으로 8px 넘쳐서 그린다 (CSS의 .skip::after와 같은 값)
*/
const SKIP_DOT_PX = 2;
const SKIP_NOTCH_PX = 3;
const SKIP_DOT_ALPHAS: readonly number[] = [
  0.18, 0.2, 0.23, 0.27, 0.3, 0.27, 0.23, 0.2, 0.18,
];
const SKIP_NOTCH_ALPHAS: readonly number[] = [
  0.12, 0.07, 0.02, 0, 0, 0.02, 0.07, 0.12,
];
// 조각들이 생략 줄 위쪽(앞 줄 설명 옆)으로 넘쳐서 시작하는 위치. CSS의 .skip::after top과 같은 값
const SKIP_START_PX = -34;

interface SkipBit {
  readonly top: number;
  readonly height: number;
  readonly alpha: number;
}

const SKIP_BIT_LAYOUT: readonly SkipBit[] = SKIP_DOT_ALPHAS.flatMap(
  (dotAlpha, index) => {
    const top = SKIP_START_PX + index * (SKIP_DOT_PX + SKIP_NOTCH_PX);
    const dot: SkipBit = { top, height: SKIP_DOT_PX, alpha: dotAlpha };
    const notchAlpha = SKIP_NOTCH_ALPHAS[index] ?? 0;
    if (notchAlpha === 0) return [dot];
    return [
      dot,
      { top: top + SKIP_DOT_PX, height: SKIP_NOTCH_PX, alpha: notchAlpha },
    ];
  },
);

interface ProfileDialogProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

export default function ProfileDialog({ open, onClose }: ProfileDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atEnd, setAtEnd] = useState(false);
  useCloseOnBack(open, onClose);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
      // 다시 열 때는 항상 맨 위(사진)부터 보여 준다
      const scroller = scrollerRef.current;
      if (scroller) {
        scroller.scrollTop = 0;
        setAtEnd(isScrolledToEnd(scroller));
      }
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // 카드 바깥(흐린 배경)을 누르면 닫는다
  const handleClick = (event: ReactMouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  const className = [s.dialog, atEnd ? s.atEnd : null]
    .filter(Boolean)
    .join(" ");

  return (
    <dialog
      ref={dialogRef}
      className={className}
      aria-labelledby="profile-title"
      onClose={onClose}
      onClick={handleClick}
    >
      <button
        ref={closeRef}
        type="button"
        className={s.close}
        aria-label="닫기"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div
        ref={scrollerRef}
        className={s.scroller}
        onScroll={(event) => setAtEnd(isScrolledToEnd(event.currentTarget))}
      >
        <div className={s.top}>
          <img
            src={PROFILE_PHOTO.src}
            alt={PROFILE_PHOTO.alt}
            width={PROFILE_PHOTO.width}
            height={PROFILE_PHOTO.height}
            // 모달을 열기 전에는 받지 않아서 첫 화면 사진 로딩을 방해하지 않는다
            loading="lazy"
          />
          <div className={s.title}>
            <h2 id="profile-title">
              {/* 메인 화면과 같은 손글씨 사인. 화면 낭독기는 아래 영문 이름을 읽는다 */}
              <svg
                className={s.sign}
                viewBox={SIGN_VIEWBOX}
                aria-hidden="true"
                focusable="false"
              >
                <path d={SIGN_STROKE_DOWN} />
                <path d={SIGN_STROKE_NAME} />
              </svg>
              <span>{PROFILE_NAME_EN}</span>
            </h2>
          </div>
        </div>

        <div className={s.body}>
          <dl className={s.facts}>
            {PROFILE_FACTS.map((fact) => (
              <div
                key={fact.label}
                className={fact.wide ? s.wide : undefined}
              >
                <dt>{fact.label}</dt>
                <dd>
                  {fact.value}
                  {fact.note && <span> {fact.note}</span>}
                </dd>
              </div>
            ))}
          </dl>

          <section className={s.section} aria-labelledby="profile-timeline">
            <h3 id="profile-timeline">걸어온 길</h3>
            <ol className={s.timeline}>
              {PROFILE_TIMELINE.map((event) => (
                <Fragment key={`${event.date}-${event.title}`}>
                  {event.skippedBefore && (
                    <li className={s.skip} aria-hidden="true">
                      {SKIP_BIT_LAYOUT.map((bit) => (
                        <i
                          key={bit.top}
                          style={
                            {
                              top: bit.top,
                              height: bit.height,
                              "--a": bit.alpha,
                            } as CSSProperties
                          }
                        />
                      ))}
                    </li>
                  )}
                  <li className={event.now ? s.now : undefined}>
                    <time>{event.date}</time>
                    <p>
                      {event.title}
                      {event.detail && (
                        <span className={s.detail}>{event.detail}</span>
                      )}
                    </p>
                  </li>
                </Fragment>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </dialog>
  );
}
