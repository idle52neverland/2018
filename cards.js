document.addEventListener("DOMContentLoaded", function () {
  const allCardsContainer = document.getElementById("allCards");
  let currentCategory = null;
  let currentCards = [];

  const allCards = [
    // 실제 카드: MV-SPECIAL CLIP
    {
      category: "MV-SPECIAL CLIP",
      member: "아이들",
      year: "2025",
      title: "i-dle (아이들) 'Good Thing' Official Music Video (2025-05-19)",
      url: "https://www.youtube.com/watch?v=hAONx6nuEgI",
      thumbnail: "https://i.ytimg.com/vi/hAONx6nuEgI/hqdefault.jpg",
      alt: "아이들 - i-dle (아이들) 'Good Thing' Official Music Video"
    }
  ];

  // 최신순 정렬 (기본)
  allCards.sort((a, b) => {
    const getDate = str => str.match(/\((\d{4}-\d{2}-\d{2})\)/)?.[1] || "0000-00-00";
    return new Date(getDate(b.title)) - new Date(getDate(a.title));
  });

  window.showFilters = function (category) {
    currentCategory = category;
    document.getElementById("mainTitle").style.display = "none";
    document.querySelector(".category-title").textContent = category;
    document.querySelector(".category-title").style.display = "block";

    const filterArea = document.querySelector(".filter-buttons");
    filterArea.style.display = "flex";

    allCardsContainer.innerHTML = "";
    allCardsContainer.style.display = "flex";

    currentCards = allCards.filter(card => card.category === category);
    renderCards(currentCards);
  };

    currentCards = allCards.filter(card => card.category === category);
    renderCards(currentCards);
  };

  window.filterVideos = function (tag) {
    const filtered = currentCards.filter(card => card.year === tag || card.member === tag);
    renderCards(filtered);
  };

  window.handleSearch = function () {
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    const filtered = currentCards.filter(card => card.title.toLowerCase().includes(keyword));
    renderCards(filtered);
  };

  function renderCards(cards) {
    allCardsContainer.innerHTML = "";
    allCardsContainer.style.display = "flex";

    if (cards.length === 0) {
      allCardsContainer.innerHTML = "<p style='color: #888;'>아직 영상이 없습니다.</p>";
      return;
    }

    cards.forEach(data => {
      const card = document.createElement("a");
      card.href = data.url;
      card.target = "_blank";
      card.className = "card";
      card.setAttribute("data-category", data.category);
      card.setAttribute("data-member", data.member);
      card.setAttribute("data-year", data.year);
      card.innerHTML = `
        <img src="${data.thumbnail}" alt="${data.alt}">
        <div class="card-title">${data.title}</div>
      `;
      allCardsContainer.appendChild(card);
    });
  }
});
