/* =====================================================
   SCROLL
   Header + Back to Top
===================================================== */

const header = document.querySelector(".header");
const topButton = document.querySelector(".back-to-top");

/* =====================================================
   SCROLL EVENTS
===================================================== */

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Header
  if (header) {
    header.classList.toggle("header--scrolled", scrollPosition > 50);
  }

  // Botão voltar ao topo
  if (topButton) {
    topButton.classList.toggle("show", scrollPosition > 500);
  }
});

/* =====================================================
   BACK TO TOP
===================================================== */

if (topButton) {
  topButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
