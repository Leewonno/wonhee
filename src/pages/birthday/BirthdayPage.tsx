import { useState, type CSSProperties } from 'react'
import s from './BirthdayPage.module.css'
import pastel01 from '@/assets/photos/pastel-01.jpg'
import pastel02 from '@/assets/photos/pastel-02.jpg'
import pastel03 from '@/assets/photos/pastel-03.jpg'
import diner02 from '@/assets/photos/diner-02.jpg'
import diner04 from '@/assets/photos/diner-04.jpg'
import editorial03 from '@/assets/photos/editorial-03.jpg'
import editorial06 from '@/assets/photos/editorial-06.jpg'
import editorial07 from '@/assets/photos/editorial-07.jpg'

// 컨페티: 처음 한 번 떨어져서 벽에 붙는다
function createConfetti(): {
  width: string
  left: string
  top: string
  background: string
  delay: string
}[] {
  const colors = ['#f8b4d1', '#776dc8', '#f7eeab', '#a9d3f2', '#e8776b', '#b9e3c6']
  return Array.from({ length: 54 }, (_, i) => {
    const size = 8 + Math.random() * 9
    return {
      width: size + 'px',
      left: Math.random() * 100 + '%',
      top: 12 + Math.random() * 84 + '%',
      background: colors[i % colors.length],
      delay: (Math.random() * 1.1).toFixed(2) + 's',
    }
  })
}

// 다음 생일까지 남은 날
function getBirthdayLabel(now: Date): string {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let next = new Date(today.getFullYear(), 5, 26)
  if (next < today) next = new Date(today.getFullYear() + 1, 5, 26)
  const days = Math.round((next.getTime() - today.getTime()) / 86400000)
  return days === 0 ? '오늘!' : 'D-' + days
}

export default function BirthdayPage() {
  const [confetti] = useState(createConfetti)
  const [ddayLabel] = useState(() => getBirthdayLabel(new Date()))

  return (
    <div className={s.page}>
      <title>WONHEE</title>

      <header className={s.top}>
        <a className={s.brand} href="#">원희네 방</a>
        <nav aria-label="주요 메뉴">
          <a href="#profile">프로필</a>
          <a href="#photos">사진</a>
        </nav>
      </header>

      <main>
        <section className={s.hero}>
          <div className={s.confetti} aria-hidden="true">
            {confetti.map(({ width, left, top, background, delay }, index) => (
              <i
                key={index}
                style={{ width, left, top, background, '--d': delay } as CSSProperties}
              />
            ))}
          </div>

          <svg className={s.garland} viewBox="0 0 1200 150" aria-hidden="true">
            <defs>
              <g id="bow">
                <path d="M0 0c-16-16-34-14-34 0s18 16 34 0z" fill="#f6a9c9" />
                <path d="M0 0c16-16 34-14 34 0s-18 16-34 0z" fill="#f6a9c9" />
                <path d="M-3 2c-6 20-11 38-9 58l6-7 5 8c1-20 2-40 2-58z" fill="#f29bbf" />
                <path d="M3 2c6 18 12 32 13 50l-6-6-4 9c-2-18-5-36-6-52z" fill="#f29bbf" />
                <circle r="6" fill="#ec86b3" />
              </g>
            </defs>
            <path
              d="M-20 12 Q130 118 280 34 Q440 132 600 30 Q760 132 920 34 Q1070 118 1220 12"
              fill="none"
              stroke="#fbf3dc"
              strokeWidth="16"
              strokeLinecap="round"
            />
            <path
              d="M-20 12 Q130 118 280 34 Q440 132 600 30 Q760 132 920 34 Q1070 118 1220 12"
              fill="none"
              stroke="#efe2bd"
              strokeWidth="2"
              strokeDasharray="2 9"
              strokeLinecap="round"
            />
            <use href="#bow" x="280" y="34" />
            <use href="#bow" x="600" y="30" />
            <use href="#bow" x="920" y="34" />
            <use href="#bow" x="130" y="72" transform="rotate(8 130 72)" />
            <use href="#bow" x="440" y="82" transform="rotate(-6 440 82)" />
            <use href="#bow" x="760" y="82" transform="rotate(6 760 82)" />
            <use href="#bow" x="1070" y="72" transform="rotate(-8 1070 72)" />
          </svg>

          <div className={s.pile}>
            <figure className={`${s.pol} ${s.side} ${s.left}`}>
              <img src={pastel03} alt="분홍 왕관을 쓰고 생일 케이크를 든 원희" loading="lazy" />
              <figcaption>후- 불기 직전</figcaption>
            </figure>
            <figure className={`${s.pol} ${s.main}`}>
              <img src={pastel01} alt="보라색 프릴 침대에 앉아 컨페티 속에서 웃고 있는 원희" loading="lazy" />
              <figcaption>오늘의 주인공</figcaption>
            </figure>
            <figure className={`${s.pol} ${s.side} ${s.right}`}>
              <img src={pastel02} alt="꽃무늬 소파에 앉아 토끼 인형을 끌어안은 원희" loading="lazy" />
              <figcaption>토끼는 내 거</figcaption>
            </figure>
          </div>

          <h1 lang="en">Wonhee</h1>
          <p className={s.hello}>아일릿 원희를 좋아하는 마음을 한 장씩 붙여 두는 스크랩북</p>
        </section>

        <div className={`${s.ruffle} ${s.up}`} aria-hidden="true" />
        <section id="profile" className={`${s.party} ${s.skirt}`}>
          <div className={s.invite}>
            <svg className={s.crown} viewBox="0 0 160 112" aria-hidden="true">
              <path
                d="M12 100V48l30 22L80 8l38 62 30-22v52z"
                fill="#f9bdd7"
                stroke="#fff"
                strokeWidth="7"
                strokeLinejoin="round"
              />
              <path
                d="M80 48l5 13.100 14 .7-10.900 8.800 3.700 13.600L80 76.500l-11.800 7.700 3.700-13.600L61 61.800l14-.7z"
                fill="#f7eeab"
              />
              <rect x="12" y="92" width="136" height="10" rx="3" fill="#fff" />
            </svg>
            <div className={s.inviteIn}>
              <h2>원희 생일까지</h2>
              <p className={s.dday} id="dday">{ddayLabel}</p>
              <p className={s.date}>매년 6월 26일</p>
              <dl>
                <dt>이름</dt><dd>원희 (이원희)</dd>
                <dt>소속</dt><dd>아일릿 ILLIT</dd>
                <dt>태어난 날</dt><dd>2007년 6월 26일</dd>
                <dt>데뷔한 날</dt><dd>2024년 3월 25일</dd>
              </dl>
            </div>
          </div>
        </section>
        <div className={`${s.ruffle} ${s.down}`} aria-hidden="true" />

        <section id="photos" className={s.album}>
          <h2>붙여 둔 사진들</h2>
          <ul className={s.grid}>
            <li><figure className={s.pol}>
              <img src={diner02} alt="이마에 곰돌이 패치를 붙이고 곁눈질하는 원희" loading="lazy" style={{ objectPosition: '52% 40%' }} />
              <figcaption>곰돌이 패치</figcaption>
            </figure></li>
            <li><figure className={s.pol}>
              <img src={editorial07} alt="초록 셔츠를 입고 옆을 바라보는 원희 클로즈업" loading="lazy" style={{ objectPosition: '50% 32%' }} />
              <figcaption>초록 셔츠</figcaption>
            </figure></li>
            <li><figure className={s.pol}>
              <img src={pastel02} alt="꽃무늬 소파에서 토끼 인형을 안고 있는 원희" loading="lazy" style={{ objectPosition: '40% 14%' }} />
              <figcaption>토끼 인형이랑</figcaption>
            </figure></li>
            <li><figure className={s.pol}>
              <img src={editorial06} alt="잡지 더미 옆에 기대앉아 뒤돌아보는 원희" loading="lazy" style={{ objectPosition: '60% 20%' }} />
              <figcaption>잡지 더미 옆</figcaption>
            </figure></li>
            <li><figure className={s.pol}>
              <img src={diner04} alt="두 주먹을 들어 보이는 원희" loading="lazy" style={{ objectPosition: '46% 30%' }} />
              <figcaption>덤벼라!</figcaption>
            </figure></li>
            <li><figure className={s.pol}>
              <img src={editorial03} alt="노란 상자와 열쇠를 든 원희" loading="lazy" style={{ objectPosition: '50% 16%' }} />
              <figcaption>열쇠랑 노란 상자</figcaption>
            </figure></li>
          </ul>
        </section>
      </main>

      <div className={`${s.ruffle} ${s.up}`} aria-hidden="true" />
      <footer className={s.skirt}>
        <p className={s.signOff}>또 놀러 와요</p>
        <p>팬이 직접 운영하는 비공식 사이트입니다. 사진과 영상의 권리는 각 권리자에게 있습니다.</p>
      </footer>
    </div>
  )
}
