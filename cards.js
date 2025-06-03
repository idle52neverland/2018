
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("allCards");

  const cardsHTML = `

<div class="card-container" data-category="RADIO / PODCAST">
<a href="https://www.youtube.com/watch?v=inaLcT_gOS8" target="_blank" class="card" data-category="RADIO" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/inaLcT_gOS8/hqdefault.jpg" alt="아이들 - 컬투쇼">
  <div class="card-title">[FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼(2025-05-27)</div>
</a>
</div>


<div class="card-container" data-category="MV & SPECIAL CLIP ">
  <a href="https://www.youtube.com/watch?v=8KpvPHcXr1c" target="_blank" class="card" data-category="MV" data-member="민니" data-year="2025">
    <img src="https://i.ytimg.com/vi/8KpvPHcXr1c/hqdefault.jpg" alt="민니 - Blind Eyes Red MV">
    <div class="card-title">민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-02-27)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=rTKqSmX9XhQ" target="_blank" class="card" data-category="MV" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/rTKqSmX9XhQ/hqdefault.jpg" alt="(G)I-DLE - Klaxon MV">
    <div class="card-title">(G)I-DLE (여자)아이들 - 'Klaxon' Official Music Video (2025-03-05)</div>
  </a>
</div>


<div class="card-container" data-category="MAGAZINE & INTERVIEW">
  <a href="https://www.youtube.com/watch?v=NSD0BJIdCjw" target="_blank" class="card" data-category="INTERVIEW" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/NSD0BJIdCjw/hqdefault.jpg" alt="아이들 - K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive)">
    <div class="card-title">K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive) (2025-05-19)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=YA7W7r_4A6Y" target="_blank" class="card" data-category="INTERVIEW" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/YA7W7r_4A6Y/hqdefault.jpg" alt="아이들 - SOHU KOREA 인터뷰">
    <div class="card-title">SOHU KOREA 인터뷰 (2025-05-21)</div>
  </a>
</div>


<div class="card-container" data-category="LIVE STREAM">
  <a href="https://www.youtube.com/watch?v=p2UeSrQHn_c" target="_blank" class="card" data-category="LIVE" data-member="민니" data-year="2022">
    <img src="https://i.ytimg.com/vi/p2UeSrQHn_c/hqdefault.jpg" alt="민니 - [리무진서비스] EP01. (여자)아이들 민니">
    <div class="card-title">[리무진서비스] EP01. (여자)아이들 민니 | (G)I-DLE MINNIE | Senorita, 구애, 신호등, Lost Stars | TH/EN (2022-02-22)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=SLG5LJNkqec" target="_blank" class="card" data-category="LIVE" data-member="아이들" data-year="2023">
    <img src="https://i.ytimg.com/vi/SLG5LJNkqec/hqdefault.jpg" alt="아이들 - [리무진서비스] EP.62 이무진">
    <div class="card-title">[리무진서비스] EP.62 이무진 | LEE MU JIN | 신호등, 잠깐 시간 될까, 눈이 오잖아 (2023-05-09)</div>
  </a>
</div>

<div class="card-container" data-category="MUSIC SHOW PERFORMANCE">
  <a href="https://www.youtube.com/watch?v=D8P4C_of6r8" target="_blank" class="card" data-category="MUSIC" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/D8P4C_of6r8/hqdefault.jpg" alt="아이들 - Good Thing - I-dle [뮤직뱅크]">
    <div class="card-title">Good Thing - I-dle (아이들) [뮤직뱅크/Music Bank] | KBS 250523 방송 (2025-05-23)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=ttFP-wesL78" target="_blank" class="card" data-category="MUSIC SHOW PERFORMANCE" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/ttFP-wesL78/hqdefault.jpg" alt="아이들 - SBS 방송 Good Thing">
    <div class="card-title">i-dle (아이들) - Good Thing | SBS 250525 방송 (2025-05-25)</div>
  </a>
</div>

<div class="card-container" data-category="FESTIVAL / EVENT STAGE">
  <a href="https://www.youtube.com/watch?v=8bguFz5ns3w" target="_blank" class="card" data-category="FESTIVAL / EVENT STAGE" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/8bguFz5ns3w/hqdefault.jpg" alt="아이들 - Girlfriend 한양대">
    <div class="card-title">i-dle (아이들) 'Girlfriend' @ HANYANG UNIVERSITY ERICA (2025-05-30)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=g4QP414Nv80" target="_blank" class="card" data-category="FESTIVAL / EVENT STAGE" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/g4QP414Nv80/hqdefault.jpg" alt="아이들 - Girlfriend 아주대">
    <div class="card-title">i-dle (아이들) 'Girlfriend' @ AJOU UNIVERSITY (2025-05-29)</div>
  </a>
</div>

<div class="card-container" data-category="FANCAM & STAGE FOCUS">
  <a href="https://www.youtube.com/watch?v=cTmfYOlilQA" target="_blank" class="card" data-category="FANCAM & STAGE FOCUS" data-member="민니" data-year="2025">
    <img src="https://i.ytimg.com/vi/cTmfYOlilQA/hqdefault.jpg" alt="민니 - 직캠 Good Thing">
    <div class="card-title">[MPD직캠] 아이들 민니 직캠 4K 'Good Thing' (i-dle MINNIE FanCam) | @MCOUNTDOWN_2025.5.22 (2025-05-22)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=iXiMJFUfniU" target="_blank" class="card" data-category="FANCAM & STAGE FOCUS" data-member="슈화" data-year="2025">
    <img src="https://i.ytimg.com/vi/iXiMJFUfniU/hqdefault.jpg" alt="슈화 - 얼빡직캠">
    <div class="card-title">[얼빡직캠 4K] 아이들 슈화 'Good Thing' (i-dle SHUHUA Facecam) @뮤직뱅크(Music Bank) 250523 (2025-05-23)</div>
  </a>
</div>

<div class="card-container" data-category="RECORDING / STUDIO BEHIND">
  <a href="https://www.youtube.com/watch?v=Ly5SxYH5OhI" target="_blank" class="card" data-category="RECORDING / STUDIO BEHIND" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/Ly5SxYH5OhI/hqdefault.jpg" alt="아이들 - Good Thing Recording Behind">
    <div class="card-title">i-dle (아이들) 'Good Thing' Recording BehindㅣSUB (2025-05-27)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=ioWv9shT4lU" target="_blank" class="card" data-category="RECORDING / STUDIO BEHIND" data-member="아이들" data-year="2024">
    <img src="https://i.ytimg.com/vi/ioWv9shT4lU/hqdefault.jpg" alt="아이들 - Klaxon Recording Behind">
    <div class="card-title">(여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Recording Behind (ENG/CHN) (2024-07-17)</div>
  </a>
</div>

<div class="card-container" data-category="DANCE PRACTICE / FANCHANT">
  <a href="https://www.youtube.com/watch?v=qDg3uR7exAU" target="_blank" class="card" data-category="DANCE PRACTICE / FANCHANT" data-member="민니" data-year="2025">
    <img src="https://i.ytimg.com/vi/qDg3uR7exAU/hqdefault.jpg" alt="민니 - HER 안무연습">
    <div class="card-title">민니(MINNIE) - 'HER' Choreography Practice Video (2025-01-27)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=Si5pQHRRH5w" target="_blank" class="card" data-category="DANCE PRACTICE / FANCHANT" data-member="아이들" data-year="2022">
    <img src="https://i.ytimg.com/vi/Si5pQHRRH5w/hqdefault.jpg" alt="아이들 - MY BAG 안무연습">
    <div class="card-title">(여자)아이들((G)I-DLE) - 'MY BAG' (Choreography Practice Video) (2022-03-28)</div>
  </a>
</div>

<div class="card-container" data-category="TV SHOW">
  <a href="https://www.youtube.com/watch?v=rzJb3LQzBlU" target="_blank" class="card" data-category="TV" data-member="소연" data-year="2023">
    <img src="https://i.ytimg.com/vi/rzJb3LQzBlU/hqdefault.jpg" alt="소연 - 방과후 설렘2">
    <div class="card-title">[방과후 설렘2 - 소년판타지] ＂안되면 가수 안 할 거야?🔥＂ 프로듀서 전소연에게 평가에 임하는 태도 지적을 받은 문재영, MBC 230406 방송 (2023-04-07)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=NXR55SQb8Xw" target="_blank" class="card" data-category="TV" data-member="소연" data-year="2023">
    <img src="https://i.ytimg.com/vi/NXR55SQb8Xw/hqdefault.jpg" alt="소연 - SPACEMAN 프로듀싱">
    <div class="card-title">[소년판타지 - 방과후 설렘2] 프로듀서 전소연이 직접 프로듀싱 한 곡! ＜SPACEMAN＞🚀🌌, MBC 230525 방송 (2023-05-25)</div>
  </a>
</div>

<div class="card-container" data-category="YOUTUBE CONTENTS">
  <a href="https://www.youtube.com/watch?v=sJFegjopCRA" target="_blank" class="card" data-category="YOUTUBE CONTENTS" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/sJFegjopCRA/hqdefault.jpg" alt="아이들 - 조현아의 평범한 목요일 밤">
    <div class="card-title">[ENG SUB] 십년지기 동생과 또 다른 동생의 대환장 달팽이관 공격 👂🏻🙉 l EP11 l 조현아의 평범한 목요일 밤 (2025-05-29)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=a4kO0Mk8BkI" target="_blank" class="card" data-category="YOUTUBE CONTENTS" data-member="우기" data-year="2025">
    <img src="https://i.ytimg.com/vi/a4kO0Mk8BkI/hqdefault.jpg" alt="우기 - 민주의 핑크 캐비닛 EP.22">
    <div class="card-title">[sub] 아일릿 멤버가 다섯 명이라고요⁉️ 싸우기 딱 좋은 멤버 수네요🤭 | 민주의 핑크 캐비닛💝 EP.22 | i-dle (2025-05-22)</div>
  </a>
</div>

<div class="card-container" data-category="REALITY (Original Content)">
  <a href="https://www.youtube.com/watch?v=C1ITPFPt1do" target="_blank" class="card" data-category="REALITY (Original Content)" data-member="아이들" data-year="2023">
    <img src="https://i.ytimg.com/vi/C1ITPFPt1do/hqdefault.jpg" alt="아이들 - (G)맘대로 아이들 특별편성">
    <div class="card-title">[(G)맘대로 아이들] ★특별편성★ | 네가 알던 내가 아냐 (ENG/CHN) | (G)I-DLE INSIDE | (여자)아이들 ((G)I-DLE) (2023-08-23)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=uvEYX0MSs1s" target="_blank" class="card" data-category="REALITY (Original Content)" data-member="아이들" data-year="2023">
    <img src="https://i.ytimg.com/vi/uvEYX0MSs1s/hqdefault.jpg" alt="아이들 - (G)맘대로 아이들 EP08">
    <div class="card-title">[(G)맘대로 아이들] EP.08 긴장해. 케이팝 기강 잡으러 온다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-14)</div>
  </a>
</div>

<div class="card-container" data-category="LIVE STREAM">
  <a href="https://www.youtube.com/watch?v=Us-a7eK01Uk" target="_blank" class="card" data-category="LIVE STREAM" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/Us-a7eK01Uk/hqdefault.jpg" alt="아이들 - 위버스 라이브 요약본 250215">
    <div class="card-title">8년 차 부부 댕댕이자매 | 250215 위버스 라이브 요약본 (2025-02-16)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=aEBZE3Xuin8" target="_blank" class="card" data-category="LIVE STREAM" data-member="아이들" data-year="2024">
    <img src="https://i.ytimg.com/vi/aEBZE3Xuin8/hqdefault.jpg" alt="아이들 - MMA 대상 기념 라이브 2024">
    <div class="card-title">아이들 2024 MMA 대상 수상 기념 라이브 | 241130 위버스 라이브 요약본 (2024-12-01)</div>
  </a>
</div>

<div class="card-container" data-category="BEHIND CLIPS">
  <a href="https://www.youtube.com/watch?v=cQ19LQPTH4k" target="_blank" class="card" data-category="BEHIND CLIPS" data-member="아이들" data-year="2024">
    <img src="https://i.ytimg.com/vi/cQ19LQPTH4k/hqdefault.jpg" alt="아이들 - I-TALK #171 'Klaxon' MV 비하인드">
    <div class="card-title">(여자)아이들((G)I-DLE) - I-TALK #171 : '클락션 (Klaxon)' M/V 촬영 비하인드 PART 1 (ENG/CHN) (2024-07-25)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=lipxvr_VlTA" target="_blank" class="card" data-category="BEHIND CLIPS" data-member="아이들" data-year="2024">
    <img src="https://i.ytimg.com/vi/lipxvr_VlTA/hqdefault.jpg" alt="아이들 - I-TALK #149 'Super Lady' MV 비하인드">
    <div class="card-title">(여자)아이들((G)I-DLE) - I-TALK #149 : 'Super Lady' M/V 촬영 비하인드 PART 1 (ENG/CHN) (2024-02-14)</div>
  </a>
</div>

<div class="card-container" data-category="CHALLENGE">
  <a href="https://www.youtube.com/watch?v=ckhm9OtNiZ4" target="_blank" class="card" data-category="CHALLENGE" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/ckhm9OtNiZ4/hqdefault.jpg" alt="아이들 - Girlfriend 챌린지">
    <div class="card-title">𝗀𝗂𝗋𝗅𝖿𝗋𝗂𝖾𝗇𝖽 𝗂𝗌 𝖻𝖾𝗍𝗍𝖾𝗋 𝗍𝗁𝖺𝗇 𝖺 𝖻𝗈𝗒𝖿𝗋𝗂𝖾𝗇𝖽 💗 (2025-06-02)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=cZ1swUW9wC8" target="_blank" class="card" data-category="CHALLENGE" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/cZ1swUW9wC8/hqdefault.jpg" alt="아이들 - Good Thing 막방 챌린지">
    <div class="card-title">막방까지 Good Thing 💜 네버버 고마워 💜 (2025-06-01)</div>
  </a>
</div>

<div class="card-container" data-category="ETC">
  <a href="https://www.youtube.com/watch?v=GaVQsuFKOsg" target="_blank" class="card" data-category="ETC" data-member="아이들" data-year="2023">
    <img src="https://i.ytimg.com/vi/GaVQsuFKOsg/hqdefault.jpg" alt="아이들 - 손승희 감독 클래스">
    <div class="card-title">[FULL] 핫한 MV 감독 ✨손승희✨ 원투데이클래스 OPEN💚 ｜GOT7 영재의 친한친구｜MBC 230712 방송 (2023-07-12)</div>
  </a>
</div>
`;

  container.innerHTML = cardsHTML;
});
