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
    link: "https://www.youtube.com/watch?v=Rf0ajz4PrEg",
    category: "RECORDING BEHIND",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/Rf0ajz4PrEg/hqdefault.jpg",
    alt: "아이들 - i-dle (아이들) 'Girlfriend' Recording BehindㅣSUB (2025-06-03)",
    title: "i-dle (아이들) 'Girlfriend' Recording BehindㅣSUB (2025-06-03)"
  },
  {
    link: "https://www.youtube.com/watch?v=qKvNB3YkxZ8",
    category: "I-SERIES",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/qKvNB3YkxZ8/hqdefault.jpg",
    alt: "아이들 - 아이들, 프로필부터 다시 시작해 볼까요? [네맘대로 아이들] EP. 1 | i-dle (아이들)ㅣSUB (2025-06-05)",
    title: "아이들, 프로필부터 다시 시작해 볼까요? [네맘대로 아이들] EP. 1 | i-dle (아이들)ㅣSUB (2025-06-05)"
  },
  {
    link: "https://www.youtube.com/watch?v=wlnE89SEC4U",
    category: "LIVE-COVER-DANCE",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/wlnE89SEC4U/hqdefault.jpg",
    alt: "아이들 - [4K] 아이들(i-dle) “Good Thing” Band LIVE 전기 맞은 것처럼 계속 귓가에 맴돈다..⚡ [it’s KPOP LIVE 잇츠라이브] (2025-05-26)",
    title: "[4K] 아이들(i-dle) “Good Thing” Band LIVE 전기 맞은 것처럼 계속 귓가에 맴돈다..⚡ [it’s KPOP LIVE 잇츠라이브] (2025-05-26)"
  },
  {
    link: "https://www.youtube.com/watch?v=iXgtOKjLPEE",
    category: "BEHIND CLIPS",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/iXgtOKjLPEE/hqdefault.jpg",
    alt: "아이들 - '컴백 인터뷰' i-dle (아이들) #엠카운트다운 EP.889 | Mnet 250522 방송 (2025-05-22)",
    title: "'컴백 인터뷰' i-dle (아이들) #엠카운트다운 EP.889 | Mnet 250522 방송 (2025-05-22)"
  },
  {
    link: "https://www.youtube.com/watch?v=IG2Ne-GLiMQ",
    category: "MEDIA CONTENTS",
    member: "민니",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/IG2Ne-GLiMQ/hqdefault.jpg",
    alt: "민니 - [ENG/ TH] 용타로 맹신 걸그룹 아이들 민니의 용타로점 결과는? | EP.32 (2025-06-04)",
    title: "[ENG/ TH] 용타로 맹신 걸그룹 아이들 민니의 용타로점 결과는? | EP.32 (2025-06-04)"
  },
  {
    link: "https://www.youtube.com/watch?v=AsjBiO1gsJs",
    category: "RADIO-PODCAST",
    member: "민니,미연",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/AsjBiO1gsJs/hqdefault.jpg",
    alt: "민니,미연 - [FULL] 다시 시작! 2막을 시작하다!!💞 완전체로 돌아온 아이들(i-dle)의 미연, 민니 보는 라디오 | 박소현의 러브게임 | 250601 (2025-06-01)",
    title: "[FULL] 다시 시작! 2막을 시작하다!!💞 완전체로 돌아온 아이들(i-dle)의 미연, 민니 보는 라디오 | 박소현의 러브게임 | 250601 (2025-06-01)"
  },
  {
    link: "https://www.youtube.com/watch?v=-xcOOq9bWYI",
    category: "INTERVIEW",
    member: "아이들",
    year: "2025",
    thumbnail: "https://i.ytimg.com/vi/-xcOOq9bWYI/hqdefault.jpg",
    alt: "아이들 - 얘랑 더 친하다고?? 유치빤스 전쟁 시작된 아이들💔 소연, 미연, 민니, 우기, 슈화의 우정 쟁탈전ㅣ i-dle (아이들) 젤리 텔미 | COSMOPOLITAN KOREA (2025-05-28)",
    title: "얘랑 더 친하다고?? 유치빤스 전쟁 시작된 아이들💔 소연, 미연, 민니, 우기, 슈화의 우정 쟁탈전ㅣ i-dle (아이들) 젤리 텔미 | COSMOPOLITAN KOREA (2025-05-28)"
  }
];

const seenLinks = new Set();
allCards = allCards.filter(card => {
  if (seenLinks.has(card.link)) return false;
  seenLinks.add(card.link);
  return true;
});
