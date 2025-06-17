import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
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

  if (window.screen.width >= 480) {
    document.querySelector(".header__title").innerHTML = "warm heart";
  } else {
    document.querySelector(".header__title").innerHTML = "wh";
  }
});
