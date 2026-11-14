/*
  갤러리 모달에 나오는 고화질 사진.
  파일은 프로젝트에 넣지 않고 외부 링크를 그대로 불러온다.

  - src: 사진 주소 (필수)
  - series: 촬영 묶음 이름. 두 가지 이상이면 모달 위쪽에 묶음 버튼이 생긴다
  - alt: 화면 낭독기용 설명. 비우면 "원희 사진 N"으로 읽는다

  예)
  { src: "https://example.com/wonhee-01.jpg", series: "EDITORIAL", alt: "파란 벽 앞에 선 원희" },
*/
export interface GalleryPhoto {
  readonly src: string;
  readonly series?: string;
  readonly alt?: string;
}

export const GALLERY_PHOTOS: readonly GalleryPhoto[] = [
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDZfMjE5/MDAxNzkxMjU1Nzk2Nzc0.ZmjBl0C0jKqHXUhxrYIALbZoZB8Y4fMcuHdBqNFX8TYg.cHNKyKB-Q3O_j5inmsJYwwA0OD19X29sG0PTQEcfgu8g.JPEG/996abff0-850c-4c41-81d3-37638cb4e812.jpeg",
    series: "BREAK EVEN - GLLIT Ver.",
    alt: "흰 배경 앞, 원희 얼굴 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDZfNDgg/MDAxNzkxMjU1Nzk3MjM2.zhu0M50jN3qGt0-mDjeuyTqFF7GpukHFw-VNDHJ2Zu8g.fkKp0iJXipYAUrp_SRWw2ZwDNMp8_zoW-C6AD1k4hc8g.JPEG/b47acb53-5a19-46a4-9a44-c0e9e5cf4bfa.jpeg",
    series: "BREAK EVEN - GLLIT Ver.",
    alt: "잡지 더미 옆 바닥에 기대앉아 고개를 기울인 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDZfNDAg/MDAxNzkxMjU1Nzk2OTM3.sYq3gqtKlzCLbv8UwC2QKaxz87Y5nlaKiEtwTrM8l-gg.ZkiwWVZS6Sbo71FRR1oCNzIOzo0Pfaa0UPxDVvX0oL0g.JPEG/7edf65de-f146-4d1e-aa03-496a12a6d789.jpeg",
    series: "BREAK EVEN - GLLIT Ver.",
    alt: "바닥에 앉아 분홍색 책자를 펼쳐 든 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDZfMTY1/MDAxNzkxMjU1Nzk4NjI5.1bXqf1cwCOlJgsDkJ4F4dmyVZzVXHtQ92LR2AaqABpQg.iZzaWjqzPsxsdE7PHVjIAgzFHVVIVHNxm-ULhlLJ-Owg.JPEG/9a85a818-60e1-43a6-a9a2-71b2aae79e52.jpeg",
    series: "BREAK EVEN - GLLIT Ver.",
    alt: "물건이 흩어진 방, 파란 벽에 기대선 원희의 전신 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDZfMjg4/MDAxNzkxMjU1Nzk4NDQy.WKWAhAvJK-3S90fKnk5Wf_6lXLR0vWmhM_s9pFA5mEYg.S0pYXAYSd2cQDZROCx9m1jNpKwx_3SG-t5m2zpd8bc4g.JPEG/9eddd6f0-6d97-42ba-b1b9-4dbaa9f1d9bb.jpeg",
    series: "BREAK EVEN - GLLIT Ver.",
    alt: "파란 벽 앞에 서서 노란 상자와 열쇠를 들어 보이는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDZfMTMg/MDAxNzkxMjU1Nzk1NzA5.00NNG102hMY9-6lwvKfPwdDrGZU2SebxOWgAexNvB2Yg.SfkplVpwT4eHpR3uJnjQ9hQ3UBvv1IWU4rLxZO4tNYkg.JPEG/722cde4d-abc5-490e-a1bb-dae976652194.jpeg",
    series: "BREAK EVEN - GLLIT Ver.",
    alt: "위에서 내려다본 구도로, 노란 책을 안고 아래를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDZfMTkg/MDAxNzkxMjU1Nzk2MDQ2._OvIzEFfswCWEh-UQRnJocqla_BobDj2XeyAPXV2bWkg.WtxR_Vf0xmQvE9eggQEpkEQh8DZuG_-mkM4ecDriVxwg.JPEG/fb10ece5-a86f-4b9c-ac29-70efa51c0632.jpeg",
    series: "BREAK EVEN - GLLIT Ver.",
    alt: "바닥에 엎드리듯 기대어 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTRfMTIz/MDAxNzkxOTU1MzIxNDI4.X4uS2g4izrP7s7lfcmVJTcYyguH02oJvaIyCeIJnTJQg.wDOWbTmnipunF94W0lEKbBXL4A7Gn5fKLr_4yChuHDAg.JPEG/3c92b89d-5be7-405e-b667-54b41051d26d.jpeg",
    series: "BREAK EVEN - MAD Ver.",
    alt: "이끼 낀 나무 옆 놀이터에서 흰 원피스를 입고 선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTRfNDkg/MDAxNzkxOTU1MzIxMjE2.ci5A2FrPNibY3Kd1mtzvTpmOcb7lXQ0nHuqBXkq7JMUg.H_t0tTcm09rSmzmkqx2ntA8P8iqyWJpJi0DHyretKI0g.JPEG/3c7258d8-3da2-492b-879a-b78ab250c35c.jpeg",
    series: "BREAK EVEN - MAD Ver.",
    alt: "초록 나무 벽 앞, 금발의 원희 얼굴 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTRfMTM1/MDAxNzkxOTU1MzIxNDAy.Frz62ZnbQQ6oows9sCZ1MYMsIak8QKExetj4vX28XgQg.ZPH1V7N4_CnKu5TOknTiu5jzJ7HFsPKwbtcCJ6YWKpgg.JPEG/df2104e1-e9a3-4b0f-94dc-a59859eeb3ac.jpeg",
    series: "BREAK EVEN - MAD Ver.",
    alt: "초록 나무 벽 앞, 남색 가방 옆에 선 원희의 전신 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTRfMTkx/MDAxNzkxOTU1MzIxMzkz.Jm2AgprZ42zEvifvoXOm3Hqe_6fbgC8C2JPQlgh3MIIg.FUg3zsdZUvD-7A2ObXPwMjB8qXSWGDLGzaqgRWIplxQg.JPEG/c35cb3a4-3c11-4372-8307-dee67e95c29c.jpeg",
    series: "BREAK EVEN - MAD Ver.",
    alt: "선인장이 올라간 아이스크림 콘을 들고 있는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTRfMTAg/MDAxNzkxOTU1MzIxNTYx.hdg6K4G5J9n-MvrCLKpGyuBrtcnwI9Otv8XMZhmC_Lsg.EunBbH6FmkVGltrlkpItHquw674N-65u0oX-qWh9HOog.JPEG/197199c3-b59c-43a2-82dd-9b41ad0047bf.jpeg",
    series: "BREAK EVEN - MAD Ver.",
    alt: "꽃무늬 커튼 사이로 레이스 천을 대고 얼굴을 내민 원희를 좌우로 이어 붙인 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTRfMTY5/MDAxNzkxOTU1MzIxNTUw.Rcp1eKIdlIuHj5_a-4J220X4-5yZf37EP_lFAUWwKrkg.u3i7BTa_IFi6tSvo2BacjjMDeH7TJ7lYo5WmjB-q-TYg.JPEG/cc7db397-55b7-4816-9700-08666afbec03.jpeg",
    series: "BREAK EVEN - MAD Ver.",
    alt: "안경을 쓰고 식탁에 케첩으로 그림을 그린 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTJfMjEy/MDAxNzkxNzc3NDkyMDIx.t3tep7FdCf1ZPpqZsocWB1WgupsY5liMr9OW01m6NUwg.VuJfvQU9C84cXXjYLTkuPeLNky5Q1oGkvtuLbBfoWmUg.JPEG/a0f6a94c-8e41-4d67-9328-1ecee6c2797e.jpeg",
    series: "BREAK EVEN - QUIET Ver.",
    alt: "흰 배경 앞에서 긴 머리를 늘어뜨린 원희 사진 두 장을 위아래로 이어 붙인 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTJfMjgy/MDAxNzkxNzc3NDkxNTY5.Y136OwvKPBJkZQSCWGIZ_Ot-MuAcujqnePP73Y9js-4g.5VHEwiD9rDZmDcUhHho3p3WIUaNgamhj8qaViLp3BNIg.JPEG/8fb10315-4a04-4476-bb3c-ce6bc495be99.jpeg",
    series: "BREAK EVEN - QUIET Ver.",
    alt: "흰 커튼이 드리운 방 구석에 쪼그려 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTJfMTQx/MDAxNzkxNzc3NDkyMDQ1.901QXBE8SgkT8JGzidVuaAuXo4IeVJFmERSToX7EmtIg.eBjK46eZLoW6LX_QPf973Qe4r1hNG6SK9fIpIuTWokwg.JPEG/e66d7fe4-c844-455d-89d2-a8779085f405.jpeg",
    series: "BREAK EVEN - QUIET Ver.",
    alt: "카메라를 향해 손바닥을 내민 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTJfMTI5/MDAxNzkxNzc3NDkyMDg2.JibjhQumlXlzSA3ummvYqtJSe6y7eJuLuX4G8-9qc8Ag.cpez9jVnca4gPg1xqONU0qyplyNHjJkZn5i8lEyD_Agg.JPEG/c1d56e32-b656-417f-9434-948cc431d975.jpeg",
    series: "BREAK EVEN - QUIET Ver.",
    alt: "흰 바닥에 엎드려 유리잔과 병 사이로 머리카락을 늘어뜨린 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTJfMTgy/MDAxNzkxNzc3NDkxODQ4.bXKMiZCihHOaptOw0Tu8y8dNBbHUgKqFGzmX61fu1uEg.P-TEnKYrrwppTqgS2er6kyWSRJtz25Nl7lAiVZxo8_kg.JPEG/0b458b60-b372-4a53-b733-a251541044d7.jpeg",
    series: "BREAK EVEN - QUIET Ver.",
    alt: "어두운 빛 속에서 아래를 내려다보는 원희 얼굴 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMTJfOTIg/MDAxNzkxNzc3NDkxNjIy.l23s1SV4FQ20LRbEDZf1MEXhwUn-NizLavBS0XpXQRwg.fg_E3r_otqK0IsTE0nS-iA3an0jAVpLY-DeGu7fV5Sog.JPEG/65237c36-c266-4118-94ea-4a8da37e9e59.jpeg",
    series: "BREAK EVEN - QUIET Ver.",
    alt: "어두운 배경 앞, 흰 단 위에 걸터앉은 원희의 전신 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDNfMjYw/MDAxNzkwOTk0MDY0Mzgx.HTtGibJz-iEYkx-5LBeYmKlBkVU9boN-GI3X6r33n-Qg.3zgK_H8NFIhyPsx-3IJopLX8E0ys3cJqp3H0TtdkzBUg.JPEG/6d77cf36-b0ec-4b39-9970-1aa60cca1955.jpeg",
    series: "BREAK EVEN - BURNING Ver.",
    alt: "분홍색 눈물이 흐르는 얼굴로 정면을 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDNfMTMx/MDAxNzkwOTk0MDU4MjY4.ePCadIZi617Dr1P6dQIuHOfWgFxX9MDXeZOKBsC1yvkg.XVYaNr7qDsAiJS7uuuI7rc969aIyO07AOTP7PO60xvkg.JPEG/5e49f645-3400-4739-a976-4b7c42a785ae.jpeg",
    series: "BREAK EVEN - BURNING Ver.",
    alt: "네온 간판이 켜진 빈 식당에서 혼자 국수를 먹는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDNfMTM5/MDAxNzkwOTk0MTEzMjg0.SHAE4yu4CWewJhmSMCJhng8oL8nNAMj9WW0GnGzmEecg.jir3V6dTBjQ-L3Bu2StuOWkZG7fnnHRAfPIERXnruQEg.JPEG/cbfd32e1-5e49-4dc3-9536-1566aa818550.jpeg",
    series: "BREAK EVEN - BURNING Ver.",
    alt: "푸른 조명의 식당에서 이마에 곰돌이 패치를 붙이고 두 주먹을 들어 보이는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDNfMjkg/MDAxNzkwOTk0MDgxNjE0.iC9VyrLsQwoAjlZrHW-VpYyoONbQJgWnX8ASESKr0Dkg.T8goOQuWM5ykJlq2EO1TUOAOhC2DsIDsWeBsdPQ9w1Qg.JPEG/f0832f21-c65b-4838-be55-686cc4c949a1.jpeg",
    series: "BREAK EVEN - BURNING Ver.",
    alt: "기둥에 묶인 커다란 곰인형 앞에서 두 팔을 치켜든 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDNfMjE1/MDAxNzkwOTk0MDkzMzQ0.O1NyzknO2FFxlHublCuf5RAWs4CKOWDOvEWThGTBLu8g.D2gqRjzoLiPbiYzF_XZzUdmgDVN8n06zVsLZxlLhkyAg.JPEG/641e2c98-92e0-45c9-8269-3b0bae93c76a.jpeg",
    series: "BREAK EVEN - BURNING Ver.",
    alt: "이마에 곰돌이 패치를 붙이고 곁눈질하는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjEwMDNfMTAz/MDAxNzkwOTk0MDk2ODg2.Pox82h6T53_A_7BLYK5hCdV68cV8QCxPADOK3UlZP20g.7MFO4Zcq8R1MweB80B9R_Mk5rQhuyk9vumky22K_E_Ag.JPEG/4007395f-c19d-4be4-93c6-b1fabcb51d1b.jpeg",
    series: "BREAK EVEN - BURNING Ver.",
    alt: "국수 그릇이 놓인 식탁에 기대앉아 옆을 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA3MDZfMzcg/MDAxNzgzMzIwMDY2MDQx.X66u_poPNQexRFjmbkxo7rRLaZWCegp7_jU7t5cuNFcg.W7MWTxbFOdRehmXOSFtpFJxP6YJknwBIYL66WicQmigg.JPEG/9f668c4d-7475-4820-a516-a8390164be47.jpeg",
    series: "I Got Your Back - FRUiTS Ver.",
    alt: "회색 콘크리트 벽에 기대어 데님 가방을 든 원희가 실린 FRUiTS 잡지 표지",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA3MDZfODIg/MDAxNzgzMzIwMDY1OTYz.S8zRdNC0HeiNgGCKmVWKXJcFPILy2kdzEmVFj99YVtkg.-rDC7J-5Q4SFjza7jye1ZfrmmVJQ-MC7CMuduzhd4N4g.JPEG/0c086343-3b60-4057-a034-c99160ae41ad.jpeg",
    series: "I Got Your Back - FRUiTS Ver.",
    alt: "육교 난간에 기대선, 데님 모자와 가죽 재킷에 흰 튤 스커트를 입은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA3MDZfNDIg/MDAxNzgzMzIwMDY2MjU5.g4HHGQUcoP6LRK41QuAItuDVByYAyD_PDRcBDfSwu78g.9TyEh4oqRW8TsQAA20bPfnbYr_PuKuBXAPYi4hUivOsg.JPEG/8f1413ef-e60f-4289-9244-23a78994629f.jpeg",
    series: "I Got Your Back - FRUiTS Ver.",
    alt: "햇살 드는 골목에 쪼그려 앉아 두 손으로 턱을 괸 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA3MDZfMTQy/MDAxNzgzMzIwMDY2MTM2.YxHCmodTfkdmlAcnbzSmSgtfM5lwjfWFeBmd7I1oqNgg.lbYaY373wMwg8AX_0JIhRL0sgouWQKuj_LaSHYXdrhkg.JPEG/95120bea-ddc9-437a-8c45-60f3d19f9672.jpeg",
    series: "I Got Your Back - FRUiTS Ver.",
    alt: "초록 간판이 걸린 상가 앞에서 고개를 살짝 기울이고 카메라를 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA2MjVfNTMg/MDAxNzgyMzYwMTk4MTE0.1liRiSMIBYuMfQ4WthYpOgz3EDHZQFeXUAIDd3Rck60g.sxBokS2t9rzcB03ZQ5FvZ7ZLTk5G7tvkmD2LHDInmicg.JPEG/33e4b28a-9a50-4f2d-9680-004060d45c17.jpeg",
    series: "I Got Your Back - Armor Ver.",
    alt: "흰 배경 앞, 길게 땋은 머리에 줄무늬 재킷을 입고 몸을 숙인 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA2MjVfMjk5/MDAxNzgyMzYwMTk4MTMw.1wOZMByfH-npy0bDHQt8C17Hjys8Vbe_TLm8q1pSB-Qg.7Omf59aEnvgE_EBql2RnGHXoOSuJHiIRtLZaINxYl1Qg.JPEG/f468c524-2c54-4774-91cc-8cf6f7a5ee07.jpeg",
    series: "I Got Your Back - Armor Ver.",
    alt: "프로필 카드처럼 얼굴과 전신 사진을 모아 둔 원희의 I Got Your Back 콘셉트 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA2MjVfMTI5/MDAxNzgyMzYwMTk4MTUy.AUWhfD1UUA9hckTea6Jvg1LmcQe8oyY7ZwAeM-EzUvsg.bbwq8ZMGhsJ5H7L1xMPJd0OYfYhKkTcYG7R-ZNHB0N0g.JPEG/2834af84-405f-45bd-85e3-4a0261f3de88.jpeg",
    series: "I Got Your Back - Armor Ver.",
    alt: "청록색 깃털을 든 손 너머로 카메라를 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA2MjVfODIg/MDAxNzgyMzYwMTk4MDc4.IhXm1kQZD8BaxeU6HLmcNiJbBbRmGZXP5WsYWbuCrn4g.WSRCwnJlCIciN8Gjsdz9CqEIrSIGjCvaBUbNyVb9mmEg.JPEG/e50d4d91-fc63-45db-adbb-80adc7785e01.jpeg",
    series: "I Got Your Back - Armor Ver.",
    alt: "회색 단 위에 서서 청록색 깃털을 든 원희의 전신 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA2MDlfNTUg/MDAxNzgwOTk0NDY1ODcw.A9hMSrQ9utPGy2nocF9hqM4AjXGK6vU0_a0KwfwwioEg.KKWyduIIMVJwz0iOfDZTvYetSSyQxXcjIbwDlgHsHwAg.JPEG/6eefa931-cdf1-408c-82d9-9b05d4621c3c.jpeg",
    series: "ICONIC BY MISTAKE - FACETS",
    alt: "엑스레이 사진이 걸린 치과 진료실에서 분홍 치아 모형을 얼굴 옆에 들어 보이는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA2MDlfNTIg/MDAxNzgwOTk0NDY1OTI5.iy1qHJoj7ngQl_GcyRiJEIC27fkhNlEGaEzoatSmB9gg.HK7sQ5hPt8F8gxX_76bsPbbvPil2dLp5A-oqsCgf_mYg.JPEG/f2fec3e5-c727-4bd5-8bff-5dbd9e13928e.jpeg",
    series: "ICONIC BY MISTAKE - FACETS",
    alt: "분홍 치아 모형으로 한쪽 눈을 가리고 윙크하는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA2MDlfMjI5/MDAxNzgwOTk0NDY1ODky.IWoRDNopQ_8ccSjqERSiWMmke6RDhpaFMomUQQ4U-Ugg.Qu46lc_WPzt2YDv0xG0eJELh7USJ1Tz0KuOlCUUApS0g.JPEG/438354ac-2295-46b1-9fd8-abc15d8d72b3.jpeg",
    series: "ICONIC BY MISTAKE - FACETS",
    alt: "철제 선반에 기대어 반짝이는 분홍 스패너로 치아 모형을 집은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MjNfMjkw/MDAxNzc2OTM0ODEyNTc5._jYW6x6aIq5-UkJbKlS1SvVM8noLvlmjUW2v6KaHy2Ag.hDS1S1Wp3e5VELmc0BoEqTB5rddTV_JFSFjkctoaMGEg.JPEG/f00bcb99-f1c7-4660-9f70-d56e2376b946.jpeg",
    series: "MAMIHLAPINATAPAI - IT'S ME",
    alt: "파리 거리의 카페 앞, 야구 모자 위로 면사포를 쓴 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MjNfMjkw/MDAxNzc2OTM0ODExOTk3.grrDoVQilA1-bZhGmfXdMSeLu-c4rFCojMkAC8uAdBIg.UEzfkhbxhw2qyKIeGNPqWgcWLd-dggXGb_z9MmkWWbIg.JPEG/b3e17372-1186-4c26-b394-67c474edf05b.jpeg",
    series: "MAMIHLAPINATAPAI - IT'S ME",
    alt: "분홍 장미와 흰 장미를 얼굴 앞에 든 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MjNfMTM3/MDAxNzc2OTM0ODEwMTIz._GEdtMfhAEnBvLnu6OAS2_-KHk6E2UTJbvu2qLWkT1wg.c5ak2odWaXLrRM8cQ9jC2soJX_AyblpP35PDtveG5bQg.JPEG/f864bb17-cba7-4399-8391-dd48a79eed93.jpeg",
    series: "MAMIHLAPINATAPAI - IT'S ME",
    alt: "커다란 흰 케이크 옆, 방구석에 운동화 차림으로 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MjNfMTk2/MDAxNzc2OTM0ODA4NTE4.Jnnint6CZErAa_Et3ct_-zU9w9cBd2bOQexUQc3U_jgg.r-3gXqVYyf8kFsQ2lS4tKdvNS0W0qbhpGn96oZkESu0g.JPEG/f30b4a94-8666-4283-9e6f-43a0e090e1f6.jpeg",
    series: "MAMIHLAPINATAPAI - IT'S ME",
    alt: "모자와 면사포를 쓰고 무릎을 끌어안고 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MjNfMjI5/MDAxNzc2OTM0ODExNzgx.t9YH9Vf68LrHvOimsbfQ6vi9wfs6q1pJV1szfjgnRVIg.ZEBvAIitmkBN6sI-bcXRdWk5Zmyi9EvTmstQhL4chdQg.JPEG/069e7e09-8d08-4cf9-a1a2-8cf173d72ea7.jpeg",
    series: "MAMIHLAPINATAPAI - IT'S ME",
    alt: "창가에서 흰 장미 한 송이를 든 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MjNfNCAg/MDAxNzc2OTM0ODEyODE5.ntlzkwr92C-RT9xSLgIWA-JpaJUezUBGDMPJbZZe5gAg.FGwteDjFa3hqWHShaoh66LoOmvYUezI0X4xPBFUC7gEg.JPEG/056e648f-2e0f-4be6-8235-3c82fb07728f.jpeg",
    series: "MAMIHLAPINATAPAI - IT'S ME",
    alt: "흰 방에서 모자를 손에 들고 드레스 자락을 끌며 선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MjNfNTQg/MDAxNzc2OTM0ODEzMjUz.PQbWda-nkZQs3GH6EjAVADiFmJRLPPyg3_Ov9-i3vywg.isN2WyE68jJGWK5bmkydgQba2nNvWkH0Ek8fBuufAy4g.JPEG/bc085d11-c520-4343-b553-964ba9a12b60.jpeg",
    series: "MAMIHLAPINATAPAI - IT'S ME",
    alt: "파란 대문 앞 길가에 면사포와 흰 드레스 차림으로 선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MTRfODgg/MDAxNzc2MTQ0NzA0MzQ2.1CeU3bkDMcNhmSLjegGS-9A4qJ_HLKCqHQrCcm8f73cg.Fhw1Xonf5PvBxpFlVHDOFrUslAyr02M2ntKTyva4W8og.JPEG/321d33dd-2c53-4b3b-a972-d5264c329ce4.jpeg",
    series: "MAMIHLAPINATAPAI - FREE RIDER",
    alt: "금발 머리에 카키색 항공 점퍼를 걸치고 낡은 나무 의자에 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MTRfMTIz/MDAxNzc2MTQ0NzA0MTAz.4df8416LIP_8U_smdNy9-R-32TsXmrm3szP_LDN7caQg.Y1H8L3ceccYjFHFPISiQdSj9dPGNUkRw-KZw49X8micg.JPEG/cd85e89c-3911-4cd5-9bed-bf97c52e7d34.jpeg",
    series: "MAMIHLAPINATAPAI - FREE RIDER",
    alt: "흰 벽 앞에서 몸을 숙이고 카메라를 바라보는 금발의 원희 흑백 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MTRfMTc1/MDAxNzc2MTQ0NzA0Mzc3.zZEW_0_yAIm1-dOYJpKG1gUmxubkcvdibMXxkSMiH14g.VLym05V_NomC2CSeP4hCKWXe4PITblpLkWJoI55daXEg.JPEG/7c8f1908-c36d-4c74-8a31-14650f86963c.jpeg",
    series: "MAMIHLAPINATAPAI - FREE RIDER",
    alt: "위에서 내려다본 구도로, 금이 간 시멘트 마당에 선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MTRfMjU0/MDAxNzc2MTQ0NzA0MzU4.f_9IWawB8IetcLRj52Qf6EAY4wm-YHoFFaIK2RD6h64g.-9GO6zOad6pwB0upYzdYE7o5s27CPNKzla0LkEkGvwsg.JPEG/42a2741c-0327-4fab-853b-1007f04ebfb4.jpeg",
    series: "MAMIHLAPINATAPAI - FREE RIDER",
    alt: "흰 벽 앞에서 카메라를 바라보는 금발의 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MTRfMzkg/MDAxNzc2MTQ0NzA0MzQ1.J_AJPqqWG0Z2JcuI-PVQGDkx5vpiPQF8PLVV1TH1xdsg.Nl92JtOXFR2KHG9xcNrOBEqn6jLzH7Vb-cGRoV4olc0g.JPEG/3049e0ab-507f-42a5-9ba0-98892b718133.jpeg",
    series: "MAMIHLAPINATAPAI - FREE RIDER",
    alt: "흰 벽에 기대어 다리를 벌리고 선 원희의 전신 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MTRfMTc1/MDAxNzc2MTQ0NzA0Mjg5.x_QVRhP_aRk2XpbCpF0xpEuO5cvxalc7bv6mxU2v-ecg.D5A5k-NrkKwAPAWtGuw8JLx_c2hgMyDdS6gmcjqhPOQg.JPEG/7ea1e24a-b44d-4d0f-bde4-1e5040c14fc4.jpeg",
    series: "MAMIHLAPINATAPAI - FREE RIDER",
    alt: "흰 벽 앞에서 커다란 점퍼를 끌어안고 옆을 보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MTRfNzQg/MDAxNzc2MTQ0NzA1MjM3.K0TH9frEgcrQiwMjhltXoraLjwJM2TRIpKMLFsQlFMgg.GH9jR-lwyluBk0PTlq2nxmVMBDJeQgTqylRv1Xm-gn4g.JPEG/b42b37b2-9a0a-48a6-86c1-dec33ee19589.jpeg",
    series: "MAMIHLAPINATAPAI - FREE RIDER",
    alt: "철봉에 두 손으로 매달려 옆을 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDdfMjQ3/MDAxNzc1NTMyMjA5OTM5.gLznCdk6OukFMszXeNpyNhWJIowJEDUYvLwd8MO_icEg.J_6nRp8TM38j4cvPz9BxfiSD-TaXbkrkKm28pwuWH-8g.JPEG/ba0210da-f490-4679-9c0b-cd946507fc4a.jpeg",
    series: "MAMIHLAPINATAPAI - GRWM",
    alt: "화장대에 팔을 괴고 기대어 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDdfMjM3/MDAxNzc1NTMyMjA3ODkw._v3ZOAsj82CqDKeyjTTKrnY5PR6xA_dnHZUXGBqPKGQg.o6vGsNGatBgz4CxaKEOlZayCVuN6SUrNbsmhf3zLtRIg.JPEG/da125869-a604-4b8a-8190-74b00eff5585.jpeg",
    series: "MAMIHLAPINATAPAI - GRWM",
    alt: "레이스 가방 너머 거울 속에서 브이를 그리는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDdfMTI3/MDAxNzc1NTMyMjA3ODk1.mhuJDj5yNm5dAYzEdEuvbVurDsdUBPmiHmo0OXcoK00g.rdDVeagExCFyDU0OjEURhM1PiTpu9tFuuEVP0jyaHcQg.JPEG/9539990a-0303-415f-9249-12f4155179ee.jpeg",
    series: "MAMIHLAPINATAPAI - GRWM",
    alt: "욕실 세면대 거울 앞에서 몸을 기울인 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDdfMTI4/MDAxNzc1NTMyMjA5OTQ2.I2PEdnGH9rwGb2aN1Ln3-op4vdzw5awX1wEGyx4MWCgg.SPCdEHXL1PJYA815-zvPUKqbErAhzps8zG5OAPFrkxwg.JPEG/5598940d-6790-4819-8314-98a170f9be01.jpeg",
    series: "MAMIHLAPINATAPAI - GRWM",
    alt: "손가락을 입술에 대고 옆을 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDdfMTk2/MDAxNzc1NTMyMjA4MDUx.FakTlikR-dCERGJ_ZQfyvC6g3lsUF-rUFSUbHSQKwQgg.eopsGIbWOBFHK_9h66As737WHh8nDjBvaBcfUHJxWOkg.JPEG/d6666411-1f6a-4301-9464-71472a6b1be8.jpeg",
    series: "MAMIHLAPINATAPAI - GRWM",
    alt: "빨간 매니큐어를 바른 손을 턱 아래에 모은 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDdfMjI5/MDAxNzc1NTMyMjA5ODkz.T8vUFq7SAJd-E843QVj66611LtGLZaN7a_pnEkOBFfUg.MfH96bU1LC3wTEeIiPjMgSJi2yOnlIha4YhGH7p7Y4Ig.JPEG/c202a33a-437b-4676-8064-44d4d4ff9956.jpeg",
    series: "MAMIHLAPINATAPAI - GRWM",
    alt: "따뜻한 조명의 욕실에서 립글로스를 바르며 카메라를 보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDJfMjY4/MDAxNzc1MTE4Mzg0OTcx.f6ovfz3UE33zNF8Tlgmya05BPijs6dZYCFaVfUykHnMg.9Gf_v9b3Wz6WZN3A-JF6OYyOMEbhby72bqbsIK2lJp0g.JPEG/e6ec733e-b69b-42b9-bae5-658757440590.jpeg",
    series: "MAMIHLAPINATAPAI - PAW PAW",
    alt: "흰 털 러그에 엎드려 기니피그 옆에 얼굴을 기댄 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDJfMjUz/MDAxNzc1MTE4NDAzMjc5.Ir4651A89TOGtYy0oqTV1cXUB5WoaD76f0-ngbsH7pcg.6zhSrqwLp9x7p6AmYc_PajbXzqGWo0DkMqrzJvppqT8g.JPEG/0bc5ece6-86b6-467a-af88-3da4d1ebfe6a.jpeg",
    series: "MAMIHLAPINATAPAI - PAW PAW",
    alt: "흰 벽에 기대앉아 안경을 매만지는 원희, 무릎 위에는 기니피그",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDJfODgg/MDAxNzc1MTE4NDA3ODc4.sYH7GKDwhxR5v07NVn7k2mSDbJBKv2y-dUblulFzjT4g.YBAm0BeGXc5HPyt4e8PR273UP27_3pQWY2mvEQH_sL0g.JPEG/3c3cc789-fde2-4aba-81bf-ec7ce8a893c5.jpeg",
    series: "MAMIHLAPINATAPAI - PAW PAW",
    alt: "미니어처 방 속 기니피그를 손가락으로 가리키며 웃는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDJfMTg2/MDAxNzc1MTE4NDEwMjc4.PHm_64Wi-ROFuHCVs5ZqD1cawv459SMImHbqpaJJukog.1x3JeSI_Jzp4wMbjAdGdW_xdH92oEMxjUAtDFuYSxSQg.JPEG/76273881-9c05-4b02-82d0-7c446392f1cd.jpeg",
    series: "MAMIHLAPINATAPAI - PAW PAW",
    alt: "꽃무늬 소파에 앉아 기니피그를 안고 눈을 감은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDJfMTk3/MDAxNzc1MTE4NDExNzMz._jql5d8_LB-z9aTDv1m4N-rDrU6wlMSkwNmUxnSGQHog.gJuAhY2sD8KDL-UvsKDnk6qyDe__e2q1sJuxnv0PYzUg.JPEG/76212fa9-17c2-4cfd-af24-ce7feebe08be.jpeg",
    series: "MAMIHLAPINATAPAI - PAW PAW",
    alt: "기니피그가 있는 미니어처 방 옆에 앉아 돌아보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDJfMjk5/MDAxNzc1MTE4NDIyNjM1.Wvj0y_xnR8kZfozg5ZPyK6bNz0rd1p-vJGzsAkZ7jtIg.OFp7bmFpOqxAxo3z9MOgSwoi_zC6LIjetKrAyYWx6SIg.JPEG/87d27803-c94b-41dd-8659-11716e48105d.jpeg",
    series: "MAMIHLAPINATAPAI - PAW PAW",
    alt: "안경을 쓰고 기니피그를 뺨에 댄 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNjA0MDJfMjAg/MDAxNzc1MTE4NDI0NzA5._UtM-QstvkueH5mtk1rPeC67Skae0HYfa9nlab_K1X0g.v1uJPOdA-lL4SPHJ84lo7BK3vJXI06Akpdk1DLHn6CIg.JPEG/7bcdaea3-13e3-4591-97c1-c277ebff71f3.jpeg",
    series: "MAMIHLAPINATAPAI - PAW PAW",
    alt: "꽃무늬 소파에 기대 기니피그를 안고 카메라를 보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTEyMzFfMTAz/MDAxNzY3MTUzNDY2MzA5.tnobIfgXTDw4QO3Fvc8bj03ySyPEg9r3mElL9W7eaAog.dH13thWxVR0IPFhPlZCzoL5ezAHgqT2yOR3RQ7KOa34g.JPEG/ca73d7da-2a58-4af6-84dd-e9f7659cb6bc.jpeg",
    series: "Sunday Morning",
    alt: "주방 식탁에 두 손으로 턱을 괴고 카메라를 바라보는 교복 차림의 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTJfOTgg/MDAxNzYyOTUwMTgwMDEx.txWB1IPbSrVI0mULrZeVDt9Ur0UvTd8SJ1LJdG_Tvtsg.AVGN-kgI0R1NhTPZoE-bgCcccuzZuW49cqPIVLMDSJ0g.JPEG/74611adb-b4d8-4a2c-b457-61c9ab07cc13.jpeg",
    series: "NOT MY NAME",
    alt: "오토바이가 세워진 철제 방에서 커다란 소품 총을 겨누는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTJfNzUg/MDAxNzYyOTUwMzAwMjgz.tN5_qHV6ZUaHyUIt-V7n2mpkLv6KttOwUMchFLBkEnUg.2YrTYQ4upfYK11MW23Jr3PmYuyygiL-dAxPAHM8szO8g.JPEG/74647d84-2596-4f14-81ac-2071decb4f0a.jpeg",
    series: "NOT MY NAME",
    alt: "분홍 레이싱 재킷을 입고 흰 오토바이에 올라앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTJfMTgg/MDAxNzYyOTUwMzA2MDU3.Ts3NgH67QTF0t-xry_n3WrE1WCjROMNmo0WExi_UY_Qg.R1z8VzlRPyWb_W6CRU2lHI0J65vU_HtyK6NIS2YizIAg.JPEG/c6e6b1be-188f-48e2-b464-3fc0583079c8.jpeg",
    series: "NOT MY NAME",
    alt: "흰 타일 벽 앞에서 분홍 재킷을 걸치고 뒤돌아보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTJfMjgz/MDAxNzYyOTUwMzA0NjU0.CYlnztqQX-eqzR3IQsgrVR-9syF1g7KkLXnppZTC-s8g.KI8pUPqUg9vw9fsG3BcCV74i8N1aJeqc2vgH_iRFIVQg.JPEG/94aef762-b016-4f03-b918-2c483cc2cfdc.jpeg",
    series: "NOT MY NAME",
    alt: "타일이 떨어져 나간 벽 앞에서 분홍 소품을 어깨에 메고 선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTBfMjM3/MDAxNzYyNzc4MTY4ODI4.DJA8aXjBU_sIvOZAmjITZ1ssxgKzDFbDyPIdMgH06Jwg.J8g9owlZpNLeVk_RZwhCu7Mol2e7r_LoiNCRqLpYsPIg.JPEG/c8c282ce-e5ad-4a6c-b052-0d81eb63e4d4.jpeg",
    series: "NOT CUTE",
    alt: "긴 머리에 폴더폰 두 개를 꽂고 뒤돌아선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTBfMjIy/MDAxNzYyNzc4MTY1MjQ3.6TecmJo2wUF0a2i4CLTvLTUJoDZRKMP5qH_puUp6la8g.ZPW9CBEMNICSpZGWxcywFskMZJTObIAkbgRmR0uCbrwg.JPEG/5d567bb6-18b0-4ec9-8d13-2054d4455c93.jpeg",
    series: "NOT CUTE",
    alt: "흰 리본 머리띠와 하트 목걸이를 하고 정면을 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTBfMzcg/MDAxNzYyNzc4MTUzNTk4.NhlD8XOXa42yIE3ksb36MAle0R6PyhSTGsb82AwlEgog.lQAiKVFWcSc3vdP8I5Qv3LHbK31lvMmTuekBoHTXLWwg.JPEG/356dd134-ea6f-4f42-95c0-9beda6747742.jpeg",
    series: "NOT CUTE",
    alt: "두 팔로 무릎을 감싸 안고 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTBfNDcg/MDAxNzYyNzc4MTY5MjU3.QLl2pWAgCgM0m4bw7oYk-9QLwOGgrly7b6MVBWxtClsg.y36hT1nwEkw8UAovo76I-_3zfRCOWYoS4Sxa39nodNUg.JPEG/e02e68ca-0ca8-423c-85d6-385aa47cff5c.jpeg",
    series: "NOT CUTE",
    alt: "타공판 벽으로 된 작은 방 위아래에 앉아 있는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTBfMjk4/MDAxNzYyNzc4MTYxNDkw.Tq-ByFclsRvjr6q_sk9dkeTavXWxVNWQ4yKVgVjdztIg.PL69qFbvy4iLRHTFI5Er-lUW0_95ehkrRi-gGMKibYMg.JPEG/c8d35737-95e1-4f99-8804-6a9858cb76bd.jpeg",
    series: "NOT CUTE",
    alt: "흰 방에서 리본 머리띠를 하고 정면을 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTExMTBfMTU4/MDAxNzYyNzc4MTY2Mjc5.b1daTFfIu-EGF9Rq4bczjRWWa2dlNR_mKkdwgseoyZYg.fX-THRW5lJBfHXqfQcMUOKqcEJbzkBqUISGmRVdbbqAg.JPEG/cebdd612-8054-40d2-b99b-161575e5dd0f.jpeg",
    series: "NOT CUTE",
    alt: "흰 바닥에 엎드려 브라운관 텔레비전 옆에서 카메라를 보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA3MjhfMTU3/MDAxNzUzNjYzODAyNjQy.Lj0tF4la_uPNW4DQqHOu8b_Knzsb25hRV71iKwBLLqcg.WNAx4OUiTRRm-9CjD5s0SZg_3F05dmwie0ILcR-FthYg.JPEG/a8fe79a6-9543-4b5c-b7ba-b6191193fb8c.jpeg",
    series: "Toki Yo Tomare - Night Out Ver.",
    alt: "음료 냉장고가 늘어선 편의점에 앉아 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA3MjhfMTc4/MDAxNzUzNjYzODAzOTky.EDy4hY3rrABhBRy-Dk1xicgOobIn-1BZZW3ag7fN7a0g.4aCoQLo7J9ejgM_2ySCgDxKkn6FEZCxUv4UDpnXrpdEg.JPEG/83b2feb5-6e40-4898-822d-a4e21fbbd1a3.jpeg",
    series: "Toki Yo Tomare - Night Out Ver.",
    alt: "분홍 토끼 인형 옆에서 손가락을 입술에 대고 윙크하는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA3MjJfMjI0/MDAxNzUzMTY0MTk4NjIx.fKVbqvwlsxEcja_4EMCyOfofO6i4mHxoPOEpqZP5-Xog.v6lOXLXdZi8-e5szGfw2yws_ZI3vw0VWCbkYTEG8xPcg.JPEG/a6dd91df-ebfd-4be6-a5f6-d03a44b3db40.jpeg",
    series: "Toki Yo Tomare - Home Playing Ver.",
    alt: "두 손을 턱 아래에 모으고 카메라를 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA3MjJfMTUy/MDAxNzUzMTY0MTk4OTU5.JfN24e16h87Oh4uA9w5LdVTpy30MtrRi4ZH65kOL8GIg.FlcUtYNdMQb_HSdrEJnQg1n3bLvGamSnEFoRaM71IBIg.JPEG/5b0047db-ef4b-49c9-9077-c4e70ba8bd6d.jpeg",
    series: "Toki Yo Tomare - Home Playing Ver.",
    alt: "흰 리본으로 머리를 묶고 커튼 사이로 얼굴을 내민 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTJfMjk1/MDAxNzQ5NzI1NjU0NDk1.qfVlAxWqKQ1grXpkJDpOSe_FaTd8LvoRw4Z-tipWPzog.mN4fMmXPmhUVzWUpfCv4YRLkmXXMK_fCcaYGv8UMML4g.JPEG/19aa4dc6-e36b-49d9-a783-7fbd9b970f72.jpeg",
    series: "bomb - MAGIC BOMB Ver.",
    alt: "햇빛 드는 방, 줄무늬 의자에 앉아 머리카락을 흩날리는 세일러복 차림의 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTJfOTQg/MDAxNzQ5NzI1NjU0Nzg3.1JtVI2hBtN00-8NHBk0HMHDdvMqZR1xS2VJ4bQ7Hisgg.7R5ogJ9PfPS5fE9POOxKaZcY4tUqAd5OPCvS3kZOGBEg.JPEG/62088c92-5437-4af7-8b64-b16bd295e042.jpeg",
    series: "bomb - MAGIC BOMB Ver.",
    alt: "날개 달린 빛나는 고양이를 마주하고 의자에 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTJfMTAz/MDAxNzQ5NzI1NjU0NTMx.9ukstRbJYtW7QWPe9Sg7NhPA9XXCR3zkAdXhCP7_NiYg.47BPHUD-bBrxs2DFBlHVRztfbBRaityZ1q36S8jlBq8g.JPEG/1c51326f-cbb0-42f8-8898-526fa83576d2.jpeg",
    series: "bomb - MAGIC BOMB Ver.",
    alt: "줄무늬 의자 팔걸이에 기대어 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTJfNjUg/MDAxNzQ5NzI1NjU0NTEx.tNr_iTp3uCuCeH8auTz74fSgoV_y_LhUgVdwt9XcAbUg.TusC7WH0DJ5aUu9s7r6EobSDaiouw0dbzwYMFCtxtAYg.JPEG/85bad992-8f5c-4846-a4f3-5e6111443bd5.jpeg",
    series: "bomb - MAGIC BOMB Ver.",
    alt: "어두운 배경에서 두 손에 빛나는 구슬을 감싸 쥔 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTJfMTE1/MDAxNzQ5NzI1NjU1MzQz.4a7LNQGDaO0VFtz-s5xE5w3LqVsXSxtpCXsgSKHw1WAg.YYrGptxz1VhaOVq5OM-IS_XTh4EYl3csobFtmlz0HFEg.JPEG/b985295d-484c-427a-8942-e708309cb7fd.jpeg",
    series: "bomb - MAGIC BOMB Ver.",
    alt: "푸른 하늘빛 배경에서 손끝으로 빛을 터뜨리는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTJfMjU0/MDAxNzQ5NzI1NjU0ODA0.yq36NhSpwYfZVw2MivvFfA9DduKhfdeuo1dqmSRw1DAg.BDwhSDtKfH03w_lYdTs1PywI8QVs93kYRu5gHWmVflsg.JPEG/7252e5b9-6363-4c05-9920-40e4727be3bd.jpeg",
    series: "bomb - MAGIC BOMB Ver.",
    alt: "이마에 은빛 장식을 두르고 정면을 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTBfMTgz/MDAxNzQ5NTQ5NzU0MTM5.7ObUd7rJt9_AGxApXvAnB8G85epfpGtYsLDvvtyZE-Qg.EGmkKoaPYmTX9a2Cxt1W2xpY5w0ByQ9rD1zZfCUA-U0g.JPEG/bc695dd2-3de2-4474-b9d3-cd8128d08813.jpeg",
    series: "bomb - STAR BOMB Ver.",
    alt: "차 안에서 털모자를 쓴 인형 옆에 턱을 괴고 엎드린 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTBfOSAg/MDAxNzQ5NTQ5NzU0NTcz.3yKNd2iprP5ffSpamakKFlsaWOwUqgOT9d7OWfjlZbgg.2QhkMQOJw8jZj_W-sWuUFL8UK5_NI1bKPIQiYcm6X8Qg.JPEG/a40f7817-2474-43d9-a926-c5c595e43406.jpeg",
    series: "bomb - STAR BOMB Ver.",
    alt: "검은 재킷 차림으로 카메라를 바라보는 원희 흑백 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTBfOTkg/MDAxNzQ5NTQ5NzU0ODYz.KqgF1dT2i3Pi3KxprjDBg2Wm09gPRTAs9NJovYfAtgwg.mTJBSrw1e5r2b4R6Vmpsvrr0JV4uivhZfHWFEgfVC7wg.JPEG/7c6a92d8-a5d9-4900-9329-496543834fb8.jpeg",
    series: "bomb - STAR BOMB Ver.",
    alt: "흰 배경 한가운데 작게 서 있는 원희의 흑백 전신 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTBfMjY3/MDAxNzQ5NTQ5NzU1MzY4.wNVTBHL8T7ifeosKHBEb7fKkkL5F4CXl95HWzoSR_Q4g.FChgptfIBr6XxKjdn7kxpX9zwtmUGV4DYhNPaeO4dNIg.JPEG/fbd406e1-4105-40cb-aaf0-c623624e5a9e.jpeg",
    series: "bomb - STAR BOMB Ver.",
    alt: "앙상한 나무 아래 흰 철제 의자에 앉은 원희 흑백 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MTBfMjUx/MDAxNzQ5NTQ5NzU1NTg0.iXuUpRdCmRgwVKWKah21_aeDouNTE_Z3gjYmFNvyqHUg.a57sp_aAp1xS44_DyTtZAufWzzD_-Ev5DXctRMdME5Ag.JPEG/77d3f499-80a5-46ab-82d5-e0d09a1584f4.jpeg",
    series: "bomb - STAR BOMB Ver.",
    alt: "그림자가 얼굴에 드리운 원희 흑백 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDlfMTk0/MDAxNzQ5NDY1ODQ5NDQy.ilV98sinPWqtLGD2D-0Q9_UW1ybWi0Fpgtc37qRxeg0g.9rMGANCEMzzECJWyhgMmo34kGIIfWV80u5l9dYcz-P0g.JPEG/5c3b6ca0-bd46-4a4d-a5ff-96ab1ae378ec.jpeg",
    series: "bomb - PINK BOMB Ver.",
    alt: "분홍 벽 앞에 베레모를 쓰고 쪼그려 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDlfMTcz/MDAxNzQ5NDY1ODQ5MTUz.EFlRSoQonU6bEvhEbYk4svP4ivUMlHEdbA4suT9AjJkg.qGF_9XkrpIdL3zwGffusV9DnwH05s7wWzNDWzHDHTOUg.JPEG/18216c32-0689-4e28-985e-2b53efd255ca.jpeg",
    series: "bomb - PINK BOMB Ver.",
    alt: "줄무늬 원피스에 보라 장갑을 끼고 바닥에 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDlfMjU0/MDAxNzQ5NDY1ODQ3Njcx.FxSs2WQqk7VOdiHQV4T52Lo4qbtcYfveFk7E5mkbyMAg.cgOw2ZT8OIeqN58_tgMydAssOBTHfl1ChWpKZ3nE5rQg.JPEG/cb8c7b7b-efe2-47ee-b4aa-0d6b7ef24d65.jpeg",
    series: "bomb - PINK BOMB Ver.",
    alt: "긴 머리를 바닥에 늘어뜨리고 앉은 원희를 위아래로 담은 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDlfMTU4/MDAxNzQ5NDY1ODQ4NzE2.lESIqPUyDVIEbvSAJl7gm0VYc6GrKvNloPwfGl0JtwQg.tRzYg4J9K5feBZ8as5bDCUI1pRlG8bDk_dlzmmmbStQg.JPEG/e2a0c2d4-57b3-479c-98ad-2fa24437fc54.jpeg",
    series: "bomb - PINK BOMB Ver.",
    alt: "흰 커튼이 드리운 방에 베레모를 쓰고 선 원희의 전신 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfMTYy/MDAxNzQ5MzYxMDUyNjUz.GPBZfKqxfjyAVCTUA74u6jETC31IvEO8Qohi-7PCU9Ig.swXT11kSCbSpnrqBK_QfRKoORIcbYAdIQ5T9zpVjTT0g.JPEG/a737c5a3-6e28-48a3-9510-a91fc4426e17.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "하얀 양 인형 옆에서 두 손으로 턱을 괴고 엎드린 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfNDkg/MDAxNzQ5MzYxMDg1MDkx._fsfcoB656063871xnkSAxKt64KmtCA7tYEdx88MgQog.yaPANqXUUJCHKCzpqEIFy3Y4JjdiF3nvKg9AFN8tMCog.JPEG/ddfb7a45-8ae6-4da3-a151-2612c919b0b0.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "안락의자에 다리를 올리고 비스듬히 누운 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfOTcg/MDAxNzQ5MzYxMDkxODYw.8f4ccF8qN_RNVshvMPnLGPxctTZjOAfCRL8cPwE3Qcgg.zIVM3Zy8HCEnvnIjUCLFrjb13ApPi88If_AB26yusrcg.JPEG/5854c90e-fe6b-49e9-b705-0c16b8303dae.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "파란 배경 위에 빨간 티셔츠와 청바지 차림으로 기대 누운 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfMjkg/MDAxNzQ5MzYxMDk3Mzc2.GuIDIuGTccUzmHlLHC0tJHjefqlgUJvezY2uiX3SLYkg.IlHW9npaxT_Jtqv4AHjrVQP1nbV1ktk4E_p4RYFMHD4g.JPEG/4b746d0e-b868-4dd9-aae9-de76d183e387.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "빨간 안경을 쓰고 고개를 기울여 카메라를 보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfMjk5/MDAxNzQ5MzYxMTAzODI4.NTToInM1DcuI_1nn4xa-muVTKp_jiv3E1VBsaE6WOo8g.RLzHZ45JevpPUrfTJ9MpHq1rHkEGqqyFTBh4iIn53p8g.JPEG/86a9fcd1-7100-496a-b029-a3db1ec730a8.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "빨간 안경을 쓰고 몸을 앞으로 숙인 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfMTYg/MDAxNzQ5MzYxMTExODY1.HTLUvn2J0kMeDC_MSs2x5N8mA-PY91PuUKN-psmW6-Ag.LqAAlbcDC7PZWW7pSrtlGIvw8a0b0HIB2eqVUiUH-O8g.JPEG/c3ed1de3-8ab4-4e4c-a0d8-0387c91afa0e.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "머리카락을 쓸어 올리며 카메라를 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfMzMg/MDAxNzQ5MzYxMTIwMDgz.ROiY_v_EzuRvB1TU4eKxvLPT3c1VghN1OPcY6-Kc1tcg.2IesMc-F_oiu9fDUKQCDDNVs4n_oxKT2NVMJ_0rF1kcg.JPEG/a1581515-01b4-4722-99c2-c2c89bfed10a.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "흰 배경 앞에서 빨간 티셔츠를 입고 정면을 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTA2MDhfMjkg/MDAxNzQ5MzYxMTI4NTQ3.FkSRZgHLaUloSMqkHAIah_xl3Z5iM0kEFlbEzVn3Sjwg.Kk8Giax5G9zcxmWzulPYlEHqZ4S9yuZCRNZ4Bk-tmXUg.JPEG/c9b16d7b-709b-42a1-805f-92ee325d2b29.jpeg",
    series: "bomb - GLLIT Ver.",
    alt: "파란 배경 앞에서 주머니에 손을 넣고 몸을 숙인 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTAyMTFfMjg5/MDAxNzM5MjUyNzExMjM2.8jK2eM6cWLGvfv5-Le_lz0mms8v4uHgbN90Lv6XhPrQg.PB74Ax9srb2UJMPDM-ZZLiU8Kgf7kvlHWN3P6ic29xAg.JPEG/204eb2c2-652f-4746-946e-3a76e50de583.jpeg",
    series: "Almond Chocolate",
    alt: "흰 배경 앞, 남색 소매 티셔츠를 입고 정면을 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNTAyMTFfMjM2/MDAxNzM5MjUyNzEzNTgz.vYer2gRN1LuSmw9q50UXkELx6lDh1FtB9AFZ1ajFDgwg.1dmXOfKBtsepAotj1aIydyGzYAOS4v7R5KU_hBY99p4g.JPEG/3106ae28-37e5-4ad7-a5b9-65a0b10084b6.jpeg",
    series: "Almond Chocolate",
    alt: "하얀 침대 위에 무릎을 꿇고 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDJfNyAg/MDAxNzI3ODU3MTE5MzI5.Bwf9TQ-A_YqisNw9N9kPscPiuJCAh17yBNv4s7Vrkmcg.w7LVaxefUGyIBjVgjYBAn0Myz8uZbq9bdhO7vEDxAiMg.JPEG/88cddaba-d374-40e4-ae13-857732ee357b.jpeg",
    series: "I'LL LIKE YOU - BETWEEN Ver.",
    alt: "검은 매니큐어를 바른 손가락 사이로 카메라를 바라보는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDJfMjUw/MDAxNzI3ODU3MTIxNzI5.0F_xEMEnIGoIevJmUG5JnlK5NQTWZTQwjFFqEA6FwF4g.75KK1h57kpZC_zW3D7InBK9IZ0gMRD995LKPDhPHA7wg.JPEG/ba54a2d1-ecc3-465b-9c72-b8cb41d65122.jpeg",
    series: "I'LL LIKE YOU - BETWEEN Ver.",
    alt: "빨간 배경 앞에서 검은 옷을 입고 반지를 매만지는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDJfMjkg/MDAxNzI3ODU3MTI0NDk5.830QsAZ14XV3ENGF9DdiIFfG_qxNB4uA81usd9nIO9og.Y-ZcbWONrJrTiC4q9JJJsa4w1-IJPY4gE5xXEHtNEdkg.JPEG/8c6b0e28-43f1-4a38-bcb4-968760c4b2ad.jpeg",
    series: "I'LL LIKE YOU - BETWEEN Ver.",
    alt: "흰 배경 앞에 검은 옷차림으로 턱을 괴고 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDJfNDEg/MDAxNzI3ODU3MTI2NTI5.eYWUSQke4WPzk9kZoqlzYRV8PBFSBQ3CcnpE8RpUHdUg.HOe-73ro0RyYSKfbA76r6L6hGK1MQ4L9NbHxunmmzOwg.JPEG/159ceb09-3301-4524-93d8-80f54b7d0fb3.jpeg",
    series: "I'LL LIKE YOU - BETWEEN Ver.",
    alt: "검게 빛나는 의자에 기대앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDFfNDkg/MDAxNzI3NzYxNDA2MTky.TP0YsqdV7RCLDiGfkriuaQZD0sZoChPYX87qpRWoM1Eg.nSLVgV1hoU-KynkDovky2_JXicKdBWlWYKL_Z9P-cPQg.JPEG/2f60e1d5-e76e-4a43-b6c1-0c32884add82.jpeg",
    series: "I'LL LIKE YOU - TO Ver.",
    alt: "분홍 후드 집업을 입고 분홍 타일 벽에 기댄 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDFfMTY1/MDAxNzI3NzYxNDA5OTI0.hveKQsY5vUBxURJw2SGbUlphKo3PR6j-alqqLbqdUX8g.Gf-kjcyi3McNYH8XZXL_ZvmgGflscwxwbddHSbPL8D4g.JPEG/b319ab10-af94-4d97-8acb-b9af0b178ecd.jpeg",
    series: "I'LL LIKE YOU - TO Ver.",
    alt: "분홍 하트가 떠다니는 창밖을 등지고 열차 의자에 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDFfMjIz/MDAxNzI3NzYxNDEyOTg5.-_kjJToBcDiAWGJnnKVSHVmVOZa9ktuj1dR4uAwP9Q8g.EdBg8iJcQewZkUNFO8vn4rqQAgTWhfmV4MzqaVTkDE0g.JPEG/0ed87966-1707-4892-b766-150027e64e7f.jpeg",
    series: "I'LL LIKE YOU - TO Ver.",
    alt: "숫자가 적힌 분홍 벽 앞에서 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDFfNjgg/MDAxNzI3NzYxNDE2MTMx.pSoYSgsdFC4iMpCS4KbcAPSnAYzFVGZyw6psMHkaJysg.fBwlAaLWgGPvj8Q2c3a4eaKPqVvbZz3VMfJCvQFGAT0g.JPEG/7de37248-3fc6-47d0-9164-7fac6f9081d3.jpeg",
    series: "I'LL LIKE YOU - TO Ver.",
    alt: "분홍빛 열차 안에서 가방을 옆에 두고 선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDFfMjIz/MDAxNzI3NzYxNDE4OTI3.nJdGde8eesEq85y8MibRNVXTbJ6HMylgO7HRxO8eBGgg.i5EppCCTyrse5sY0e-02j9vwaMXGjW26IPd1eTz6k6Ag.JPEG/56cf5643-7af4-4c33-928a-1abed042e1c1.jpeg",
    series: "I'LL LIKE YOU - TO Ver.",
    alt: "분홍 후드를 입고 비스듬히 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDEwMDFfMTM5/MDAxNzI3NzYxNDIxMzAx.yf3mC6H0SfFhlkLFMEkRJVrvlDcojm4Ds7ggeE96e6og.MCgRpsaBPWIYp9y4cMQrDQzi8fMCd8jfjCK5ei9Ct08g.JPEG/1cb8e1ff-285a-40f9-8c09-d230ba6ef29b.jpeg",
    series: "I'LL LIKE YOU - TO Ver.",
    alt: "분홍 후드 집업 차림으로 흰 벽에 기대선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDA5MzBfMjcg/MDAxNzI3Njg0Njk1NTg5.cw-6STlLUW25chttyFMkseyvSMiYA9yi1jQk2e6qtEkg.stdMuJ2Ionzh3ODnu9lyT52QBame3xDXuYYlGozLsQUg.JPEG/8812c4cc-fab4-44fc-8e29-cc79fab82b9f.jpeg",
    series: "I'LL LIKE YOU - WITH Ver.",
    alt: "따뜻한 빛 속에서 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDA5MzBfNyAg/MDAxNzI3Njg0NzAwMDAx.iX15NNof1n4RbyCYq4h-IuhsS3KDLBhVttzjlLZRqDEg.DYXDScK6ACVsAdOwst-pWz-vJE1hPAGYF2eoTjqUjuog.JPEG/5519c3d5-5ae8-4cc3-aecc-808200339258.jpeg",
    series: "I'LL LIKE YOU - WITH Ver.",
    alt: "책장 사이로 얼굴을 내민 원희를 위아래로 담은 사진",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDA5MzBfMTUw/MDAxNzI3Njg0NzAzNTM5.d5fxvOdraz3S9rgtF2tbXgcDK6YjUYYG5OU1QTl_xNYg.wVRuzkx6fbtzutKSQlvMDQyeHOhFOJPsrXRn6MSnWkMg.JPEG/0b5ffe7d-214d-490b-a589-c1b2fd4357dd.jpeg",
    series: "I'LL LIKE YOU - WITH Ver.",
    alt: "반짝이는 장식 옆 책상에 기대어 카메라를 보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDA5MzBfMTQx/MDAxNzI3Njg0NzA2NzQ5.TtY03IFr76VHNaLzSvTPnZmYWEShnM0UCd-SUDi0JW4g.zzyu4Y35ZXJrWjKaMctQ213Jl0pVTI4tWTs0JXs_fDEg.JPEG/6cd475ce-0270-4ea7-b9d1-cab92f1a2c63.jpeg",
    series: "I'LL LIKE YOU - WITH Ver.",
    alt: "책장과 반짝이 장식이 가득한 방에서 한쪽 눈을 감은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDA5MzBfMTYx/MDAxNzI3Njg0NzEyNDk0.RXwfB8QlgPuXAPE4Efa3FxsWegdZhpjvBEChyflH_ZEg.3T6mqls5yK1A3sgDcBzewNmvpBYBUAWRQ_XcKeavmz0g.JPEG/2abe7701-3e9d-46dd-9834-154b8d733e22.jpeg",
    series: "I'LL LIKE YOU - WITH Ver.",
    alt: "두 손으로 얼굴을 감싸고 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDA5MzBfMTg1/MDAxNzI3Njg0NzE1MTAw.QblB8zaEnE-LpRDTbPhzer3wKOReYeO4FcnDk4aXL4kg.2RDSW8pRLW2QvpZVfIvHh_P7hrdoLunimlpNB42j7N8g.JPEG/c8474369-4fd1-4499-95ef-3c81f416ab0e.jpeg",
    series: "I'LL LIKE YOU - WITH Ver.",
    alt: "알록달록한 목걸이를 하고 두 손을 모은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDZfMTQ3/MDAxNzA5NzA4MzExODc1.0MaeYLf0BpHcJLW61_P53PgN0PhBMd9NMHpOwe-ETU8g.8qGUt0AVcWQIiQrYa2DZCTCpQEXLyql9wdjfpNQ-cbQg.JPEG/a54163f7-3c61-4b7c-8ea6-2bc3c3402f3d.jpeg",
    series: "SUPER REAL ME - SUPER ME Ver.",
    alt: "하얀 이불을 온몸에 두르고 고개만 내민 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDZfMjIw/MDAxNzA5NzA4MzExNjcy.lM8Oy0lld612RfYI6lw90wp3rdh1GTq_KeltLqgq8mwg.QEIQ5z0aaOqiLK6aLMiuTjlA6LGdGQD0W6NA4G881uog.JPEG/ac8881db-2417-41ee-a8bc-99587c6d7530.jpeg",
    series: "SUPER REAL ME - SUPER ME Ver.",
    alt: "푸른 하늘 아래 구름처럼 쌓인 솜 위에 누운 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDZfNTMg/MDAxNzA5NzA4MzExNzQy.jWUZyQol1hE0T5G7CBnIOAuNOatUPfY6q0S09SFuzaAg.UfsvFm-1-5nz40midOpqCcB4ax1pwt-yqeZg7fZLczgg.JPEG/336a3e84-2c62-498f-aae6-fabef41cfce8.jpeg",
    series: "SUPER REAL ME - SUPER ME Ver.",
    alt: "흐릿한 빛망울 너머로 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDZfNTEg/MDAxNzA5NzA4MzExOTA3.AEVVkWNkKMCaAem4N0UouPOwXNn1gVAjaZKqtA7d3Pcg.h5W04GQPEppKLhPktuOqFkzoji5pmjmcGCoNeTv9Dlkg.JPEG/ec69360b-269a-4ab6-bb87-5375c2106aac.jpeg",
    series: "SUPER REAL ME - SUPER ME Ver.",
    alt: "솜 구름 속에서 강아지 인형을 쓰다듬는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDVfMjcg/MDAxNzA5NjM4ODk4MDg2.vCq-DvYqt3NIrP5jIYBzqTeuJgIHOwwvIo2MwVjlsOcg.gTC3pQgIOXH4yRimX414V1VxrV0MTcWi4-BVl6NVSukg.JPEG/11aff595-2982-40ac-a048-14ad6ad51381.jpeg",
    series: "SUPER REAL ME - REAL ME Ver.",
    alt: "분홍 재킷에 흰 튤 스커트를 입고 쪼그려 앉은 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDVfMTQ2/MDAxNzA5NjM4ODk4NDE1.SAZIcYtDcCbONgVjL00My6UsR4jwZghJF0zhgTytQNIg.soNDitkaeUiLM9ghnYY8EXDO9Ab3tr1OoLAp9Q3V4msg.JPEG/89ad5cf0-2276-4003-85fb-46b942542f92.jpeg",
    series: "SUPER REAL ME - REAL ME Ver.",
    alt: "주택가 베란다 문 사이에 모자를 쓰고 선 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDVfNDkg/MDAxNzA5NjM4ODk4MTQ1.3kqEdIDuMvlVyfLRFwVSrMdZ7rcNQT2V2HgjpEfl0hwg.Mk20s54Qv0rhFi9HAbWTIFHlD0FsaJXJbPRUTK0859Ag.JPEG/5a72343c-5cec-4838-bfa0-ccc6aa8778d4.jpeg",
    series: "SUPER REAL ME - REAL ME Ver.",
    alt: "검은 모자를 쓰고 타일 위에 엎드려 체리를 들어 올린 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDVfNDIg/MDAxNzA5NjM4ODk3NDUy.ohGg7_HSGky2MBuMtvr_Zox6X6kJCE9BKqsRfIFLRPUg.AenyQlcYzQnEYxaK7B-v_WjW9byIBHbVgIiftVQJIYIg.JPEG/ccfded09-2e4b-4703-9795-fe4441797307.jpeg",
    series: "SUPER REAL ME - REAL ME Ver.",
    alt: "보랏빛 조명이 한쪽 눈을 비추는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDVfMTU4/MDAxNzA5NjM4ODk4MjQ1.e6CEhmVVRy7HsTDu0-LjSxKLnQYth3QxfHBaZFYEqZEg.02PVciIi6uGjlgrKWW3l2VwWzDFZHRdwAk5ZJnnsg7og.JPEG/111a192f-5c8a-42af-bbf5-360c95603acd.jpeg",
    series: "SUPER REAL ME - REAL ME Ver.",
    alt: "흰 목폴라를 입고 머리를 땋은 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyNDAzMDVfMjUz/MDAxNzA5NjM4ODk4MzIy.m9FvDwQHZtFlPI_oFtM3iVrRSumsVjnWsaZr8DbiY08g.pDg6N9AReJGwcc5Wst6PBVR0Of2-HW173du1yXh_8JAg.JPEG/730b74fd-6e80-4cf4-9755-a3e4c3c81c5b.jpeg",
    series: "SUPER REAL ME - REAL ME Ver.",
    alt: "노을빛 유리창 옆에 서서 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyMzA2MjdfMjI1/MDAxNjg3ODI5OTA5MjA1.aJkr_vjl6kbEXJfCnqeymfy9Y_HfnHnyc_Wp5t29cLAg.8qDQl8is7Gu570zmVfCeLpRkSSpo-LXYcgpkYZRktQUg.JPEG/2d719054-faf8-4f8f-af9e-87303c4cd428.jpeg",
    series: "R U Next?",
    alt: "흰 배경 앞, 흰 블라우스를 입고 카메라를 바라보는 원희",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyMzA2MTZfOTQg/MDAxNjg2ODg0MzQ1OTg0.tvXbelaHyqKWKt9H4tPCqGNun7-gss4xdxD5rWtKCvEg.dnuRCOyEpLVOHMpp-xPFFCdYSbC35xoIgbkd7AMxNs8g.JPEG/3c25fda3-bfa1-4a41-ba6a-d005e1f3721b.jpeg",
    series: "R U Next?",
    alt: "손글씨 낙서가 그려진, 머리카락을 쓸어 넘기며 웃는 원희 클로즈업",
  },
  {
    src: "https://phinf.wevpstatic.net/MjAyMzA2MTZfMjU5/MDAxNjg2ODg0MzQ2MDgx.CaSRYvOhr_ZOu0gwfPOFn33MUIzU2eSmy1YQLHybJrgg.IZgq1krHbC4pUUSR54ppjTiKli5nB06WEQ9aGLqFnKQg.JPEG/5bff6490-5e8a-43e6-86d9-8a8039cafdc5.jpeg",
    series: "R U Next?",
    alt: "손글씨 낙서가 그려진, 풀밭 언덕에서 세일러 교복을 입고 돌아보는 원희",
  },
];
