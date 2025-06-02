
document.addEventListener("DOMContentLoaded", () => {
  const loadHTML = async (id, file) => {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
    if (id === "subFilters") {
      document.dispatchEvent(new Event("filtersLoaded"));
    }
  };

  loadHTML("socialIcons", "social.html");
  loadHTML("categoryBar", "category.html");
  loadHTML("subFilters", "filters.html");
  loadHTML("cardContainer", "cards.html");

  // filters.html 로딩 완료 후 해시 처리
  document.addEventListener("filtersLoaded", () => {
    if (location.hash && location.hash.length > 1) {
      const hash = location.hash.substring(1); // #TV → TV
      showFilters(hash);
    }
  });

  // 검색 버튼 클릭 이벤트
  window.triggerSubSearch = function () {
    const input = document.getElementById('subSearchInput');
    if (!input) return;
    const term = input.value.toLowerCase();
    const container = document.querySelector(`.card-container[data-category="${currentCategory}"]`);
    if (!container) return;
    container.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      card.style.display = title.includes(term) ? 'block' : 'none';
    });
  };

  window.currentCategory = '';

  window.showFilters = function(code) {
    currentCategory = code;
    const subFilters = document.getElementById('subFilters');
    if (subFilters) subFilters.style.display = 'flex';
    document.getElementById('categoryBar').classList.add('category-bar-hidden');
    document.getElementById('mainTitle').textContent = code;
    document.querySelector('.social-icons').classList.add('hidden');
    document.querySelectorAll('.card-container').forEach(container => {
      container.style.display = container.dataset.category === code ? 'flex' : 'none';
    });
    const container = document.querySelector(`.card-container[data-category="${code}"]`);
    if (container) sortCardsByDate(container);
    history.pushState({ category: code }, '', `#${code}`);
  };

  window.filterVideos = function(type, value) {
    const container = document.querySelector(`.card-container[data-category="${currentCategory}"]`);
    const cards = Array.from(container.querySelectorAll('.card'));
    cards.forEach(card => {
      const match = card.dataset[type] === value;
      card.style.display = match ? 'block' : 'none';
    });
  };

  function extractDate(text) {
    const match = text.match(/\((\d{4})-(\d{2})-(\d{2})\)/);
    return match ? new Date(match[1], match[2] - 1, match[3]) : new Date(0);
  }

  function sortCardsByDate(container) {
    const cards = Array.from(container.querySelectorAll('.card'));
    cards.sort((a, b) => {
      const dateA = extractDate(a.querySelector('.card-title').textContent);
      const dateB = extractDate(b.querySelector('.card-title').textContent);
      return dateB - dateA;
    });
    cards.forEach(card => container.appendChild(card));
  }

  window.onpopstate = function () {
    document.getElementById('subFilters').style.display = 'none';
    document.getElementById('categoryBar').classList.remove('category-bar-hidden');
    document.getElementById('mainTitle').textContent = 'I-DLE 몰아보기';
    document.querySelector('.social-icons').classList.remove('hidden');
    document.querySelectorAll('.card-container').forEach(container => {
      container.style.display = 'none';
    });
  };
});
