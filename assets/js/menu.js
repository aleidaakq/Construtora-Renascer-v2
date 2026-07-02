/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".header__toggle");
const navigation = document.querySelector(".header__nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("header__nav--active");

  menuButton.classList.toggle("is-active");
});
