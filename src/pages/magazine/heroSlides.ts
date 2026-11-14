/*
  메인 화면 슬라이드에 나오는 사진. BREAK EVEN 4개 버전 사진을 모두 쓴다.
  파일은 갤러리 원본 주소에 ?type=e1920을 붙여 긴 변 1920px로 받아 assets에 넣었다.

  - layout "three": 세로 사진 세 장을 나란히 보여준다
  - layout "one": 사진 한 장을 화면 가득 보여준다
  - focus: 얼굴 중심 위치. 사진 왼쪽 위가 0, 오른쪽 아래가 1
*/
import gllit01 from "@/assets/photos/break-even-gllit-01.jpg";
import gllit02 from "@/assets/photos/break-even-gllit-02.jpg";
import gllit03 from "@/assets/photos/break-even-gllit-03.jpg";
import gllit04 from "@/assets/photos/break-even-gllit-04.jpg";
import gllit05 from "@/assets/photos/break-even-gllit-05.jpg";
import gllit06 from "@/assets/photos/break-even-gllit-06.jpg";
import gllit07 from "@/assets/photos/break-even-gllit-07.jpg";
import mad01 from "@/assets/photos/break-even-mad-01.jpg";
import mad02 from "@/assets/photos/break-even-mad-02.jpg";
import mad03 from "@/assets/photos/break-even-mad-03.jpg";
import mad04 from "@/assets/photos/break-even-mad-04.jpg";
import mad05 from "@/assets/photos/break-even-mad-05.jpg";
import mad06 from "@/assets/photos/break-even-mad-06.jpg";
import quiet01 from "@/assets/photos/break-even-quiet-01.jpg";
import quiet02 from "@/assets/photos/break-even-quiet-02.jpg";
import quiet03 from "@/assets/photos/break-even-quiet-03.jpg";
import quiet04 from "@/assets/photos/break-even-quiet-04.jpg";
import quiet05 from "@/assets/photos/break-even-quiet-05.jpg";
import quiet06 from "@/assets/photos/break-even-quiet-06.jpg";
import burning01 from "@/assets/photos/break-even-burning-01.jpg";
import burning02 from "@/assets/photos/break-even-burning-02.jpg";
import burning03 from "@/assets/photos/break-even-burning-03.jpg";
import burning04 from "@/assets/photos/break-even-burning-04.jpg";
import burning05 from "@/assets/photos/break-even-burning-05.jpg";
import burning06 from "@/assets/photos/break-even-burning-06.jpg";

export interface Photo {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  /** 얼굴 중심 위치. 사진 왼쪽 위가 0, 오른쪽 아래가 1 */
  readonly focus: { readonly x: number; readonly y: number };
}

export interface Slide {
  readonly id: string;
  readonly layout: "three" | "one";
  readonly photos: readonly Photo[];
}

function single(id: string, photo: Photo): Slide {
  return { id, layout: "one", photos: [photo] };
}

export const SLIDES: readonly Slide[] = [
  // GLLIT Ver.
  {
    id: "gllit-portraits",
    layout: "three",
    photos: [
      {
        src: gllit06,
        alt: "위에서 내려다본 구도로, 노란 책을 안고 옆을 바라보는 원희",
        width: 1440,
        height: 1920,
        focus: { x: 0.5, y: 0.31 },
      },
      {
        src: gllit05,
        alt: "파란 벽 앞에 서서 노란 상자와 열쇠를 들어 보이는 원희",
        width: 1440,
        height: 1920,
        focus: { x: 0.53, y: 0.22 },
      },
      {
        src: gllit01,
        alt: "흰 배경 앞, 옆을 바라보는 원희 얼굴 클로즈업",
        width: 1372,
        height: 1920,
        focus: { x: 0.5, y: 0.38 },
      },
    ],
  },
  single("gllit-03", {
    src: gllit03,
    alt: "바닥에 앉아 분홍색 책자를 펼쳐 든 원희",
    width: 1920,
    height: 1281,
    focus: { x: 0.37, y: 0.22 },
  }),
  single("gllit-04", {
    src: gllit04,
    alt: "물건이 흩어진 방, 파란 벽에 기대선 원희의 전신 사진",
    width: 1920,
    height: 1281,
    focus: { x: 0.58, y: 0.27 },
  }),
  single("gllit-07", {
    src: gllit07,
    alt: "바닥에 엎드리듯 기대어 카메라를 바라보는 원희",
    width: 1920,
    height: 1440,
    focus: { x: 0.14, y: 0.41 },
  }),
  single("gllit-02", {
    src: gllit02,
    alt: "잡지 더미 옆에 기대앉아 뒤돌아보는 원희",
    width: 1920,
    height: 1440,
    focus: { x: 0.56, y: 0.14 },
  }),

  // MAD Ver.
  {
    id: "mad-portraits",
    layout: "three",
    photos: [
      {
        src: mad03,
        alt: "초록 나무 벽 앞, 남색 가방 옆에 선 원희의 전신 사진",
        width: 1281,
        height: 1920,
        focus: { x: 0.41, y: 0.31 },
      },
      {
        src: mad04,
        alt: "선인장이 올라간 아이스크림 콘을 들고 있는 원희",
        width: 1281,
        height: 1920,
        focus: { x: 0.43, y: 0.29 },
      },
      {
        src: mad06,
        alt: "안경을 쓰고 식탁에 케첩으로 그림을 그린 원희",
        width: 1281,
        height: 1920,
        focus: { x: 0.39, y: 0.16 },
      },
    ],
  },
  single("mad-01", {
    src: mad01,
    alt: "이끼 낀 나무 옆 놀이터에서 흰 원피스를 입고 선 원희",
    width: 1920,
    height: 1282,
    focus: { x: 0.58, y: 0.26 },
  }),
  single("mad-02", {
    src: mad02,
    alt: "초록 나무 벽 앞, 금발의 원희 얼굴 클로즈업",
    width: 1920,
    height: 1282,
    focus: { x: 0.28, y: 0.44 },
  }),
  single("mad-05", {
    src: mad05,
    alt: "꽃무늬 커튼 사이로 레이스 천을 대고 얼굴을 내민 원희를 좌우로 이어 붙인 사진",
    width: 1920,
    height: 1440,
    focus: { x: 0.5, y: 0.51 },
  }),

  // QUIET Ver.
  single("quiet-01", {
    src: quiet01,
    alt: "흰 배경 앞에서 긴 머리를 늘어뜨린 원희 사진 두 장을 위아래로 이어 붙인 사진",
    width: 1280,
    height: 1920,
    focus: { x: 0.48, y: 0.28 },
  }),
  single("quiet-02", {
    src: quiet02,
    alt: "흰 커튼이 드리운 방 구석에 쪼그려 앉은 원희",
    width: 1920,
    height: 1440,
    focus: { x: 0.55, y: 0.39 },
  }),
  single("quiet-03", {
    src: quiet03,
    alt: "카메라를 향해 손바닥을 내민 원희",
    width: 1920,
    height: 1440,
    focus: { x: 0.43, y: 0.48 },
  }),
  single("quiet-04", {
    src: quiet04,
    alt: "흰 바닥에 엎드려 유리잔과 병 사이로 머리카락을 늘어뜨린 원희",
    width: 1920,
    height: 1440,
    focus: { x: 0.42, y: 0.18 },
  }),
  single("quiet-05", {
    src: quiet05,
    alt: "어두운 빛 속에서 아래를 내려다보는 원희 얼굴 클로즈업",
    width: 1920,
    height: 1440,
    focus: { x: 0.42, y: 0.63 },
  }),
  single("quiet-06", {
    src: quiet06,
    alt: "어두운 배경 앞, 흰 단 위에 걸터앉은 원희의 전신 사진",
    width: 1920,
    height: 1388,
    focus: { x: 0.43, y: 0.13 },
  }),

  // BURNING Ver.
  single("burning-01", {
    src: burning01,
    alt: "분홍색 눈물이 흐르는 얼굴로 정면을 바라보는 원희 클로즈업",
    width: 1920,
    height: 1318,
    focus: { x: 0.5, y: 0.46 },
  }),
  single("burning-02", {
    src: burning02,
    alt: "네온 간판이 켜진 빈 식당에서 혼자 국수를 먹는 원희",
    width: 1920,
    height: 1273,
    focus: { x: 0.65, y: 0.71 },
  }),
  single("burning-03", {
    src: burning03,
    alt: "푸른 조명의 식당에서 이마에 곰돌이 패치를 붙이고 두 주먹을 들어 보이는 원희",
    width: 1920,
    height: 1318,
    focus: { x: 0.45, y: 0.34 },
  }),
  single("burning-04", {
    src: burning04,
    alt: "기둥에 묶인 커다란 곰인형 앞에서 두 팔을 치켜든 원희",
    width: 1920,
    height: 1318,
    focus: { x: 0.57, y: 0.27 },
  }),
  single("burning-05", {
    src: burning05,
    alt: "이마에 곰돌이 패치를 붙이고 곁눈질하는 원희",
    width: 1920,
    height: 1318,
    focus: { x: 0.51, y: 0.56 },
  }),
  single("burning-06", {
    src: burning06,
    alt: "국수 그릇이 놓인 식탁에 기대앉아 옆을 바라보는 원희",
    width: 1920,
    height: 1318,
    focus: { x: 0.53, y: 0.29 },
  }),
];
