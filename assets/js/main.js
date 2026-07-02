/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});
/* =====================================================
   MAIN
===================================================== */

console.log("Construtora Renascer");

console.log("Website by AS Executive Partners");
