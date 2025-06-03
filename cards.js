
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("allCards");

  const cardsHTML = `
<!-- 아래에 사용자 제공 카드 HTML 전체가 들어갑니다 -->
<div class="card-container" data-category="MV / SPECIAL CLIP">
  <a href="https://www.youtube.com/watch?v=hAONx6nuEgI" target="_blank" class="card" data-category="MV / SPECIAL CLIP" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg" alt="아이들 - i-dle (아이들) 'Good Thing' Official Music Video">
    <div class="card-title">i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)</div>
  </a>
  <!-- ... 생략 없이 전체 카드 HTML 삽입됨 ... -->
</div>
<!-- 모든 card-container 끝 -->
`;

  container.innerHTML = cardsHTML;

  document.getElementById("subSearchInput")?.addEventListener("input", filterResults);
});

function showFilters(category) {
  document.getElementById("mainTitle").innerText = category;
  document.getElementById("categoryBar").classList.add("category-bar-hidden");
  document.getElementById("subFilters").style.display = "flex";

  const containers = document.querySelectorAll(".card-container");
  containers.forEach(c => {
    if (c.dataset.category === category) {
      c.style.display = "flex";
    } else {
      c.style.display = "none";
    }
  });

  filterResults();
}

function filterVideos(type, value) {
  const currentCategory = document.getElementById("mainTitle").innerText;
  const currentContainer = [...document.querySelectorAll(".card-container")].find(
    c => c.dataset.category === currentCategory
  );
  if (!currentContainer) return;

  const cards = currentContainer.querySelectorAll(".card");
  cards.forEach(card => {
    const cardValue = card.dataset[type];
    const searchText = document.getElementById("subSearchInput").value.toLowerCase();
    const title = card.innerText.toLowerCase();

    const matchesSearch = title.includes(searchText);
    const matchesFilter = cardValue === value;

    card.style.display = matchesFilter && matchesSearch ? "block" : "none";
  });
}

function filterResults() {
  const searchText = document.getElementById("subSearchInput").value.toLowerCase();

  const currentCategory = document.getElementById("mainTitle").innerText;
  const currentContainer = [...document.querySelectorAll(".card-container")].find(
    c => c.dataset.category === currentCategory
  );
  if (!currentContainer) return;

  const cards = currentContainer.querySelectorAll(".card");
  cards.forEach(card => {
    const cardYear = card.dataset.year;
    const cardMember = card.dataset.member;
    const title = card.innerText.toLowerCase();

    const matchesSearch = title.includes(searchText);

    card.style.display = matchesSearch ? "block" : "none";
  });
}

function goBackToCategories() {
  document.getElementById("mainTitle").innerText = "I-DLE 몰아보기";
  document.getElementById("categoryBar").classList.remove("category-bar-hidden");
  document.getElementById("subFilters").style.display = "none";

  document.querySelectorAll(".card-container").forEach(c => {
    c.style.display = "none";
  });

  document.querySelectorAll(".card").forEach(c => {
    c.style.display = "block";
  });

  document.getElementById("subSearchInput").value = "";
  document.querySelectorAll(".filter-btn.active").forEach(btn => btn.classList.remove("active"));
}
