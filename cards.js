const allCardsContainer = document.getElementById("allCards");
let allCards = [];
let currentCategory = "";
let currentCards = [];

window.showFilters = function (category) {
  currentCategory = category;
  document.getElementById("mainTitle").style.display = "none";
  document.querySelector(".category-title").textContent = category;
  document.querySelector(".category-title").style.display = "block";
  document.getElementById("filterArea").style.display = "flex";

  allCardsContainer.innerHTML = "";
  allCardsContainer.style.display = "flex";

  currentCards = allCards.filter(card => card.category === category);
  renderCards(currentCards);
};

window.filterVideos = function (filter) {
  const filtered = currentCards.filter(card =>
    card.title.includes(filter) ||
    card.member.includes(filter) ||
    card.year.includes(filter)
  );
  renderCards(filtered);
};

window.handleSearch = function () {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = currentCards.filter(card =>
    card.title.toLowerCase().includes(keyword) ||
    card.member.toLowerCase().includes(keyword) ||
    card.year.includes(keyword)
  );
  renderCards(filtered);
};

window.goBack = function () {
  document.getElementById("mainTitle").style.display = "block";
  document.querySelector(".category-title").style.display = "none";
  document.getElementById("filterArea").style.display = "none";
  allCardsContainer.innerHTML = "";
  allCardsContainer.style.display = "none";
};

window.goHome = function () {
  document.getElementById("searchInput").value = "";
  goBack();
};

function renderCards(cards) {
  allCardsContainer.innerHTML = cards.map(card => `
    <a href="${card.link}" target="_blank" class="card" data-category="${card.category}" data-member="${card.member}" data-year="${card.year}">
      <img src="${card.thumbnail}" alt="${card.alt}" />
      <div class="card-title">${card.title}</div>
    </a>
  `).join("");
}

allCards = [
  {
    link: "https://www.youtube.com/watch?v=hAONx6nuEgI",
    category: "MV-SPECIAL CLIP",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
    alt: "아이들 - i-dle (아이들) 'Good Thing' Official Music Video",
    title: "i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)"
  },
  {
    link: "https://www.youtube.com/watch?v=SuMnpTc8zoU",
    category: "LIVE-COVER-DANCE",
    member: "아이들",
    year: "2022",
    thumbnail: "https://i.ytimg.com/vi/SuMnpTc8zoU/hqdefault.jpg",
    alt: "아이들 - (여자)아이들((G)I-DLE) - '말리지 마' LIVE CLIP",
    title: "(여자)아이들((G)I-DLE) - '말리지 마' LIVE CLIP (2022-04-07)"
  },
  {
    link: "https://www.youtube.com/watch?v=B_4WoSrUuZA",
    category: "MUSIC SHOW PERFORMANCE",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/B_4WoSrUuZA/hqdefault.jpg",
    alt: "아이들 - i-dle (아이들) - Good Thing | SBS 250601 방송",
    title: "i-dle (아이들) - Good Thing | SBS 250601 방송 (2025-06-01)"
  },
  {
    link: "https://www.youtube.com/watch?v=4H3T8MEnsdg",
    category: "FESTIVAL EVENT STAGE",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/4H3T8MEnsdg/hqdefault.jpg",
    alt: "아이들 - i-dle (아이들) 'TOMBOY' @ MYONGJI UNIVERSITY",
    title: "i-dle (아이들) 'TOMBOY' @ MYONGJI UNIVERSITY (2025-05-28)"
  },
  {
    link: "https://www.youtube.com/watch?v=lgDo7ZUoyZ8",
    category: "FANCAM-STAGE FOCUS",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/lgDo7ZUoyZ8/hqdefault.jpg",
    alt: "아이들 - [MPD직캠] 아이들 직캠 8K 'Good Thing' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22",
    title: "[MPD직캠] 아이들 직캠 8K 'Good Thing' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22 (2025-05-22)"
  },
  {
    link: "https://www.youtube.com/watch?v=Ly5SxYH5OhI",
    category: "RECORDING STUDIO BEHIND",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/Ly5SxYH5OhI/hqdefault.jpg",
    alt: "아이들 - i-dle (아이들) 'Good Thing' Recording BehindㅣSUB",
    title: "i-dle (아이들) 'Good Thing' Recording BehindㅣSUB (2025-05-27)"
  },
  {
    link: "https://www.youtube.com/watch?v=R9UsmrVEWYY",
    category: "DANCE PRACTICE-FANCHANT",
    member: "아이들",
    year: "2022",
    thumbnail: "https://i.ytimg.com/vi/R9UsmrVEWYY/hqdefault.jpg",
    alt: "아이들 - (여자)아이들((G)I-DLE) - 'Nxde' (Choreography Practice Video)",
    title: "(여자)아이들((G)I-DLE) - 'Nxde' (Choreography Practice Video) (2022-10-23)"
  },
  {
    link: "https://www.youtube.com/watch?v=Hd8m6Ly7xFk",
    category: "TV SHOW",
    member: "소연",
    year: "2022",
    thumbnail: "https://i.ytimg.com/vi/Hd8m6Ly7xFk/hqdefault.jpg",
    alt: "소연 - [방과후설렘] 서낳괴 전소연이 서바이벌 프로듀서가 되면 벌어지는 일",
    title: "[방과후설렘] 서낳괴 전소연이 서바이벌 프로듀서가 되면 벌어지는 일 mp4. (2022-02-24)"
  },
  // 결과 1 ~ 31
{
  link: "https://www.youtube.com/watch?v=hAONx6nuEgI",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)",
  title: "i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)"
},
{
  link: "https://www.youtube.com/watch?v=zKfs2EM8LQ4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/zKfs2EM8LQ4/hqdefault.jpg",
  alt: "아이들 - i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)",
  title: "i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)"
},
{
  link: "https://www.youtube.com/watch?v=UTHqh7Vpa64",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/UTHqh7Vpa64/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'HER' Official Music Video (2025-01-21)",
  title: "민니(MINNIE) - 'HER' Official Music Video (2025-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=8KpvPHcXr1c",
  category: "MV-SPECIAL CLIP",
  member: "민니",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/8KpvPHcXr1c/hqdefault.jpg",
  alt: "민니 - 민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-01-06)",
  title: "민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-01-06)"
},
{
  link: "https://www.youtube.com/watch?v=rTKqSmX9XhQ",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/rTKqSmX9XhQ/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Official Music Video (2024-07-08)",
  title: "(여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Official Music Video (2024-07-08)"
},
{
  link: "https://www.youtube.com/watch?v=UqJIBItJeyg",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/UqJIBItJeyg/hqdefault.jpg",
  alt: "우기 - 우기(YUQI) - 'FREAK' Official Music Video (2024-04-23)",
  title: "우기(YUQI) - 'FREAK' Official Music Video (2024-04-23)"
},
{
  link: "https://www.youtube.com/watch?v=ZqU4oTDy3XE",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/ZqU4oTDy3XE/hqdefault.jpg",
  alt: "우기 - 우기(YUQI) - 'Could It Be' Official Music Video (2024-04-05)",
  title: "우기(YUQI) - 'Could It Be' Official Music Video (2024-04-05)"
},
{
  link: "https://www.youtube.com/watch?v=KAymeaEyPr8",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/KAymeaEyPr8/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Revenge' Official Music Video (2024-02-15)",
  title: "(여자)아이들((G)I-DLE) - 'Revenge' Official Music Video (2024-02-15)"
},
{
  link: "https://www.youtube.com/watch?v=6f3RzjXPQwA",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/6f3RzjXPQwA/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Super Lady' Official Music Video (2024-01-29)",
  title: "(여자)아이들((G)I-DLE) - 'Super Lady' Official Music Video (2024-01-29)"
},
{
  link: "https://www.youtube.com/watch?v=baaNwRAhHBo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2024",
  thumbnail: "https://i.ytimg.com/vi/baaNwRAhHBo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Wife' Official Music Video (2024-01-21)",
  title: "(여자)아이들((G)I-DLE) - 'Wife' Official Music Video (2024-01-21)"
},
{
  link: "https://www.youtube.com/watch?v=Iewisp9KYRw",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/Iewisp9KYRw/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'I Want That' Official Music Video (2023-10-06)",
  title: "(여자)아이들((G)I-DLE) - 'I Want That' Official Music Video (2023-10-06)"
},
{
  link: "https://www.youtube.com/watch?v=pCh3Kp6qxo8",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pCh3Kp6qxo8/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE - I DO (Official Music Video) (2023-07-14)",
  title: "(G)I-DLE - I DO (Official Music Video) (2023-07-14)"
},
{
  link: "https://www.youtube.com/watch?v=7HDeem-JaSY",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/7HDeem-JaSY/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video (2023-05-15)",
  title: "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video (2023-05-15)"
},
{
  link: "https://www.youtube.com/watch?v=XZaBkbvteBc",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/XZaBkbvteBc/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Allergy' Official Music Video (2023-05-09)",
  title: "(여자)아이들((G)I-DLE) - 'Allergy' Official Music Video (2023-05-09)"
},
{
  link: "https://www.youtube.com/watch?v=qRrV31S7oO0",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/qRrV31S7oO0/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE), Steve Aoki - 'Nxde (Steve Aoki Remix)' Visualizer (2022-12-16)",
  title: "(여자)아이들((G)I-DLE), Steve Aoki - 'Nxde (Steve Aoki Remix)' Visualizer (2022-12-16)"
},
{
  link: "https://www.youtube.com/watch?v=fCO7f0SmrDc",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Nxde' Official Music Video (2022-10-17)",
  title: "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video (2022-10-17)"
},
{
  link: "https://www.youtube.com/watch?v=35lirBqwgTs",
  category: "MV-SPECIAL CLIP",
  member: "미연",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/35lirBqwgTs/hqdefault.jpg",
  alt: "미연 - 미연 (MIYEON) - 'Drive' Official Music Video (2022-04-27)",
  title: "미연 (MIYEON) - 'Drive' Official Music Video (2022-04-27)"
},
{
  link: "https://www.youtube.com/watch?v=Jh4QFaPmdss",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2022",
  thumbnail: "https://i.ytimg.com/vi/Jh4QFaPmdss/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'TOMBOY' Official Music Video (2022-03-14)",
  title: "(여자)아이들((G)I-DLE) - 'TOMBOY' Official Music Video (2022-03-14)"
},
{
  link: "https://www.youtube.com/watch?v=MqzX9JAZ08U",
  category: "MV-SPECIAL CLIP",
  member: "소연",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/MqzX9JAZ08U/hqdefault.jpg",
  alt: "소연 - 전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Official Music Video (2021-07-05)",
  title: "전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Official Music Video (2021-07-05)"
},
{
  link: "https://www.youtube.com/watch?v=AE8yKldv_oo",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/AE8yKldv_oo/hqdefault.jpg",
  alt: "우기 - 우기 (YUQI) - 'Bonnie & Clyde' Official Music Video (2021-05-20)",
  title: "우기 (YUQI) - 'Bonnie & Clyde' Official Music Video (2021-05-20)"
},
{
  link: "https://www.youtube.com/watch?v=wxDHQT0iBKM",
  category: "MV-SPECIAL CLIP",
  member: "우기",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/wxDHQT0iBKM/hqdefault.jpg",
  alt: "우기 - 우기 (YUQI) - 'Giant' Official Music Video (2021-05-13)",
  title: "우기 (YUQI) - 'Giant' Official Music Video (2021-05-13)"
},
{
  link: "https://www.youtube.com/watch?v=P62kgQCuxGE",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/P62kgQCuxGE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE), Dimitri Vegas & Like Mike - 'HWAA (Dimitri Vegas & Like Mike Remix)' Official M/V (2021-02-05)",
  title: "(여자)아이들((G)I-DLE), Dimitri Vegas & Like Mike - 'HWAA (Dimitri Vegas & Like Mike Remix)' Official M/V (2021-02-05)"
},
{
  link: "https://www.youtube.com/watch?v=z3szNvgQxHo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2021",
  thumbnail: "https://i.ytimg.com/vi/z3szNvgQxHo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '화(火花)(HWAA)' Official Music Video (2021-01-11)",
  title: "(여자)아이들((G)I-DLE) - '화(火花)(HWAA)' Official Music Video (2021-01-11)"
},
{
  link: "https://www.youtube.com/watch?v=HPQ5mqovXHo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/HPQ5mqovXHo/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' Official Music Video (2020-08-03)",
  title: "(여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' Official Music Video (2020-08-03)"
},
{
  link: "https://www.youtube.com/watch?v=om3n2ni8luE",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2020",
  thumbnail: "https://i.ytimg.com/vi/om3n2ni8luE/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Oh my god' Official Music Video (2020-04-06)",
  title: "(여자)아이들((G)I-DLE) - 'Oh my god' Official Music Video (2020-04-06)"
},
{
  link: "https://www.youtube.com/watch?v=6oanIo_2Z4Q",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/6oanIo_2Z4Q/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'LION' Official Music Video (2019-11-03)",
  title: "(여자)아이들((G)I-DLE) - 'LION' Official Music Video (2019-11-03)"
},
{
  link: "https://www.youtube.com/watch?v=ypNJMDlJvY4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/ypNJMDlJvY4/hqdefault.jpg",
  alt: "아이들 - (G)I-DLE - 「LATATA」(Japanese ver.) MUSIC VIDEO (2019-07-11)",
  title: "(G)I-DLE - 「LATATA」(Japanese ver.) MUSIC VIDEO (2019-07-11)"
},
{
  link: "https://www.youtube.com/watch?v=I66oFXdf0KU",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/I66oFXdf0KU/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Uh-Oh' Official Music Video (2019-06-26)",
  title: "(여자)아이들((G)I-DLE) - 'Uh-Oh' Official Music Video (2019-06-26)"
},
{
  link: "https://www.youtube.com/watch?v=2cevbhEqQF4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2019",
  thumbnail: "https://i.ytimg.com/vi/2cevbhEqQF4/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'Senorita' Official Music Video (2019-02-26)",
  title: "(여자)아이들((G)I-DLE) - 'Senorita' Official Music Video (2019-02-26)"
},
{
  link: "https://www.youtube.com/watch?v=OKNXn2qCEws",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/OKNXn2qCEws/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' Official Music Video (2018-08-14)",
  title: "(여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' Official Music Video (2018-08-14)"
},
{
  link: "https://www.youtube.com/watch?v=p4RIhcY7V3c",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/p4RIhcY7V3c/hqdefault.jpg",
  alt: "아이들 - (여자)아이들((G)I-DLE) - 'LATATA' Official Music Video (2018-05-02)",
  title: "(여자)아이들((G)I-DLE) - 'LATATA' Official Music Video (2018-05-02)"
},
{
  link: "https://www.youtube.com/watch?v=C1ITPFPt1do",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/C1ITPFPt1do/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] ★특별편성★ | 네가 알던 내가 아냐 (ENG/CHN) | (G)I-DLE INSIDE | (여자)아이들 ((G)I-DLE) (2023-08-23)",
  title: "[(G)맘대로 아이들] ★특별편성★ | 네가 알던 내가 아냐 (ENG/CHN) | (G)I-DLE INSIDE | (여자)아이들 ((G)I-DLE) (2023-08-23)"
},
{
  link: "https://www.youtube.com/watch?v=4vY76usk3fk",
  category: "ORIGINAL CONTENTS",
  member: "슈화",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/4vY76usk3fk/hqdefault.jpg",
  alt: "슈화 - [(G)맘대로 아이들] ★특별편성★ | 슈화 없는(?) 슈화쇼 (ENG/CHN) | SHUHUA SHOW | (여자)아이들 ((G)I-DLE) (2023-08-16)",
  title: "[(G)맘대로 아이들] ★특별편성★ | 슈화 없는(?) 슈화쇼 (ENG/CHN) | SHUHUA SHOW | (여자)아이들 ((G)I-DLE) (2023-08-16)"
},
{
  link: "https://www.youtube.com/watch?v=-eWlNDLUAkI",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/-eWlNDLUAkI/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] ★특별편성★ | [속보] (여자)아이들, \"항시적으로 네버랜드 생각뿐\" (ENG/CHN) | (G)I-DLE NEWS | (여자)아이들 ((G)I-DLE) (2023-08-09)",
  title: "[(G)맘대로 아이들] ★특별편성★ | [속보] (여자)아이들, \"항시적으로 네버랜드 생각뿐\" (ENG/CHN) | (G)I-DLE NEWS | (여자)아이들 ((G)I-DLE) (2023-08-09)"
},
{
  link: "https://www.youtube.com/watch?v=rwtUR5moRgQ",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/rwtUR5moRgQ/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] ★특별편성★ TEASER | 열렬한.성원에.힘입어.돌아왔읍니다...^^ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-08-02)",
  title: "[(G)맘대로 아이들] ★특별편성★ TEASER | 열렬한.성원에.힘입어.돌아왔읍니다...^^ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-08-02)"
},
{
  link: "https://www.youtube.com/watch?v=uvEYX0MSs1s",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/uvEYX0MSs1s/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.08 긴장해. 케이팝 기강 잡으러 온다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-14)",
  title: "[(G)맘대로 아이들] EP.08 긴장해. 케이팝 기강 잡으러 온다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-14)"
},
{
  link: "https://www.youtube.com/watch?v=ar1ZMNKDbKI",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/ar1ZMNKDbKI/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.07 특 시키면 일단 함 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-12)",
  title: "[(G)맘대로 아이들] EP.07 특 시키면 일단 함 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-12)"
},
{
  link: "https://www.youtube.com/watch?v=MfTv2OX4Nz4",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/MfTv2OX4Nz4/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.06 흥 없다면서요... | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-07)",
  title: "[(G)맘대로 아이들] EP.06 흥 없다면서요... | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-07)"
},
{
  link: "https://www.youtube.com/watch?v=PwsQ30b-A-k",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/PwsQ30b-A-k/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.05 다음 컴백의 운명은...?! | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-05)",
  title: "[(G)맘대로 아이들] EP.05 다음 컴백의 운명은...?! | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-04-05)"
},
{
  link: "https://www.youtube.com/watch?v=QFCP_VVQMgg",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/QFCP_VVQMgg/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.04 포지션 뺏으러 왔습니다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-31)",
  title: "[(G)맘대로 아이들] EP.04 포지션 뺏으러 왔습니다. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-31)"
},
{
  link: "https://www.youtube.com/watch?v=r0MrzKxPqxw",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/r0MrzKxPqxw/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.03 대환장 주주총회 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-29)",
  title: "[(G)맘대로 아이들] EP.03 대환장 주주총회 | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-29)"
},
{
  link: "https://www.youtube.com/watch?v=4bDBfsBCjFg",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/4bDBfsBCjFg/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.02 매니저 그만두겠습니다.. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-24)",
  title: "[(G)맘대로 아이들] EP.02 매니저 그만두겠습니다.. | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-24)"
},
{
  link: "https://www.youtube.com/watch?v=HU6K3TV2AdQ",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/HU6K3TV2AdQ/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] EP.01 이게...맞냐...? | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-22)",
  title: "[(G)맘대로 아이들] EP.01 이게...맞냐...? | 2023 컴백 세미나 (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-22)"
},
{
  link: "https://www.youtube.com/watch?v=pKMhyV1HiqE",
  category: "ORIGINAL CONTENTS",
  member: "아이들",
  year: "2023",
  thumbnail: "https://i.ytimg.com/vi/pKMhyV1HiqE/hqdefault.jpg",
  alt: "아이들 - [(G)맘대로 아이들] TEASER ★2023 컴백 세미나★ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-17)",
  title: "[(G)맘대로 아이들] TEASER ★2023 컴백 세미나★ (ENG/CHN) | (여자)아이들 ((G)I-DLE) (2023-03-17)"
},
{
  link: "https://youtu.be/MbHVHQstS9w?si=B1pxfhMoshPo-Icg",
  category: "YOUTUBE CONTENTS",
  member: "우기",
  year: "2018",
  thumbnail: "https://i.ytimg.com/vi/MbHVHQstS9w/hqdefault.jpg",
  alt: "아이들 - 아이돌 연습생이 노래를 들어 달라고 한다면? 반전 목소리네 꼭 데뷔했으면 좋겠다 | 세상의 온도 |우기 (2018-02-27)",
  title: "아이돌 연습생이 노래를 들어 달라고 한다면? 반전 목소리네 꼭 데뷔했으면 좋겠다 | 세상의 온도 | (2018-02-27)"
}



];
 const seenLinks = new Set();
  allCards = allCards.filter(card => {
    if (seenLinks.has(card.link)) return false;
    seenLinks.add(card.link);
    return true;
  });

