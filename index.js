document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "0.3s";
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  });
});

const footerText = document.querySelector("footer p");
if (footerText) {
  const year = new Date().getFullYear();
  footerText.innerHTML = `© ${year} BSIT Department. All rights reserved.`;
}
