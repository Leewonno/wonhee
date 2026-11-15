/*
  프로필 모달에 나오는 원희 정보. 출처: 나무위키 「원희(ILLIT)」 (2026-11-14 수정본)

  - facts: 기본 정보. wide를 켜면 한 줄을 다 쓴다. note는 값 옆에 흐리게 붙는 설명
  - timeline: 걸어온 길. 오래된 것부터 적는다. now를 켠 줄은 점이 채워진다 (지금 활동)
    skippedBefore를 켠 줄 앞에는 ‘사이에 더 있음’을 뜻하는 점선 구간이 들어간다
*/
import profilePhoto from "@/assets/photos/wonhee-profile.jpg";

export interface ProfileFact {
  readonly label: string;
  readonly value: string;
  readonly note?: string;
  readonly wide?: boolean;
}

export interface ProfileEvent {
  readonly date: string;
  readonly title: string;
  readonly detail?: string;
  readonly now?: boolean;
  /** 이 줄 앞에 생략 구간(점선)을 넣는다. 앞 줄에는 설명(detail)이 있어야 길이가 맞는다 */
  readonly skippedBefore?: boolean;
}

export const PROFILE_PHOTO = {
  src: profilePhoto,
  alt: "회색 벽 앞에서 정면을 보는 원희",
  width: 519,
  height: 693,
} as const;

export const PROFILE_NAME = "원희";
export const PROFILE_NAME_EN = "WONHEE";

export const PROFILE_FACTS: readonly ProfileFact[] = [
  { label: "본명", value: "이원희", note: "李沅禧" },
  { label: "생년월일", value: "2007.06.26" },
  { label: "데뷔일", value: "2024.03.25" },
  { label: "그룹", value: "ILLIT" },
  { label: "소속사", value: "빌리프랩" },
  { label: "좌우명", value: "후회하지 않기" },
];

export const PROFILE_TIMELINE: readonly ProfileEvent[] = [
  { date: "2007.06.26", title: "부산광역시 사상구", detail: "초등학생 때 창원으로 이사" },
  { date: "2023.09.01", title: "알유넥스트 최종 1위", detail: "ILLIT 멤버 확정" },
  { date: "2024.03.25", title: "데뷔", detail: "미니 1집 SUPER REAL ME" },
  { date: "2026.10.26", title: "미니 5집 BREAK EVEN", now: true, skippedBefore: true },
];
