/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".header__toggle");
const navigation = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".header__menu a");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("header__nav--active");
    menuButton.classList.toggle("is-active");
  });

  // Fecha o menu ao clicar em um link
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("header__nav--active");
      menuButton.classList.remove("is-active");
    });
  });

  // Fecha o menu ao voltar para o desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      navigation.classList.remove("header__nav--active");
      menuButton.classList.remove("is-active");
    }
  });
}
