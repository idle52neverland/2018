
const allCardsData = [
  {
    category: "MV / SPECIAL CLIP",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=video1",
        thumbnail: "https://i.ytimg.com/vi/video1/hqdefault.jpg",
        title: "MV Title 1 (2025-06-01)",
        member: "아이들",
        year: "2025",
      },
      {
        url: "https://www.youtube.com/watch?v=video2",
        thumbnail: "https://i.ytimg.com/vi/video2/hqdefault.jpg",
        title: "MV Title 2 (2024-12-10)",
        member: "소연",
        year: "2024",
      },
    ],
  },
  {
    category: "YOUTUBE CONTENTS",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=video3",
        thumbnail: "https://i.ytimg.com/vi/video3/hqdefault.jpg",
        title: "YouTube Content Title 1 (2025-05-20)",
        member: "민니",
        year: "2025",
      },
      {
        url: "https://www.youtube.com/watch?v=video4",
        thumbnail: "https://i.ytimg.com/vi/video4/hqdefault.jpg",
        title: "YouTube Content Title 2 (2023-09-15)",
        member: "슈화",
        year: "2023",
      },
    ],
  }
];

function createCardElement(video) {
  const a = document.createElement("a");
  a.href = video.url;
  a.target = "_blank";
  a.className = "card";
  a.setAttribute("data-category", video.category);
  a.setAttribute("data-member", video.member);
  a.setAttribute("data-year", video.year);

  const img = document.createElement("img");
  img.src = video.thumbnail;
  img.alt = video.title;

  const div = document.createElement("div");
  div.className = "card-title";
  div.textContent = video.title;

  a.appendChild(img);
  a.appendChild(div);

  return a;
}

function renderAllCards() {
  const allCardsContainer = document.getElementById("allCards");
  allCardsContainer.innerHTML = "";

  allCardsData.forEach(group => {
    const container = document.createElement("div");
    container.className = "card-container";
    container.setAttribute("data-category", group.category);

    group.videos.forEach(video => {
      const card = createCardElement({ ...video, category: group.category });
      container.appendChild(card);
    });

    allCardsContainer.appendChild(container);
  });
}

window.onload = renderAllCards;
