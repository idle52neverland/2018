document.addEventListener("DOMContentLoaded", () => {
  fetch("cards.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("cardContainer").innerHTML = html;
    });
});
