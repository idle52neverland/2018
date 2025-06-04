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
  }
  {
  "link": "https://www.youtube.com/watch?v=PtB5JoGXUQ8",
  "category": "MV-SPECIAL CLIP",
  "member": "아이들",
  "year": "2018",
  "thumbnail": "https://i.ytimg.com/vi/PtB5JoGXUQ8/hqdefault.jpg",
  "alt": "아이들 - 20180602 001 (여자)아이들 입장 고양스타필드 팬사인회(180602) (2018-06-03)",
  "title": "20180602 001 (여자)아이들 입장 고양스타필드 팬사인회(180602) (2018-06-03)"
},
{
  "link": "https://www.youtube.com/watch?v=h97f1iv-kJU",
  "category": "MV-SPECIAL CLIP",
  "member": "소연",
  "year": "2018",
  "thumbnail": "https://i.ytimg.com/vi/h97f1iv-kJU/hqdefault.jpg",
  "alt": "소연 - 20180602 002 (여자)아이들(소연) 팬사인중 고양스타필드 팬사인회(180602) (2018-06-03)",
  "title": "20180602 002 (여자)아이들(소연) 팬사인중 고양스타필드 팬사인회(180602) (2018-06-03)"
},
{
  "link": "https://www.youtube.com/watch?v=0kv1LxNnZGY",
  "category": "MV-SPECIAL CLIP",
  "member": "아이들",
  "year": "2018",
  "thumbnail": "https://i.ytimg.com/vi/0kv1LxNnZGY/hqdefault.jpg",
  "alt": "아이들 - 20180602 004 (여자)아이들 마무리인사 고양스타필드 팬사인회(180602) (2018-06-03)",
  "title": "20180602 004 (여자)아이들 마무리인사 고양스타필드 팬사인회(180602) (2018-06-03)"
},
{
  "link": "https://www.youtube.com/watch?v=9M1XzHWv_gk",
  "category": "MV-SPECIAL CLIP",
  "member": "우기",
  "year": "2018",
  "thumbnail": "https://i.ytimg.com/vi/9M1XzHWv_gk/hqdefault.jpg",
  "alt": "우기 - 20180602 003 (여자)아이들(우기) 팬사인중 고양스타필드 팬사인회(180602) (2018-06-04)",
  "title": "20180602 003 (여자)아이들(우기) 팬사인중 고양스타필드 팬사인회(180602) (2018-06-04)"
}
];
 const seenLinks = new Set();
  allCards = allCards.filter(card => {
    if (seenLinks.has(card.link)) return false;
    seenLinks.add(card.link);
    return true;
  });

