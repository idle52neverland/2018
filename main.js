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

      // 모든 카드 컨테이너 최신순 정렬
      document.querySelectorAll(".card-container").forEach(container => {
        sortCardsByDate(container);
      });

      // 해시가 있을 경우 자동으로 해당 카테고리 열기 (렌더링 후 실행 보장)
      setTimeout(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
          showFilters(hash);
        }
      }, 100);
    });
});

// showFilters 함수 정의 추가
function showFilters(code) {
  const categoryNames = {
    'MV': 'MV & SPECIAL CLIP',
    'LIVE': 'LIVE / COVER SONG / DANCE',
    'MUSIC': 'MUSIC SHOW PERFORMANCE',
    'FESTIVAL': 'FESTIVAL / EVENT STAGE',
    'FANCAM': 'FANCAM & STAGE FOCUS',
    'RECORDING': 'RECORDING / STUDIO BEHIND',
    'PRACTICE': 'DANCE PRACTICE / FANCHANT',
    'TV': 'TV SHOW',
    'YOUTUBE': 'YOUTUBE CONTENTS',
    'REALITY': 'REALITY (Original Content)',
    'RADIO': 'RADIO / PODCAST',
    'LIVE_STREAM': 'LIVE STREAM',
    'INTERVIEW': 'MAGAZINE INTERVIEW',
    'BEHIND': 'BEHIND CLIPS',
    'CHALLENGE': 'CHALLENGE',
    'ETC': 'ETC'
  };

  currentCategory = code;
  document.getElementById('subFilters').style.display = 'flex';
  document.getElementById('categoryBar').classList.add('category-bar-hidden');
  document.getElementById('mainTitle').textContent = categoryNames[code] || code;
  document.querySelector('.social-icons').classList.add('hidden');
  document.querySelectorAll('.card-container').forEach(container => {
    container.style.display = container.dataset.category === code ? 'flex' : 'none';
  });
}
