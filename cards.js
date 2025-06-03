
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
  const normalize = (str) => str.replace(/\s+/g, ' ').trim();

  currentCategory = category;
  mainTitle.style.display = "none";
  categoryTitle.innerText = category;
  categoryTitle.style.display = "block";
  categoryBar.classList.add("category-bar-hidden");
  subFilters.style.display = "flex";
  searchWrapper.style.display = "flex";
  socialIcons.classList.add("hidden");

  allCardsContainer.innerHTML = "";

  const matched = allCards.filter(card => normalize(card.dataset.category) === normalize(category));

  const sorted = matched.sort((a, b) => {
    const da = a.querySelector(".card-title").innerText.match(/\((\d{4}-\d{2}-\d{2})\)/);
    const db = b.querySelector(".card-title").innerText.match(/\((\d{4}-\d{2}-\d{2})\)/);
    return db && da ? new Date(db[1]) - new Date(da[1]) : 0;
  });

  const tempContainer = document.createElement("div");
  tempContainer.className = "card-container";
  tempContainer.dataset.category = category;
  tempContainer.style.display = "flex";
  allCardsContainer.appendChild(tempContainer);

  sorted.slice(0, 6).forEach(card => {
    tempContainer.appendChild(card.cloneNode(true));
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

  displayInitialCards();
}

function goHome() {
  goBackToCategories();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterVideos(type, value) {
  currentFilters[type] = value;
  applyFilters();
}

function applyFilters() {
  const query = searchInput.value.toLowerCase();

  if (!currentCategory && query) {
    allCardsContainer.innerHTML = "";
    const tempContainer = document.createElement("div");
    tempContainer.className = "card-container";
    tempContainer.style.display = "flex";
    allCardsContainer.appendChild(tempContainer);

    const filtered = allCards.filter(card => {
      const title = card.querySelector(".card-title").innerText.toLowerCase();
      return title.includes(query);
    });

    filtered.forEach(card => tempContainer.appendChild(card.cloneNode(true)));
  } else if (currentCategory) {
    const container = document.querySelector(`.card-container[data-category="${currentCategory}"]`);
    if (!container) return;

    const cards = Array.from(container.children);
    cards.forEach(card => {
      const title = card.querySelector(".card-title").innerText.toLowerCase();
      const year = card.dataset.year;
      const member = card.dataset.member;

      const matchesQuery = !query || title.includes(query);
      const matchesYear = !currentFilters.year || currentFilters.year === year;
      const matchesMember = !currentFilters.member || currentFilters.member === member;

      card.style.display = (matchesQuery && matchesYear && matchesMember) ? "block" : "none";
    });
  }
}

function displayInitialCards() {
  allCardsContainer.innerHTML = "";
  const tempContainer = document.createElement("div");
  tempContainer.className = "card-container";
  tempContainer.style.display = "flex";
  allCardsContainer.appendChild(tempContainer);

  const sorted = [...allCards].sort((a, b) => {
    const da = a.querySelector(".card-title").innerText.match(/\((\d{4}-\d{2}-\d{2})\)/);
    const db = b.querySelector(".card-title").innerText.match(/\((\d{4}-\d{2}-\d{2})\)/);
    return db && da ? new Date(db[1]) - new Date(da[1]) : 0;
  });

  sorted.slice(0, 6).forEach(card => {
    tempContainer.appendChild(card.cloneNode(true));
  });
}

searchInput.addEventListener("input", applyFilters);

const cardHTML = `
<a href="https://www.youtube.com/watch?v=IF23qT7CYUc" target="_blank" class="card" data-category="MUSIC SHOW PERFORMANCE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/IF23qT7CYUc/hqdefault.jpg" alt="아이들 - Girlfriend - I-dle (아이들) [뮤직뱅크/Music Bank] | KBS 250523 방송">
  <div class="card-title">Girlfriend - I-dle (아이들) [뮤직뱅크/Music Bank] | KBS 250523 방송 (2025-05-23)</div>
</a>

<a href="https://www.youtube.com/watch?v=8bguFz5ns3w" target="_blank" class="card" data-category="FESTIVAL / EVENT STAGE" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/8bguFz5ns3w/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Girlfriend' @ HANYANG UNIVERSITY ERICA">
  <div class="card-title">i-dle (아이들) 'Girlfriend' @ HANYANG UNIVERSITY ERICA (2025-05-30)</div>
</a>

<a href="https://www.youtube.com/watch?v=lgDo7ZUoyZ8" target="_blank" class="card" data-category="FANCAM / STAGE FOCUS" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/lgDo7ZUoyZ8/hqdefault.jpg" alt="아이들 - [MPD직캠] 아이들 직캠 8K 'Good Thing' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22">
  <div class="card-title">[MPD직캠] 아이들 직캠 8K 'Good Thing' (i-dle FanCam) | @MCOUNTDOWN_2025.5.22 (2025-05-22)</div>
</a>

<a href="https://www.youtube.com/watch?v=Ly5SxYH5OhI" target="_blank" class="card" data-category="RECORDING / STUDIO BEHIND" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/Ly5SxYH5OhI/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Good Thing' Recording BehindㅣSUB">
  <div class="card-title">i-dle (아이들) 'Good Thing' Recording BehindㅣSUB (2025-05-27)</div>
</a>

<a href="https://www.youtube.com/watch?v=pKCaXYYwGjw" target="_blank" class="card" data-category="DANCE PRACTICE / FANCHANT" data-member="아이들" data-year="2023">
  <img src="https://i.ytimg.com/vi/pKCaXYYwGjw/hqdefault.jpg" alt="아이들 - (여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Choreography Practice Video">
  <div class="card-title">(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Choreography Practice Video (2023-05-21)</div>
</a>

<a href="https://www.youtube.com/watch?v=YNp9IR8EkTY" target="_blank" class="card" data-category="TV SHOW" data-member="아이들" data-year="2021">
  <img src="https://i.ytimg.com/vi/YNp9IR8EkTY/hqdefault.jpg" alt="아이들 - [EN/JP] 내가 댄스배틀을 어떻게 해..">
  <div class="card-title">[EN/JP] 내가 댄스배틀을 어떻게 해.. (2021-12-22)</div>
</a>
`;


document.addEventListener("DOMContentLoaded", () => {
  const temp = document.createElement("div");
  temp.innerHTML = cardHTML.trim();
  const cardElements = temp.querySelectorAll(".card");

  cardElements.forEach(card => {
    allCards.push(card);
  });

  displayInitialCards();
});

window.showFilters = showFilters;
window.goBackToCategories = goBackToCategories;
window.goHome = goHome;
window.filterVideos = filterVideos;
