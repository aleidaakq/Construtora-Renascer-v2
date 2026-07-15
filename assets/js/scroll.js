/* =====================================================
   SCROLL
   Header + Back to Top
===================================================== */

function initScroll() {
  const header = document.querySelector(".header");
  const topButton = document.querySelector(".back-to-top");

  if (!header && !topButton) return;

  function updateScroll() {
    const scrollPosition = window.scrollY;

    if (header) {
      header.classList.toggle("header--scrolled", scrollPosition > 50);
    }

    if (topButton) {
      topButton.classList.toggle("show", scrollPosition > 500);
    }
  }

  window.addEventListener("scroll", updateScroll, {
    passive: true,
  });

  updateScroll();

  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", initScroll);
