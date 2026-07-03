/* =====================================================
   MAIN
   Construtora Renascer
===================================================== */

/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 50);
  });
}

/* =====================================================
   APPLICATION START
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚧 Construtora Renascer");

  console.log("💼 Website by AS Executive Partners");
});
