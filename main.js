
document.addEventListener("DOMContentLoaded", () => {
  // 카드 HTML 불러오기
  fetch("cards.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("cardContainer").innerHTML = html;

      // 카드 불러온 다음 검색 기능 연결
      const subInput = document.getElementById("subSearchInput");
      if (subInput) {
        subInput.addEventListener("input", () => {
          const term = subInput.value.trim().toLowerCase();
          const container = document.querySelector(`.card-container[data-category="${currentCategory}"]`);
          if (!container) return;

          container.querySelectorAll(".card").forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            card.style.display = title.includes(term) ? "block" : "none";
          });
        });
      }
    });
});
