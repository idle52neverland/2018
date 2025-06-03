// cards.js

const allCardsContainer = document.getElementById("allCards");
const mainTitle = document.getElementById("mainTitle");
const categoryTitle = document.getElementById("categoryTitle");
const categoryBar = document.getElementById("categoryBar");
const subFilters = document.getElementById("subFilters");
const searchInput = document.getElementById("searchInput");
const searchBar = document.getElementById("mainSearchBar");
const socialIcons = document.getElementById("socialIcons");
const searchWrapper = document.getElementById("searchWrapper");
const backButton = document.getElementById("backButton");
const homeButton = document.getElementById("homeButton");

let currentCategory = "";
let currentFilters = { year: null, member: null };
let allCards = [];

function createCardContainer(category) {
  let container = document.querySelector(`.card-container[data-category="${category}"]`);
  if (!container) {
    container = document.createElement("div");
    container.className = "card-container";
    container.dataset.category = category;
    allCardsContainer.appendChild(container);
  }
  return container;
}

function showFilters(category) {
  currentCategory = category;
  mainTitle.style.display = "none";
  categoryTitle.innerText = category;
  categoryTitle.style.display = "block";
  categoryBar.classList.add("category-bar-hidden");
  subFilters.style.display = "flex";
  searchWrapper.style.display = "flex";
  socialIcons.classList.add("hidden");

  document.querySelectorAll(".card-container").forEach((el) => {
    el.style.display = el.dataset.category === category ? "flex" : "none";
  });

  applyFilters();
}

function goBackToCategories() {
  currentCategory = "";
  currentFilters = { year: null, member: null };
  searchInput.value = "";

  mainTitle.style.display = "block";
  categoryTitle.style.display = "none";
  categoryBar.classList.remove("category-bar-hidden");
  subFilters.style.display = "none";
  searchWrapper.style.display = "flex";
  socialIcons.classList.remove("hidden");

  document.querySelectorAll(".card-container").forEach((el) => {
    el.style.display = "flex";
  });

  applyFilters();
}

function filterVideos(type, value) {
  currentFilters[type] = value;
  applyFilters();
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();

  if (!currentCategory && query) {
    // 홈 화면에서 전체 검색 시: 모든 카드 단일 컨테이너로 보여줌
    allCardsContainer.innerHTML = "";
    const tempContainer = document.createElement("div");
    tempContainer.className = "card-container";
    tempContainer.style.display = "flex";
    allCardsContainer.appendChild(tempContainer);

    const filtered = allCards.filter(card => {
      const title = card.querySelector(".card-title").innerText.toLowerCase();
      return title.includes(query);
    });

    filtered.forEach(card => tempContainer.appendChild(card));
  } else {
    const containers = document.querySelectorAll(".card-container");
    containers.forEach(container => {
      const isActive = currentCategory ? container.dataset.category === currentCategory : true;
      if (!isActive) return;

      container.querySelectorAll(".card").forEach(card => {
        const title = card.querySelector(".card-title").innerText.toLowerCase();
        const year = card.dataset.year;
        const member = card.dataset.member;

        const matchesQuery = !query || title.includes(query);
        const matchesYear = !currentFilters.year || currentFilters.year === year;
        const matchesMember = !currentFilters.member || currentFilters.member === member;

        card.style.display = (matchesQuery && matchesYear && matchesMember) ? "block" : "none";
      });
    });
  }
}

searchInput.addEventListener("input", applyFilters);

document.addEventListener("DOMContentLoaded", () => {
  allCards = Array.from(document.querySelectorAll(".card"));
  allCards.sort((a, b) => {
    const da = a.querySelector(".card-title").innerText.match(/\((\d{4}-\d{2}-\d{2})\)/);
    const db = b.querySelector(".card-title").innerText.match(/\((\d{4}-\d{2}-\d{2})\)/);
    return db && da ? new Date(db[1]) - new Date(da[1]) : 0;
  });
  allCards.forEach(card => {
    const category = card.dataset.category;
    const container = createCardContainer(category);
    container.appendChild(card);
  });
});


<div class="card-container" data-category="MV / SPECIAL CLIP">
<a href="https://www.youtube.com/watch?v=hAONx6nuEgI" target="_blank" class="card" data-category="MV / SPECIAL CLIP" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Good Thing' Official Music Video">
  <div class="card-title">i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)</div>
</a>

<a href="https://www.youtube.com/watch?v=zKfs2EM8LQ4" target="_blank" class="card" data-category="MV / SPECIAL CLIP" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/zKfs2EM8LQ4/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Girlfriend' Official Music Video">
  <div class="card-title">i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)</div>
</a>

<a href="https://www.youtube.com/watch?v=UTHqh7Vpa64" target="_blank" class="card" data-category="MV / SPECIAL CLIP" data-member="민니" data-year="2025">
  <img src="https://i.ytimg.com/vi/UTHqh7Vpa64/hqdefault.jpg" alt="민니 - 민니(MINNIE) - 'HER' Official Music Video">
  <div class="card-title">민니(MINNIE) - 'HER' Official Music Video (2025-01-21)</div>
</a>
</div>


<div class="card-container" data-category="LIVE / COVER SONG / DANCE">
<a href="https://www.youtube.com/watch?v=yT0VPAyPbH8" target="_blank" class="card" data-category="LIVE / COVER SONG / DANCE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/yT0VPAyPbH8/hqdefault.jpg" alt="아이들 - [리무진서비스] (여자)아이들 플레이리스트 | (G)I-DLE PLAYLIST">
  <div class="card-title">[리무진서비스] (여자)아이들 플레이리스트 | (G)I-DLE PLAYLIST (2025-04-19)</div>
</a>

<a href="https://www.youtube.com/watch?v=p2UeSrQHn_c" target="_blank" class="card" data-category="LIVE / COVER SONG / DANCE" data-member="민니" data-year="2022">
  <img src="https://i.ytimg.com/vi/p2UeSrQHn_c/hqdefault.jpg" alt="민니 - [리무진서비스] EP01. (여자)아이들 민니 | (G)I-DLE MINNIE | Senorita, 구애, 신호등, Lost Stars | TH/EN">
  <div class="card-title">[리무진서비스] EP01. (여자)아이들 민니 | (G)I-DLE MINNIE | Senorita, 구애, 신호등, Lost Stars | TH/EN (2022-02-22)</div>
</a>

<a href="https://www.youtube.com/watch?v=t3a7JJEKiMA" target="_blank" class="card" data-category="LIVE / COVER SONG / DANCE" data-member="소연" data-year="2024">
  <img src="https://i.ytimg.com/vi/t3a7JJEKiMA/hqdefault.jpg" alt="소연 - [리무진서비스] EP.99 (여자)아이들 소연 | (G)I-DLE SOYEON | 나는 아픈 건 딱 질색이니까, 아파, Not Enough, 사랑은 은하수 다방에서">
  <div class="card-title">[리무진서비스] EP.99 (여자)아이들 소연 | (G)I-DLE SOYEON | 나는 아픈 건 딱 질색이니까, 아파, Not Enough, 사랑은 은하수 다방에서 (2024-01-30)</div>
</a>
</div>

<div class="card-container" data-category="MUSIC SHOW PERFORMANCE">
<a href="https://www.youtube.com/watch?v=IF23qT7CYUc" target="_blank" class="card" data-category="MUSIC SHOW PERFORMANCE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/IF23qT7CYUc/hqdefault.jpg" alt="아이들 - Girlfriend - I-dle (아이들) [뮤직뱅크/Music Bank] | KBS 250523 방송">
  <div class="card-title">Girlfriend - I-dle (아이들) [뮤직뱅크/Music Bank] | KBS 250523 방송 (2025-05-23)</div>
</a>

<a href="https://www.youtube.com/watch?v=IF23qT7CYUc" target="_blank" class="card" data-category="MUSIC SHOW PERFORMANCE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/IF23qT7CYUc/hqdefault.jpg" alt="아이들 - Girlfriend - I-dle (아이들) [뮤직뱅크/Music Bank] | KBS 250523 방송">
  <div class="card-title">Girlfriend - I-dle (아이들) [뮤직뱅크/Music Bank] | KBS 250523 방송 (2025-05-23)</div>
</a>

<a href="https://www.youtube.com/watch?v=F5mM908yxgA" target="_blank" class="card" data-category="MUSIC SHOW PERFORMANCE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/F5mM908yxgA/hqdefault.jpg" alt="아이들 - i-dle (아이들) - Girlfriend | SBS 250525 방송">
  <div class="card-title">i-dle (아이들) - Girlfriend | SBS 250525 방송 (2025-05-25)</div>
</a>
</div>

<div class="card-container" data-category="FESTIVAL / EVENT STAGE">
<a href="https://www.youtube.com/watch?v=8bguFz5ns3w" target="_blank" class="card" data-category="FESTIVAL / EVENT STAGE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/8bguFz5ns3w/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Girlfriend' @ HANYANG UNIVERSITY ERICA">
  <div class="card-title">i-dle (아이들) 'Girlfriend' @ HANYANG UNIVERSITY ERICA (2025-05-30)</div>
</a>

<a href="https://www.youtube.com/watch?v=4VGO8ci5avI" target="_blank" class="card" data-category="FESTIVAL / EVENT STAGE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/4VGO8ci5avI/hqdefault.jpg" alt="아이들 - i-dle (아이들) '퀸카 (Queencard)' @ HANYANG UNIVERSITY ERICA">
  <div class="card-title">i-dle (아이들) '퀸카 (Queencard)' @ HANYANG UNIVERSITY ERICA (2025-05-30)</div>
</a>

<a href="https://www.youtube.com/watch?v=c3EPyO8KKK8" target="_blank" class="card" data-category="FESTIVAL / EVENT STAGE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/c3EPyO8KKK8/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Wife' @ AJOU UNIVERSITY">
  <div class="card-title">i-dle (아이들) 'Wife' @ AJOU UNIVERSITY (2025-05-29)</div>
</a>
</div>

<div class="card-container" data-category="FANCAM / STAGE FOCUS">
<a href="https://www.youtube.com/watch?v=lgDo7ZUoyZ8" target="_blank" class="card" data-category="FANCAM / STAGE FOCUS" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/lgDo7ZUoyZ8/hqdefault.jpg" alt="아이들 - [MPD직캠] 아이들 직캠 8K 'Good Thing' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22">
  <div class="card-title">[MPD직캠] 아이들 직캠 8K 'Good Thing' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22 (2025-05-22)</div>
</a>

<a href="https://www.youtube.com/watch?v=RsoL_clzS4Q" target="_blank" class="card" data-category="FANCAM / STAGE FOCUS" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/RsoL_clzS4Q/hqdefault.jpg" alt="아이들 - [MPD직캠] 아이들 직캠 8K 'Girlfriend' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22">
  <div class="card-title">[MPD직캠] 아이들 직캠 8K 'Girlfriend' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22 (2025-05-22)</div>
</a>

<a href="https://www.youtube.com/watch?v=OjS1QMpTUXc" target="_blank" class="card" data-category="FANCAM / STAGE FOCUS" data-member="우기" data-year="2025">
  <img src="https://i.ytimg.com/vi/OjS1QMpTUXc/hqdefault.jpg" alt="우기 - [MPD직캠] 아이들 우기 직캠 4K 'Good Thing' (i-dle YUQI FanCam) | @MCOUNTDOWN_2025.5.29">
  <div class="card-title">[MPD직캠] 아이들 우기 직캠 4K 'Good Thing' (i-dle YUQI FanCam) | @MCOUNTDOWN_2025.5.29 (2025-05-29)</div>
</a>
</div>

<div class="card-container" data-category="RECORDING / STUDIO BEHIND">
<a href="https://www.youtube.com/watch?v=Ly5SxYH5OhI" target="_blank" class="card" data-category="RECORDING / STUDIO BEHIND" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/Ly5SxYH5OhI/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Good Thing' Recording BehindㅣSUB">
  <div class="card-title">i-dle (아이들) 'Good Thing' Recording BehindㅣSUB (2025-05-27)</div>
</a>

<a href="https://www.youtube.com/watch?v=F8p3RR37naI" target="_blank" class="card" data-category="RECORDING / STUDIO BEHIND" data-member="아이들" data-year="2022">
  <img src="https://i.ytimg.com/vi/F8p3RR37naI/hqdefault.jpg" alt="아이들 - (여자)아이들((G)I-DLE) - 'Nxde' Recording Behind (ENG/CHN)">
  <div class="card-title">(여자)아이들((G)I-DLE) - 'Nxde' Recording Behind (ENG/CHN) (2022-12-23)</div>
</a>

<a href="https://www.youtube.com/watch?v=ioWv9shT4lU" target="_blank" class="card" data-category="RECORDING / STUDIO BEHIND" data-member="아이들" data-year="2024">
  <img src="https://i.ytimg.com/vi/ioWv9shT4lU/hqdefault.jpg" alt="아이들 - (여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Recording Behind (ENG/CHN)">
  <div class="card-title">(여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Recording Behind (ENG/CHN) (2024-07-17)</div>
</a>
</div>

<div class="card-container" data-category="DANCE PRACTICE / FANCHANT">
<a href="https://www.youtube.com/watch?v=pKCaXYYwGjw" target="_blank" class="card" data-category="DANCE PRACTICE / FANCHANT" data-member="아이들" data-year="2023">
  <img src="https://i.ytimg.com/vi/pKCaXYYwGjw/hqdefault.jpg" alt="아이들 - (여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Choreography Practice Video">
  <div class="card-title">(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Choreography Practice Video (2023-05-21)</div>
</a>

<a href="https://www.youtube.com/watch?v=R9UsmrVEWYY" target="_blank" class="card" data-category="DANCE PRACTICE / FANCHANT" data-member="아이들" data-year="2022">
  <img src="https://i.ytimg.com/vi/R9UsmrVEWYY/hqdefault.jpg" alt="아이들 - (여자)아이들((G)I-DLE) - 'Nxde' (Choreography Practice Video)">
  <div class="card-title">(여자)아이들((G)I-DLE) - 'Nxde' (Choreography Practice Video) (2022-10-23)</div>
</a>

<a href="https://www.youtube.com/watch?v=5MrJBrR_sfo" target="_blank" class="card" data-category="DANCE PRACTICE / FANCHANT" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/5MrJBrR_sfo/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Good Thing' Choreography Practice Video">
  <div class="card-title">i-dle (아이들) 'Good Thing' Choreography Practice Video (2025-05-26)</div>
</a>
</div>

<div class="card-container" data-category="TV SHOW">
<a href="https://www.youtube.com/watch?v=YNp9IR8EkTY" target="_blank" class="card" data-category="TV SHOW" data-member="아이들" data-year="2021">
  <img src="https://i.ytimg.com/vi/YNp9IR8EkTY/hqdefault.jpg" alt="아이들 - [EN/JP] 내가 댄스배틀을 어떻게 해..">
  <div class="card-title">[EN/JP] 내가 댄스배틀을 어떻게 해.. (2021-12-22)</div>
</a>

<a href="https://www.youtube.com/watch?v=WzR2pxtX-xo" target="_blank" class="card" data-category="TV SHOW" data-member="소연" data-year="2022">
  <img src="https://i.ytimg.com/vi/WzR2pxtX-xo/hqdefault.jpg" alt="소연 - [방과후 설렘 미방분] 🍓전소연 선생님과 케이크 만들기🎂, MBC 220109 방송">
  <div class="card-title">[방과후 설렘 미방분] 🍓전소연 선생님과 케이크 만들기🎂, MBC 220109 방송 (2022-01-11)</div>
</a>

<a href="https://www.youtube.com/watch?v=rYuymcaXPDQ" target="_blank" class="card" data-category="TV SHOW" data-member="소연" data-year="2022">
  <img src="https://i.ytimg.com/vi/rYuymcaXPDQ/hqdefault.jpg" alt="소연 - [방과후 설렘] 눈에 띄게 성장한 실력에 소연쌤도 활짝😊 구멍에서 레전드가 된 3, 4학년 댄스연합의 무대ㅣ#방과후설렘 #7화 #전소연 MBC220109방송">
  <div class="card-title">[방과후 설렘] 눈에 띄게 성장한 실력에 소연쌤도 활짝😊 구멍에서 레전드가 된 3, 4학년 댄스연합의 무대ㅣ#방과후설렘 #7화 #전소연 MBC220109방송 (2022-01-10)</div>
</a>
</div>

<div class="card-container" data-category="YOUTUBE CONTENTS">
<a href="https://www.youtube.com/watch?v=sJFegjopCRA" target="_blank" class="card" data-category="YOUTUBE CONTENTS" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/sJFegjopCRA/hqdefault.jpg" alt="아이들 - [ENG SUB] 십년지기 동생과 또 다른 동생의 대환장 달팽이관 공격 👂🏻🙉 l EP11 l 조현아의 평범한 목요일 밤">
  <div class="card-title">[ENG SUB] 십년지기 동생과 또 다른 동생의 대환장 달팽이관 공격 👂🏻🙉 l EP11 l 조현아의 평범한 목요일 밤 (2025-05-29)</div>
</a>

<a href="https://www.youtube.com/watch?v=3SS8xwX3FHI" target="_blank" class="card" data-category="YOUTUBE CONTENTS" data-member="민니" data-year="2025">
  <img src="https://i.ytimg.com/vi/3SS8xwX3FHI/hqdefault.jpg" alt="민니 - [SUB] 태국 아이돌은 왜 풀뱅을 고수하는가… 당신이 몰랐(으면 좋겠)던 Good Thing한 이유 ✨민니✨ l 얼굴보고 얘기해 EP09 #민니 #idle #티파니영">
  <div class="card-title">[SUB] 태국 아이돌은 왜 풀뱅을 고수하는가… 당신이 몰랐(으면 좋겠)던 Good Thing한 이유 ✨민니✨ l 얼굴보고 얘기해 EP09 #민니 #idle #티파니영 (2025-05-28)</div>
</a>

<a href="https://www.youtube.com/watch?v=EDDO1Ip_Glw" target="_blank" class="card" data-category="YOUTUBE CONTENTS" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/EDDO1Ip_Glw/hqdefault.jpg" alt="아이들 - [SUB] 이 조합 Good Thing✨ 팬심 저격 토크.zip | G 빠진 아이들 😉 | 집대성 ep.58">
  <div class="card-title">[SUB] 이 조합 Good Thing✨ 팬심 저격 토크.zip | G 빠진 아이들 😉 | 집대성 ep.58 (2025-05-23)</div>
</a>
</div>

<div class="card-container" data-category="REALITY (Original Content)">
<a href="https://www.youtube.com/watch?v=C1ITPFPt1do" target="_blank" class="card" data-category="REALITY (Original Content)" data-member="아이들" data-year="2023">
  <img src="https://i.ytimg.com/vi/C1ITPFPt1do/hqdefault.jpg" alt="아이들 - [(G)맘대로 아이들] ★특별편성★ | 네가 알던 내가 아냐 (ENG/CHN) | (G)I-DLE INSIDE | (여자)아이들 ((G)I-DLE)">
  <div class="card-title">[(G)맘대로 아이들] ★특별편성★ | 네가 알던 내가 아냐 (ENG/CHN) | (G)I-DLE INSIDE | (여자)아이들 ((G)I-DLE) (2023-08-23)</div>
</a>

<a href="https://www.youtube.com/watch?v=4vY76usk3fk" target="_blank" class="card" data-category="REALITY (Original Content)" data-member="슈화" data-year="2023">
  <img src="https://i.ytimg.com/vi/4vY76usk3fk/hqdefault.jpg" alt="슈화 - [(G)맘대로 아이들] ★특별편성★ | 슈화 없는(?) 슈화쇼 (ENG/CHN) | SHUHUA SHOW | (여자)아이들 ((G)I-DLE)">
  <div class="card-title">[(G)맘대로 아이들] ★특별편성★ | 슈화 없는(?) 슈화쇼 (ENG/CHN) | SHUHUA SHOW | (여자)아이들 ((G)I-DLE) (2023-08-16)</div>
</a>

<a href="https://www.youtube.com/watch?v=-eWlNDLUAkI" target="_blank" class="card" data-category="REALITY (Original Content)" data-member="아이들" data-year="2023">
  <img src="https://i.ytimg.com/vi/-eWlNDLUAkI/hqdefault.jpg" alt="아이들 - [(G)맘대로 아이들] ★특별편성★ | [속보] (여자)아이들, "항시적으로 네버랜드 생각뿐" (ENG/CHN) | (G)I-DLE NEWS | (여자)아이들 ((G)I-DLE)">
  <div class="card-title">[(G)맘대로 아이들] ★특별편성★ | [속보] (여자)아이들, "항시적으로 네버랜드 생각뿐" (ENG/CHN) | (G)I-DLE NEWS | (여자)아이들 ((G)I-DLE) (2023-08-09)</div>
</a>
</div>

<div class="card-container" data-category="RADIO / PODCAST">
<a href="https://www.youtube.com/watch?v=AsjBiO1gsJs" target="_blank" class="card" data-category="RADIO / PODCAST" data-member="미연" data-year="2025">
  <img src="https://i.ytimg.com/vi/AsjBiO1gsJs/hqdefault.jpg" alt="미연 - [FULL] 다시 시작! 2막을 시작하다!!💞 완전체로 돌아온 아이들(i-dle)의 미연, 민니 보는 라디오 | 박소현의 러브게임 | 250601">
  <div class="card-title">[FULL] 다시 시작! 2막을 시작하다!!💞 완전체로 돌아온 아이들(i-dle)의 미연, 민니 보는 라디오 | 박소현의 러브게임 | 250601 (2025-06-01)</div>
</a>

<a href="https://www.youtube.com/watch?v=inaLcT_gOS8" target="_blank" class="card" data-category="RADIO / PODCAST" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/inaLcT_gOS8/hqdefault.jpg" alt="아이들 - [FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼 | 250527">
  <div class="card-title">[FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼 | 250527 (2025-05-27)</div>
</a>

<a href="https://www.youtube.com/watch?v=4-hj0AyLz3k" target="_blank" class="card" data-category="RADIO / PODCAST" data-member="미연" data-year="2025">
  <img src="https://i.ytimg.com/vi/4-hj0AyLz3k/hqdefault.jpg" alt="미연 - [FULL] 모든 G는 처단한다❌ 오롯이 'idle'이라는 이름으로 빛날 분금치✨아이들 미연&우기✨와 함께하는 브카☕️💜 | 이석훈의 브런치 카페 | MBC 250521 방송">
  <div class="card-title">[FULL] 모든 G는 처단한다❌ 오롯이 'idle'이라는 이름으로 빛날 분금치✨아이들 미연&우기✨와 함께하는 브카☕️💜 | 이석훈의 브런치 카페 | MBC 250521 방송 (2025-05-21)</div>
</a>
</div>

<div class="card-container" data-category="LIVE STREAM">
<a href="https://www.youtube.com/watch?v=Us-a7eK01Uk" target="_blank" class="card" data-category="LIVE STREAM" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/Us-a7eK01Uk/hqdefault.jpg" alt="아이들 - 8년 차 부부 댕댕이자매 | 250215 위버스 라이브 요약본">
  <div class="card-title">8년 차 부부 댕댕이자매 | 250215 위버스 라이브 요약본 (2025-02-16)</div>
</a>

<a href="https://www.youtube.com/watch?v=OLBw7n9iVpQ" target="_blank" class="card" data-category="LIVE STREAM" data-member="민니" data-year="2025">
  <img src="https://i.ytimg.com/vi/OLBw7n9iVpQ/hqdefault.jpg" alt="민니 - 민니 성공적 솔로 활동 마무리한 날 | 250202 민니 위버스 라이브 요약본">
  <div class="card-title">민니 성공적 솔로 활동 마무리한 날 | 250202 민니 위버스 라이브 요약본 (2025-02-02)</div>
</a>

<a href="https://www.youtube.com/watch?v=jtAHe7f6hPc" target="_blank" class="card" data-category="LIVE STREAM" data-member="우기" data-year="2025">
  <img src="https://i.ytimg.com/vi/jtAHe7f6hPc/hqdefault.jpg" alt="우기 - ENFJ 아이돌과 ISTP 매니저의 일상 | 241216 우기 위버스 라이브 요약본">
  <div class="card-title">ENFJ 아이돌과 ISTP 매니저의 일상 | 241216 우기 위버스 라이브 요약본 (2025-01-30)</div>
</a>
</div>

<div class="card-container" data-category="MAGAZINE / INTERVIEW">
<a href="https://www.youtube.com/watch?v=NSD0BJIdCjw" target="_blank" class="card" data-category="MAGAZINE / INTERVIEW" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/NSD0BJIdCjw/hqdefault.jpg" alt="아이들 - K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive)">
  <div class="card-title">K-pop Stars i-dle Dish On 8th Mini Album [We are] (Exclusive) (2025-05-19)</div>
</a>

<a href="https://www.youtube.com/watch?v=VCLjwNlZYvU" target="_blank" class="card" data-category="MAGAZINE / INTERVIEW" data-member="소연" data-year="2025">
  <img src="https://i.ytimg.com/vi/VCLjwNlZYvU/hqdefault.jpg" alt="소연 - [ENG] 여자아이들 소연이 말아주는 ASMR 시작할게요~ 인마이백 단골템 야돔 어떻게 쓰는지 알려줌! by W Korea">
  <div class="card-title">[ENG] 여자아이들 소연이 말아주는 ASMR 시작할게요~ 인마이백 단골템 야돔 어떻게 쓰는지 알려줌! by W Korea (2025-03-26)</div>
</a>

<a href="https://www.youtube.com/watch?v=SCGW79pWEIw" target="_blank" class="card" data-category="MAGAZINE / INTERVIEW" data-member="슈화" data-year="2025">
  <img src="https://i.ytimg.com/vi/SCGW79pWEIw/hqdefault.jpg" alt="슈화 - 가방 소개하는 슈화가 왜 이렇게 귀여워😻  | 얼루어코리아 Allure Korea">
  <div class="card-title">가방 소개하는 슈화가 왜 이렇게 귀여워😻  | 얼루어코리아 Allure Korea (2025-03-14)</div>
</a>
</div>

<div class="card-container" data-category="BEHIND CLIPS">
<a href="https://www.youtube.com/watch?v=rnHFWKdFl2c" target="_blank" class="card" data-category="BEHIND CLIPS" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/rnHFWKdFl2c/hqdefault.jpg" alt="아이들 - 'Good Thing' M/V 촬영 비하인드 PART 1 [i-talk] #197 | i-dle (아이들)ㅣSUB">
  <div class="card-title">'Good Thing' M/V 촬영 비하인드 PART 1 [i-talk] #197 | i-dle (아이들)ㅣSUB (2025-05-21)</div>
</a>

<a href="https://www.youtube.com/watch?v=b8pFGiXiTjY" target="_blank" class="card" data-category="BEHIND CLIPS" data-member="아이들" data-year="2022">
  <img src="https://i.ytimg.com/vi/b8pFGiXiTjY/hqdefault.jpg" alt="아이들 - (여자)아이들((G)I-DLE) - I-TALK #105 : 'Nxde' 뮤비 촬영 현장 비하인드 Part 1 (ENG/CHN)">
  <div class="card-title">(여자)아이들((G)I-DLE) - I-TALK #105 : 'Nxde' 뮤비 촬영 현장 비하인드 Part 1 (ENG/CHN) (2022-10-22)</div>
</a>

<a href="https://www.youtube.com/watch?v=fAzEh21SXzQ" target="_blank" class="card" data-category="BEHIND CLIPS" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/fAzEh21SXzQ/hqdefault.jpg" alt="아이들 - 'Girlfriend' M/V 촬영 비하인드 [i-talk] #196 | i-dle (아이들)ㅣSUB">
  <div class="card-title">'Girlfriend' M/V 촬영 비하인드 [i-talk] #196 | i-dle (아이들)ㅣSUB (2025-05-13)</div>
</a>
</div>

<div class="card-container" data-category="CHALLENGE">
<a href="https://www.youtube.com/watch?v=ckhm9OtNiZ4" target="_blank" class="card" data-category="CHALLENGE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/ckhm9OtNiZ4/hqdefault.jpg" alt="아이들 - 𝗀𝗂𝗋𝗅𝖿𝗋𝗂𝖾𝗇𝖽 𝗂𝗌 𝖻𝖾𝗍𝗍𝖾𝗋 𝗍𝗁𝖺𝗇 𝖺 𝖻𝗈𝗒𝖿𝗋𝗂𝖾𝗇𝖽 💗">
  <div class="card-title">𝗀𝗂𝗋𝗅𝖿𝗋𝗂𝖾𝗇𝖽 𝗂𝗌 𝖻𝖾𝗍𝗍𝖾𝗋 𝗍𝗁𝖺𝗇 𝖺 𝖻𝗈𝗒𝖿𝗋𝗂𝖾𝗇𝖽 💗 (2025-06-02)</div>
</a>

<a href="https://www.youtube.com/watch?v=Ca9QEEHu2QM" target="_blank" class="card" data-category="CHALLENGE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/Ca9QEEHu2QM/hqdefault.jpg" alt="아이들 - Do the MIYEON Dance on YouTube Shorts ✨">
  <div class="card-title">Do the MIYEON Dance on YouTube Shorts ✨ (2025-06-02)</div>
</a>

<a href="https://www.youtube.com/watch?v=BkuzU-z8DRc" target="_blank" class="card" data-category="CHALLENGE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/BkuzU-z8DRc/hqdefault.jpg" alt="아이들 - 퀸들의 Good Thing 👑✨ with #이영지 #leeyoungji @youngji_2002">
  <div class="card-title">퀸들의 Good Thing 👑✨ with #이영지 #leeyoungji @youngji_2002 (2025-06-01)</div>
</a>
</div>

<div class="card-container" data-category="ETC">
<a href="https://www.youtube.com/watch?v=GaVQsuFKOsg" target="_blank" class="card" data-category="ETC" data-member="아이들" data-year="2023">
  <img src="https://i.ytimg.com/vi/GaVQsuFKOsg/hqdefault.jpg" alt="아이들 - [FULL] 핫한 MV 감독 ✨손승희✨ 원투데이클래스 OPEN💚 ｜GOT7 영재의 친한친구｜MBC 230712 방송">
  <div class="card-title">[FULL] 핫한 MV 감독 ✨손승희✨ 원투데이클래스 OPEN💚 ｜GOT7 영재의 친한친구｜MBC 230712 방송 (2023-07-12)</div>
</a>

<a href="https://www.youtube.com/watch?v=98ewyQ2-GUw" target="_blank" class="card" data-category="ETC" data-member="소연" data-year="2025">
  <img src="https://i.ytimg.com/vi/98ewyQ2-GUw/hqdefault.jpg" alt="소연 - 유연이 말하는 아이들(i-dle) 전소연 SBN 🖤">
  <div class="card-title">유연이 말하는 아이들(i-dle) 전소연 SBN 🖤 (2025-05-31)</div>
</a>
</div>

