import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import s from './MagazinePage.module.css'
import diner01 from '@/assets/photos/diner-01.jpg'
import diner02 from '@/assets/photos/diner-02.jpg'
import diner03 from '@/assets/photos/diner-03.jpg'
import diner04 from '@/assets/photos/diner-04.jpg'
import diner05 from '@/assets/photos/diner-05.jpg'
import diner06 from '@/assets/photos/diner-06.jpg'
import editorial01 from '@/assets/photos/editorial-01.jpg'
import editorial02 from '@/assets/photos/editorial-02.jpg'
import editorial03 from '@/assets/photos/editorial-03.jpg'
import editorial04 from '@/assets/photos/editorial-04.jpg'
import editorial05 from '@/assets/photos/editorial-05.jpg'
import editorial06 from '@/assets/photos/editorial-06.jpg'
import editorial07 from '@/assets/photos/editorial-07.jpg'
import pastel01 from '@/assets/photos/pastel-01.jpg'
import pastel02 from '@/assets/photos/pastel-02.jpg'
import pastel03 from '@/assets/photos/pastel-03.jpg'

const AUTO_ADVANCE_MS = 5000
const SWIPE_THRESHOLD_PX = 40
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

interface Photo {
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
  readonly objectPosition?: string
}

interface Slide {
  readonly id: string
  readonly layout: 'three' | 'one'
  readonly photos: readonly Photo[]
}

interface Arrow {
  readonly key: string
  readonly className: string
  readonly label: string
  readonly delta: -1 | 1
  readonly path: string
}

const SLIDES: readonly Slide[] = [
  {
    id: 'slide-01',
    layout: 'three',
    photos: [
      { src: editorial02, alt: '위에서 내려다본 구도로, 노란 책을 안고 옆을 바라보는 원희', width: 1440, height: 1920 },
      { src: editorial03, alt: '파란 벽 앞에 서서 노란 상자와 열쇠를 들어 보이는 원희', width: 1440, height: 1920 },
      { src: editorial07, alt: '흰 배경 앞, 옆을 바라보는 원희 얼굴 클로즈업', width: 1372, height: 1920 },
    ],
  },
  {
    id: 'slide-02',
    layout: 'one',
    photos: [
      { src: editorial05, alt: '바닥에 앉아 분홍색 책자를 펼쳐 든 원희', width: 1920, height: 1281 },
    ],
  },
  {
    id: 'slide-03',
    layout: 'one',
    photos: [
      { src: editorial04, alt: '물건이 흩어진 방, 파란 벽에 기대선 원희의 전신 사진', width: 1920, height: 1281 },
    ],
  },
  {
    id: 'slide-04',
    layout: 'one',
    photos: [
      { src: editorial01, alt: '바닥에 엎드리듯 기대어 카메라를 바라보는 원희', width: 1920, height: 1440 },
    ],
  },
  {
    id: 'slide-05',
    layout: 'one',
    photos: [
      { src: editorial06, alt: '잡지 더미 옆에 기대앉아 뒤돌아보는 원희', width: 1920, height: 1440, objectPosition: '50% 0%' },
    ],
  },
  {
    id: 'slide-06',
    layout: 'one',
    photos: [
      { src: diner04, alt: '푸른 조명의 식당에서 이마에 곰돌이 패치를 붙이고 두 주먹을 들어 보이는 원희', width: 1920, height: 1318 },
    ],
  },
  {
    id: 'slide-07',
    layout: 'one',
    photos: [
      { src: diner01, alt: '국수 그릇이 놓인 식탁에 기대앉아 옆을 바라보는 원희', width: 1920, height: 1318 },
    ],
  },
  {
    id: 'slide-08',
    layout: 'one',
    photos: [
      { src: diner02, alt: '이마에 곰돌이 패치를 붙이고 곁눈질하는 원희', width: 1920, height: 1318 },
    ],
  },
  {
    id: 'slide-09',
    layout: 'one',
    photos: [
      { src: diner03, alt: '기둥에 묶인 커다란 곰인형 앞에서 두 팔을 치켜든 원희', width: 1920, height: 1318 },
    ],
  },
  {
    id: 'slide-10',
    layout: 'one',
    photos: [
      { src: diner05, alt: '네온 간판이 켜진 빈 식당에서 혼자 국수를 먹는 원희', width: 1920, height: 1273 },
    ],
  },
  {
    id: 'slide-11',
    layout: 'one',
    photos: [
      { src: diner06, alt: '분홍색 눈물이 흐르는 얼굴로 정면을 바라보는 원희 클로즈업', width: 1920, height: 1318 },
    ],
  },
  {
    id: 'slide-12',
    layout: 'three',
    photos: [
      { src: pastel01, alt: '보라색 프릴 침대에 앉아 컨페티 속에서 웃고 있는 원희', width: 1536, height: 1920 },
      { src: pastel03, alt: '분홍 왕관을 쓰고 생일 케이크를 든 원희', width: 1920, height: 1920 },
      { src: pastel02, alt: '꽃무늬 소파에 앉아 토끼 인형을 끌어안은 원희', width: 1536, height: 1920 },
    ],
  },
]

const ARROWS: readonly Arrow[] = [
  { key: 'prev', className: s.prev, label: '이전 사진', delta: -1, path: 'M15 4l-8 8 8 8' },
  { key: 'next', className: s.next, label: '다음 사진', delta: 1, path: 'M9 4l8 8-8 8' },
]

export default function MagazinePage() {
  const [index, setIndex] = useState(0)
  const [held, setHeld] = useState(false)
  const [isHidden, setIsHidden] = useState(() => document.hidden)
  const dragFromX = useRef<number | null>(null)

  const move = useCallback((delta: number) => {
    setIndex((current) => (current + delta + SLIDES.length) % SLIDES.length)
  }, [])

  // 자동 넘김: 인덱스가 바뀔 때마다 5초 카운트다운을 새로 시작한다
  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches
    if (held || isHidden || reducedMotion) return
    const timer = window.setTimeout(() => move(1), AUTO_ADVANCE_MS)
    return () => window.clearTimeout(timer)
  }, [index, held, isHidden, move])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [move])

  useEffect(() => {
    const handleVisibilityChange = () => setIsHidden(document.hidden)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    dragFromX.current = event.pointerType === 'mouse' ? null : event.clientX
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const startX = dragFromX.current
    dragFromX.current = null
    if (startX === null) return
    const movedX = event.clientX - startX
    if (Math.abs(movedX) >= SWIPE_THRESHOLD_PX) move(movedX < 0 ? 1 : -1)
  }

  const handlePointerCancel = () => {
    dragFromX.current = null
  }

  return (
    <div className={s.page}>
      <title>원희 팬사이트</title>
      <main>
        <section
          className={s.stage}
          aria-roledescription="캐러셀"
          aria-label="원희 사진"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div className={s.slides} id="slides" aria-live={held ? 'polite' : 'off'}>
            {SLIDES.map((slide, slideIndex) => {
              const isActive = slideIndex === index
              const className = [
                s.slide,
                slide.layout === 'three' ? s.three : null,
                isActive ? s.isActive : null,
              ]
                .filter(Boolean)
                .join(' ')
              return (
                <div
                  key={slide.id}
                  className={className}
                  role="group"
                  aria-roledescription="슬라이드"
                  aria-label={`${SLIDES.length}장 중 ${slideIndex + 1}번째`}
                  aria-hidden={!isActive}
                >
                  {slide.photos.map((photo) => (
                    <figure key={photo.src}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        loading={slideIndex === 0 ? 'eager' : 'lazy'}
                        style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                      />
                    </figure>
                  ))}
                </div>
              )
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
                if (event.currentTarget.matches(':focus-visible')) setHeld(true)
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
            <path className={s.s1} pathLength="1" d="M114.8 6C78 67.6 41.9 129.5 6 191.6" />
            <path className={s.s2} pathLength="1" d="M6 191.6C25.2 169 44.9 147.2 65.9 126.3C69.2 123 84.5 105.3 88.9 108C93.4 110.7 89.7 121.3 88.6 125C84.7 138.1 77.8 173.9 103 170.9C117.2 169.2 150.1 121.8 160.1 109.3C164.4 103.9 176.3 93 170.8 85.5C164.1 76.5 149.7 91.1 145.1 96C129.9 112.2 104.3 154.9 132.1 171.2C162.2 188.9 202.2 130.6 215.5 109.8C222.5 98.9 232 84 232.3 70.6C232.4 69.7 232.4 67.3 231 67.1C229.2 66.8 217 85.9 215.1 88.8C203.2 106.9 191.5 125.7 182.6 145.4C179.8 151.5 174.5 161.6 178.1 168.2C179.6 171 182.5 172.6 185.4 173.5C198.7 178 209.2 167.8 217.3 158.6C246.9 124.9 265.5 110.2 279.6 65C280.2 59 282.4 50.8 279.4 45.2C272.8 32.6 240.2 61.9 236.4 69.3C235.1 71.9 236 73.9 236.3 76.5C250.7 72.6 264.9 67.7 279.6 65C272 70.5 226.4 112.5 243.8 114.8C251.6 115.8 273.5 72.5 279.6 65C284.4 57.5 288.4 49.8 296.8 45.6C317.3 35.2 324.1 57.1 298.8 66.2C292.4 65.8 286 65.4 279.6 65C286 65.4 292.4 65.8 298.8 66.2C328.4 78.6 298.6 107.2 272.6 96.5" />
          </svg>
        </h1>
        <p>ILLIT · WONHEE · 2007.06.26</p>
      </header>
    </div>
  )
}
