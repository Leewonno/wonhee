import { useCallback, useSyncExternalStore } from "react";

// 미디어 쿼리가 맞는지 돌려주고, 화면 크기가 바뀌어 결과가 달라지면 다시 그린다
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
}
