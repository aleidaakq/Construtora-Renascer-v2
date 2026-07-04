/* =====================================================
   MOBILE MENU
===================================================== */

function initMenu() {
  const menuButton = document.querySelector(".header__toggle");
  const navigation = document.querySelector(".header__nav");
  const menuLinks = document.querySelectorAll(".header__menu a");

  if (!menuButton || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("header__nav--active");

    menuButton.classList.remove("is-active");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute("aria-label", "Abrir menu");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("header__nav--active");

    menuButton.classList.toggle("is-active", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
}

document.addEventListener("DOMContentLoaded", initMenu);
