import "../sass/style.scss";
import slider from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
  try {
    if (window.screen.width >= 480) {
      document.querySelector(".header__title").innerHTML = "warm heart";
    } else {
      document.querySelector(".header__title").innerHTML = "wh";
    }
    if (window.screen.width >= 768) {
      document
        .querySelectorAll(".footer__menu__item__submenu")
        .forEach((item) => (item.style.display = "block"));
    } else {
      const menu = document.querySelectorAll(".footer__menu__item"),
        submenu = document.querySelectorAll(".footer__menu__item__submenu");

      menu.forEach((item, index) => {
        item.addEventListener("click", () => {
          submenu.forEach((subitem, subindex) => {
            if (subindex === index) {
              if (subitem.style.display === "block") {
                subitem.style.display = "none";
              } else {
                subitem.style.display = "block";
              }
            } else {
              subitem.style.display = "none";
            }
          });
        });
      });
    }
  } catch (e) {}
  try {
    if (window.screen.width >= 1920) {
      const items = document.querySelectorAll(".button-add");
      items.forEach((item) => {
        item.classList.remove("icon-shopping-bag");
        item.innerHTML = "Add to cart";
      });
    }
  } catch (e) {}
  try {
    slider({
      wrapperSelector: ".head__slider__wrapper",
      itemSelector: ".head__slider__item",
      paginationSelector: ".head__slider__pagination",
      dotsSelector: ".head__slider__dot",
    });
    slider({
      wrapperSelector: ".popular__slider__wrapper",
      itemSelector: ".popular__slider__item",
      paginationSelector: ".popular__slider__pagination",
      dotsSelector: ".popular__slider__dot",
    });
  } catch (e) {}
});
