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
 [
  {
    "link": "https://www.youtube.com/watch?v=hAONx6nuEgI",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2025",
    "thumbnail": "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
    "alt": "아이들 - i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)",
    "title": "i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)"
  },
  {
    "link": "https://www.youtube.com/watch?v=zKfs2EM8LQ4",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2025",
    "thumbnail": "https://i.ytimg.com/vi/zKfs2EM8LQ4/hqdefault.jpg",
    "alt": "아이들 - i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)",
    "title": "i-dle (아이들) 'Girlfriend' Official Music Video (2025-05-08)"
  },
  {
    "link": "https://www.youtube.com/watch?v=UTHqh7Vpa64",
    "category": "MV-SPECIAL CLIP",
    "member": "민니",
    "year": "2025",
    "thumbnail": "https://i.ytimg.com/vi/UTHqh7Vpa64/hqdefault.jpg",
    "alt": "민니 - 민니(MINNIE) - 'HER' Official Music Video (2025-01-21)",
    "title": "민니(MINNIE) - 'HER' Official Music Video (2025-01-21)"
  },
  {
    "link": "https://www.youtube.com/watch?v=8KpvPHcXr1c",
    "category": "MV-SPECIAL CLIP",
    "member": "민니",
    "year": "2025",
    "thumbnail": "https://i.ytimg.com/vi/8KpvPHcXr1c/hqdefault.jpg",
    "alt": "민니 - 민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-01-06)",
    "title": "민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-01-06)"
  },
  {
    "link": "https://www.youtube.com/watch?v=rTKqSmX9XhQ",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2024",
    "thumbnail": "https://i.ytimg.com/vi/rTKqSmX9XhQ/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Official Music Video (2024-07-08)",
    "title": "(여자)아이들((G)I-DLE) - '클락션 (Klaxon)' Official Music Video (2024-07-08)"
  },
  {
    "link": "https://www.youtube.com/watch?v=UqJIBItJeyg",
    "category": "MV-SPECIAL CLIP",
    "member": "우기",
    "year": "2024",
    "thumbnail": "https://i.ytimg.com/vi/UqJIBItJeyg/hqdefault.jpg",
    "alt": "우기 - 우기(YUQI) - 'FREAK' Official Music Video (2024-04-23)",
    "title": "우기(YUQI) - 'FREAK' Official Music Video (2024-04-23)"
  },
  {
    "link": "https://www.youtube.com/watch?v=ZqU4oTDy3XE",
    "category": "MV-SPECIAL CLIP",
    "member": "우기",
    "year": "2024",
    "thumbnail": "https://i.ytimg.com/vi/ZqU4oTDy3XE/hqdefault.jpg",
    "alt": "우기 - 우기(YUQI) - 'Could It Be' Official Music Video (2024-04-05)",
    "title": "우기(YUQI) - 'Could It Be' Official Music Video (2024-04-05)"
  },
  {
    "link": "https://www.youtube.com/watch?v=KAymeaEyPr8",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2024",
    "thumbnail": "https://i.ytimg.com/vi/KAymeaEyPr8/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Revenge' Official Music Video (2024-02-15)",
    "title": "(여자)아이들((G)I-DLE) - 'Revenge' Official Music Video (2024-02-15)"
  },
  {
    "link": "https://www.youtube.com/watch?v=6f3RzjXPQwA",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2024",
    "thumbnail": "https://i.ytimg.com/vi/6f3RzjXPQwA/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Super Lady' Official Music Video (2024-01-29)",
    "title": "(여자)아이들((G)I-DLE) - 'Super Lady' Official Music Video (2024-01-29)"
  },
  {
    "link": "https://www.youtube.com/watch?v=baaNwRAhHBo",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2024",
    "thumbnail": "https://i.ytimg.com/vi/baaNwRAhHBo/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Wife' Official Music Video (2024-01-21)",
    "title": "(여자)아이들((G)I-DLE) - 'Wife' Official Music Video (2024-01-21)"
  },
  {
    "link": "https://www.youtube.com/watch?v=Iewisp9KYRw",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2023",
    "thumbnail": "https://i.ytimg.com/vi/Iewisp9KYRw/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'I Want That' Official Music Video (2023-10-06)",
    "title": "(여자)아이들((G)I-DLE) - 'I Want That' Official Music Video (2023-10-06)"
  },
  {
    "link": "https://www.youtube.com/watch?v=pCh3Kp6qxo8",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2023",
    "thumbnail": "https://i.ytimg.com/vi/pCh3Kp6qxo8/hqdefault.jpg",
    "alt": "아이들 - (G)I-DLE - I DO (Official Music Video) (2023-07-14)",
    "title": "(G)I-DLE - I DO (Official Music Video) (2023-07-14)"
  },
  {
    "link": "https://www.youtube.com/watch?v=7HDeem-JaSY",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2023",
    "thumbnail": "https://i.ytimg.com/vi/7HDeem-JaSY/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video (2023-05-15)",
    "title": "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video (2023-05-15)"
  },
  {
    "link": "https://www.youtube.com/watch?v=XZaBkbvteBc",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2023",
    "thumbnail": "https://i.ytimg.com/vi/XZaBkbvteBc/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Allergy' Official Music Video (2023-05-09)",
    "title": "(여자)아이들((G)I-DLE) - 'Allergy' Official Music Video (2023-05-09)"
  },
  {
    "link": "https://www.youtube.com/watch?v=qRrV31S7oO0",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2022",
    "thumbnail": "https://i.ytimg.com/vi/qRrV31S7oO0/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE), Steve Aoki - 'Nxde (Steve Aoki Remix)' Visualizer (2022-12-16)",
    "title": "(여자)아이들((G)I-DLE), Steve Aoki - 'Nxde (Steve Aoki Remix)' Visualizer (2022-12-16)"
  },
  {
    "link": "https://www.youtube.com/watch?v=fCO7f0SmrDc",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2022",
    "thumbnail": "https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Nxde' Official Music Video (2022-10-17)",
    "title": "(여자)아이들((G)I-DLE) - 'Nxde' Official Music Video (2022-10-17)"
  },
  {
    "link": "https://www.youtube.com/watch?v=35lirBqwgTs",
    "category": "MV-SPECIAL CLIP",
    "member": "미연",
    "year": "2022",
    "thumbnail": "https://i.ytimg.com/vi/35lirBqwgTs/hqdefault.jpg",
    "alt": "미연 - 미연 (MIYEON) - 'Drive' Official Music Video (2022-04-27)",
    "title": "미연 (MIYEON) - 'Drive' Official Music Video (2022-04-27)"
  },
  {
    "link": "https://www.youtube.com/watch?v=Jh4QFaPmdss",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2022",
    "thumbnail": "https://i.ytimg.com/vi/Jh4QFaPmdss/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'TOMBOY' Official Music Video (2022-03-14)",
    "title": "(여자)아이들((G)I-DLE) - 'TOMBOY' Official Music Video (2022-03-14)"
  },
  {
    "link": "https://www.youtube.com/watch?v=MqzX9JAZ08U",
    "category": "MV-SPECIAL CLIP",
    "member": "소연",
    "year": "2021",
    "thumbnail": "https://i.ytimg.com/vi/MqzX9JAZ08U/hqdefault.jpg",
    "alt": "소연 - 전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Official Music Video (2021-07-05)",
    "title": "전소연(JEON SOYEON) - '삠삠 (BEAM BEAM)' Official Music Video (2021-07-05)"
  },
  {
    "link": "https://www.youtube.com/watch?v=AE8yKldv_oo",
    "category": "MV-SPECIAL CLIP",
    "member": "우기",
    "year": "2021",
    "thumbnail": "https://i.ytimg.com/vi/AE8yKldv_oo/hqdefault.jpg",
    "alt": "우기 - 우기 (YUQI) - 'Bonnie & Clyde' Official Music Video (2021-05-20)",
    "title": "우기 (YUQI) - 'Bonnie & Clyde' Official Music Video (2021-05-20)"
  },
  {
    "link": "https://www.youtube.com/watch?v=wxDHQT0iBKM",
    "category": "MV-SPECIAL CLIP",
    "member": "우기",
    "year": "2021",
    "thumbnail": "https://i.ytimg.com/vi/wxDHQT0iBKM/hqdefault.jpg",
    "alt": "우기 - 우기 (YUQI) - 'Giant' Official Music Video (2021-05-13)",
    "title": "우기 (YUQI) - 'Giant' Official Music Video (2021-05-13)"
  },
  {
    "link": "https://www.youtube.com/watch?v=P62kgQCuxGE",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2021",
    "thumbnail": "https://i.ytimg.com/vi/P62kgQCuxGE/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE), Dimitri Vegas & Like Mike - 'HWAA (Dimitri Vegas & Like Mike Remix)' Official M/V (2021-02-05)",
    "title": "(여자)아이들((G)I-DLE), Dimitri Vegas & Like Mike - 'HWAA (Dimitri Vegas & Like Mike Remix)' Official M/V (2021-02-05)"
  },
  {
    "link": "https://www.youtube.com/watch?v=z3szNvgQxHo",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2021",
    "thumbnail": "https://i.ytimg.com/vi/z3szNvgQxHo/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - '화(火花)(HWAA)' Official Music Video (2021-01-11)",
    "title": "(여자)아이들((G)I-DLE) - '화(火花)(HWAA)' Official Music Video (2021-01-11)"
  },
  {
    "link": "https://www.youtube.com/watch?v=HPQ5mqovXHo",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2020",
    "thumbnail": "https://i.ytimg.com/vi/HPQ5mqovXHo/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' Official Music Video (2020-08-03)",
    "title": "(여자)아이들((G)I-DLE) - '덤디덤디 (DUMDi DUMDi)' Official Music Video (2020-08-03)"
  },
  {
    "link": "https://www.youtube.com/watch?v=om3n2ni8luE",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2020",
    "thumbnail": "https://i.ytimg.com/vi/om3n2ni8luE/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Oh my god' Official Music Video (2020-04-06)",
    "title": "(여자)아이들((G)I-DLE) - 'Oh my god' Official Music Video (2020-04-06)"
  },
  {
    "link": "https://www.youtube.com/watch?v=6oanIo_2Z4Q",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2019",
    "thumbnail": "https://i.ytimg.com/vi/6oanIo_2Z4Q/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'LION' Official Music Video (2019-11-03)",
    "title": "(여자)아이들((G)I-DLE) - 'LION' Official Music Video (2019-11-03)"
  },
  {
    "link": "https://www.youtube.com/watch?v=ypNJMDlJvY4",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2019",
    "thumbnail": "https://i.ytimg.com/vi/ypNJMDlJvY4/hqdefault.jpg",
    "alt": "아이들 - (G)I-DLE - 「LATATA」(Japanese ver.) MUSIC VIDEO (2019-07-11)",
    "title": "(G)I-DLE - 「LATATA」(Japanese ver.) MUSIC VIDEO (2019-07-11)"
  },
  {
    "link": "https://www.youtube.com/watch?v=I66oFXdf0KU",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2019",
    "thumbnail": "https://i.ytimg.com/vi/I66oFXdf0KU/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Uh-Oh' Official Music Video (2019-06-26)",
    "title": "(여자)아이들((G)I-DLE) - 'Uh-Oh' Official Music Video (2019-06-26)"
  },
  {
    "link": "https://www.youtube.com/watch?v=2cevbhEqQF4",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2019",
    "thumbnail": "https://i.ytimg.com/vi/2cevbhEqQF4/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'Senorita' Official Music Video (2019-02-26)",
    "title": "(여자)아이들((G)I-DLE) - 'Senorita' Official Music Video (2019-02-26)"
  },
  {
    "link": "https://www.youtube.com/watch?v=OKNXn2qCEws",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2018",
    "thumbnail": "https://i.ytimg.com/vi/OKNXn2qCEws/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' Official Music Video (2018-08-14)",
    "title": "(여자)아이들((G)I-DLE) - '한(一)(HANN(Alone))' Official Music Video (2018-08-14)"
  },
  {
    "link": "https://www.youtube.com/watch?v=p4RIhcY7V3c",
    "category": "MV-SPECIAL CLIP",
    "member": "아이들",
    "year": "2018",
    "thumbnail": "https://i.ytimg.com/vi/p4RIhcY7V3c/hqdefault.jpg",
    "alt": "아이들 - (여자)아이들((G)I-DLE) - 'LATATA' Official Music Video (2018-05-02)",
    "title": "(여자)아이들((G)I-DLE) - 'LATATA' Official Music Video (2018-05-02)"
  }
];
 const seenLinks = new Set();
  allCards = allCards.filter(card => {
    if (seenLinks.has(card.link)) return false;
    seenLinks.add(card.link);
    return true;
  });


