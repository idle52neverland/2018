document.addEventListener("DOMContentLoaded", () => {
  const cardData = [
  {
    "category": "RADIO",
    "link": "https://www.youtube.com/watch?v=OorZpjSm7QE",
    "member": "민니",
    "year": "2025",
    "thumbnail": "https://i.ytimg.com/vi/OorZpjSm7QE/hqdefault.jpg",
    "alt": "민니 - 볼륨 초대석",
    "title": "볼륨 초대석 : 최효정의 비밀정원 with 민니 (MINNIE) full ver. / [오마이걸 효정의 볼륨을 높여요] | KBS (2025-01-23)"
  }
];

  const containerMap = {};
  cardData.forEach(data => {
    if (!containerMap[data.category]) {
      const container = document.createElement("div");
      container.className = "card-container";
      container.dataset.category = data.category;
      document.body.appendChild(container);
      containerMap[data.category] = container;
    }

    const card = document.createElement("a");
    card.href = data.link;
    card.target = "_blank";
    card.className = "card";
    card.dataset.category = data.category;
    card.dataset.member = data.member;
    card.dataset.year = data.year;

    card.innerHTML = `
      <img src="${data.thumbnail}" alt="${data.alt}">
      <div class="card-title">${data.title}</div>
    `;

    containerMap[data.category].appendChild(card);
  });
});
