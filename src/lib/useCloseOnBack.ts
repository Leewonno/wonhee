import { useEffect, useRef } from "react";

/*
  모달처럼 화면 위에 덮이는 겹을 브라우저 뒤로가기로 닫을 수 있게 한다.
  - 겹이 열리면 같은 주소로 기록을 한 칸 쌓고, 그 칸에 몇 번째 겹인지 적어 둔다
  - 뒤로가기로 그 칸보다 아래로 내려가면 겹을 닫는다
  - 닫기 버튼·Esc로 닫으면 쌓아 둔 칸을 직접 빼서, 다음 뒤로가기가 헛돌지 않게 한다
  겹이 여러 개 쌓여도(갤러리 위 크게 보기) 위에서부터 하나씩 닫힌다
*/

const DEPTH_KEY = "layerDepth";

let pendingBackSteps = 0;

function depthOf(state: unknown): number {
  if (typeof state !== "object" || state === null) return 0;
  const depth = (state as Record<string, unknown>)[DEPTH_KEY];
  return typeof depth === "number" ? depth : 0;
}

// 여러 겹이 한꺼번에 닫히면 history.back()을 연달아 부르지 않고 한 번에 그만큼 뒤로 간다
function goBackLater() {
  pendingBackSteps += 1;
  if (pendingBackSteps > 1) return;
  queueMicrotask(() => {
    const steps = pendingBackSteps;
    pendingBackSteps = 0;
    window.history.go(-steps);
  });
}

export function useCloseOnBack(open: boolean, onClose: () => void): void {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    const depth = depthOf(window.history.state) + 1;
    // 라우터가 쓰는 기존 state 값은 그대로 두고 겹 번호만 더한다
    window.history.pushState(
      { ...window.history.state, [DEPTH_KEY]: depth },
      "",
    );

    let closedByBack = false;
    const handlePopState = (event: PopStateEvent) => {
      if (depthOf(event.state) >= depth) return;
      closedByBack = true;
      onCloseRef.current();
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (!closedByBack) goBackLater();
    };
  }, [open]);
}
