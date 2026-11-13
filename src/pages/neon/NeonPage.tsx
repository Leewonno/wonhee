import s from './NeonPage.module.css'
import diner01 from '@/assets/photos/diner-01.jpg'
import diner02 from '@/assets/photos/diner-02.jpg'
import diner03 from '@/assets/photos/diner-03.jpg'
import diner04 from '@/assets/photos/diner-04.jpg'
import diner05 from '@/assets/photos/diner-05.jpg'
import diner06 from '@/assets/photos/diner-06.jpg'

export default function NeonPage() {
  return (
    <div className={s.page}>
      <title>hee</title>

      <header className={s.top}>
        <a className={s.brand} href="#">원희</a>
        <nav aria-label="주요 메뉴">
          <a href="#profile">차림표</a>
          <a href="#photos">사진</a>
        </nav>
      </header>

      <main>
        <section className={s.hero}>
          <img src={diner04} alt="푸른 조명의 식당에서 이마에 곰돌이 패치를 붙이고 두 주먹을 들어 보이는 원희" />
          <h1 className={s.sign} aria-label="원희 WONHEE">WONHEE</h1>
          <p className={s.heroLine}>아일릿 원희 팬사이트, 밤새 영업합니다.</p>
        </section>

        <div className={s.patch} aria-hidden="true"></div>

        <section id="profile" className={s.profile}>
          <figure className={s.closeup}>
            <img src={diner06} alt="분홍색 눈물이 흐르는 얼굴로 정면을 바라보는 원희 클로즈업" loading="lazy" />
          </figure>
          <div className={s.board}>
            <h2>차림표</h2>
            <dl>
              <div><dt>이름</dt><dd>원희 <small>이원희</small></dd></div>
              <div><dt>소속</dt><dd>아일릿 <small>ILLIT</small></dd></div>
              <div><dt>생일</dt><dd>2007. 6. 26</dd></div>
              <div><dt>데뷔</dt><dd>2024. 3. 25</dd></div>
            </dl>
            <p>원희의 사진과 소식을 그날그날 차려 두는 팬사이트입니다. 천천히 둘러보고 가세요.</p>
          </div>
        </section>

        <section id="photos" className={s.reel}>
          <h2>오늘의 장면</h2>
          <div className={s.strip} tabIndex={0} role="region" aria-label="식당 사진 모음. 좌우로 넘겨 보세요.">
            <figure>
              <img src={diner01} alt="국수 그릇이 놓인 식탁에 기대앉아 옆을 바라보는 원희" loading="lazy" />
              <figcaption>(국수가 불고 있다)</figcaption>
            </figure>
            <figure>
              <img src={diner02} alt="어깨 너머로 곁눈질하는 원희 클로즈업" loading="lazy" />
              <figcaption>(뒤에서 인기척이 난다)</figcaption>
            </figure>
            <figure className={s.posBear}>
              <img src={diner03} alt="기둥에 묶인 커다란 곰인형 앞에서 두 팔을 치켜든 원희" loading="lazy" />
              <figcaption>(곰인형과 한판 붙는 중)</figcaption>
            </figure>
            <figure>
              <img src={diner05} alt="네온 간판이 켜진 빈 식당에서 혼자 국수를 먹는 원희" loading="lazy" />
              <figcaption>(손님은 한 명뿐)</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer>
        <div className={s.notice}>
          <p>비공식입니다</p>
          <p>팬사이트입니다</p>
          <p className={s.thanks}>감사합니다</p>
        </div>
        <small>팬이 직접 운영하는 비공식 사이트입니다. 사진과 영상의 권리는 각 권리자에게 있습니다.</small>
      </footer>
    </div>
  )
}
