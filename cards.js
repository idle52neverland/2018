
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("allCards");

  const cardsHTML = `
</a>

<a href="https://www.youtube.com/watch?v=inaLcT_gOS8" target="_blank" class="card" data-category="RADIO" data-member="아이들" data-year="2025">
  <img src="https://i.ytimg.com/vi/inaLcT_gOS8/hqdefault.jpg" alt="아이들 - 컬투쇼">
  <div class="card-title">[FULL] 함께해서 두 배로 즐거웠던 시간🥳 아이들(idle), 조째즈(ZO ZAZZ) 보는 라디오 | 두시탈출 컬투쇼(2025-05-27)</div>
</a>

</div>

<div class="card-container" data-category="MV">
  <a href="https://www.youtube.com/watch?v=8KpvPHcXr1c" target="_blank" class="card" data-category="MV" data-member="민니" data-year="2025">
    <img src="https://i.ytimg.com/vi/8KpvPHcXr1c/hqdefault.jpg" alt="민니 - Blind Eyes Red MV">
    <div class="card-title">민니(MINNIE) - 'Blind Eyes Red' Official Music Video (2025-02-27)</div>
  </a>
  <a href="https://www.youtube.com/watch?v=rTKqSmX9XhQ" target="_blank" class="card" data-category="MV" data-member="아이들" data-year="2025">
    <img src="https://i.ytimg.com/vi/rTKqSmX9XhQ/hqdefault.jpg" alt="(G)I-DLE - Klaxon MV">
    <div class="card-title">(G)I-DLE (여자)아이들 - 'Klaxon' Official Music Video (2025-03-05)</div>
  </a>
</div>
<!-- 이하 생략된 카드들도 모두 같은 방식으로 cardsHTML 내부 문자열로 이어붙입니다. -->

`;

  container.innerHTML = cardsHTML;
});
