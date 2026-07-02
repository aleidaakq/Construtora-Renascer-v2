/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle(
    "header--scrolled",

    window.scrollY > 50,
  );
});
const topButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  topButton.classList.toggle(
    "show",

    window.scrollY > 500,
  );
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});
