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

window.showFilters = showFilters;
window.goBackToCategories = goBackToCategories;
window.goHome = goHome; // ✅ 누락된 goHome 함수 연결
window.filterVideos = filterVideos;
