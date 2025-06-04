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
  link: "https://www.youtube.com/watch?v=hAONx6nuEgI",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=zKfs2EM8LQ4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/zKfs2EM8LQ4/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=UTHqh7Vpa64",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/UTHqh7Vpa64/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=8KpvPHcXr1c",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/8KpvPHcXr1c/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=rTKqSmX9XhQ",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/rTKqSmX9XhQ/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=UqJIBItJeyg",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/UqJIBItJeyg/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=ZqU4oTDy3XE",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/ZqU4oTDy3XE/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=KAymeaEyPr8",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/KAymeaEyPr8/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=6f3RzjXPQwA",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/6f3RzjXPQwA/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=baaNwRAhHBo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/baaNwRAhHBo/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=Iewisp9KYRw",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Iewisp9KYRw/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=pCh3Kp6qxo8",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/pCh3Kp6qxo8/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=7HDeem-JaSY",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/7HDeem-JaSY/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=XZaBkbvteBc",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/XZaBkbvteBc/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=qRrV31S7oO0",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/qRrV31S7oO0/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=fCO7f0SmrDc",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/fCO7f0SmrDc/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=35lirBqwgTs",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/35lirBqwgTs/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=Jh4QFaPmdss",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/Jh4QFaPmdss/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=MqzX9JAZ08U",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/MqzX9JAZ08U/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=AE8yKldv_oo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/AE8yKldv_oo/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=wxDHQT0iBKM",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/wxDHQT0iBKM/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=P62kgQCuxGE",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/P62kgQCuxGE/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=z3szNvgQxHo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/z3szNvgQxHo/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=HPQ5mqovXHo",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/HPQ5mqovXHo/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=om3n2ni8luE",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/om3n2ni8luE/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=6oanIo_2Z4Q",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/6oanIo_2Z4Q/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=ypNJMDlJvY4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/ypNJMDlJvY4/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=I66oFXdf0KU",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/I66oFXdf0KU/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=2cevbhEqQF4",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/2cevbhEqQF4/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=OKNXn2qCEws",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/OKNXn2qCEws/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
},

{
  link: "https://www.youtube.com/watch?v=p4RIhcY7V3c",
  category: "MV-SPECIAL CLIP",
  member: "아이들",
  year: "2025",
  thumbnail: "https://i.ytimg.com/vi/p4RIhcY7V3c/hqdefault.jpg",
  alt: "아이들 - 제목 입력",
  title: "제목 입력 (2025-06-04)"
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
  }
];
 const seenLinks = new Set();
  allCards = allCards.filter(card => {
    if (seenLinks.has(card.link)) return false;
    seenLinks.add(card.link);
    return true;
  });


