const burgerBtnOpen = document.querySelector(".burger");
const navigationMobile = document.querySelector(".navigation");
const burgerBtnClose = document.querySelector(".navigation__button");
const opacity = document.querySelector(".opacity");
const navigationLink = document.querySelectorAll(".navigation__link");

function BurgerMenu() {
  burgerBtnClose.classList.toggle("navigation__button-active");
  navigationMobile.classList.toggle("show");
  burgerBtnOpen.classList.toggle("burger__open");
  opacity.classList.toggle("opacity-active");
}

burgerBtnOpen.addEventListener("click", () => {
  BurgerMenu();
});

burgerBtnClose.addEventListener("click", () => {
  BurgerMenu();
});

navigationLink.forEach((a) => {
  a.addEventListener("click", () => {
    BurgerMenu();
  });
});

opacity.addEventListener("click", () => {
  BurgerMenu();
});
