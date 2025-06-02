
document.addEventListener("DOMContentLoaded", () => {
  // 카드 HTML 불러오기
  fetch("cards.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("cardContainer").innerHTML = html;

      // 정렬 함수
      function extractDate(text) {
        const match = text.match(/\((\d{4})-(\d{2})-(\d{2})\)/);
        return match ? new Date(match[1], match[2] - 1, match[3]) : new Date(0);
      }

      function sortCardsByDate(container) {
        const cards = Array.from(container.querySelectorAll(".card"));
        cards.sort((a, b) => {
          const dateA = extractDate(a.querySelector(".card-title").textContent);
          const dateB = extractDate(b.querySelector(".card-title").textContent);
          return dateB - dateA;
        });
        cards.forEach(card => container.appendChild(card));
      }

      // 정렬 적용
      document.querySelectorAll(".card-container").forEach(container => {
        container.style.display = "flex"; // 항상 보이게
        sortCardsByDate(container);
      });

      // 검색 기능
      const subInput = document.getElementById("subSearchInput");
      if (subInput) {
        subInput.addEventListener("input", () => {
          const term = subInput.value.trim().toLowerCase();
          const container = document.querySelector(`.card-container[data-category="\${currentCategory}"]`);
          if (!container) return;

          container.querySelectorAll(".card").forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            card.style.display = title.includes(term) ? "block" : "none";
          });
        });
      }
    });
});
