import { useEffect, useRef, useState } from "react";
import s from "./GalleryDialog.module.css";

/*
  모달 위쪽의 고르기 버튼 줄(갤러리 촬영 묶음, 직캠 곡).
  버튼이 칸보다 많아 넘치면 양끝에 화살표가 생기고, 누르면 옆으로 민다
*/

// 화살표를 한 번 누르면 보이는 너비의 이만큼 옆으로 민다
const CHIP_SCROLL_RATIO = 0.7;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

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

interface ChipBarProps {
  /** 버튼 묶음 이름. 화면 낭독기가 읽는다 (예: "촬영 묶음") */
  readonly label: string;
  readonly options: readonly string[];
  readonly selected: string;
  readonly onSelect: (option: string) => void;
  /** 모달이 열려 있을 때만 넘침을 잰다 */
  readonly active: boolean;
}

export default function ChipBar({
  label,
  options,
  selected,
  onSelect,
  active,
}: ChipBarProps) {
  const chipsRef = useRef<HTMLDivElement>(null);
  const edges = useScrollEdges(chipsRef, active);

  const scroll = (direction: -1 | 1) => {
    const chips = chipsRef.current;
    if (!chips) return;
    const reduceMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    chips.scrollBy({
      left: direction * chips.clientWidth * CHIP_SCROLL_RATIO,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className={s.chipBar}>
      {edges.overflow && (
        <button
          type="button"
          className={s.chipArrow}
          aria-label={`앞쪽 ${label} 보기`}
          aria-disabled={edges.atStart}
          onClick={() => !edges.atStart && scroll(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
      )}
      <div ref={chipsRef} className={s.chips} role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={s.chip}
            aria-pressed={selected === option}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {edges.overflow && (
        <button
          type="button"
          className={s.chipArrow}
          aria-label={`뒤쪽 ${label} 보기`}
          aria-disabled={edges.atEnd}
          onClick={() => !edges.atEnd && scroll(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
