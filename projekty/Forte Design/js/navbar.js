"use strict";

const btnNavbar = document.querySelectorAll(".btn_navbar");
const hamburgerOptions = document.querySelector(".products_list");
const hamburgerLinks = document.querySelector(".hamburger_links");
const navbar = document.querySelector(".navbar");
const arrow = document.querySelectorAll(".fa-chevron-down");
let hide = false,
  hideProducts = false,
  interval,
  height = 0;

///////////////////////////////////

function myInterval(upDown) {
  interval = setInterval(function () {
    upDown ? (height += 5) : (height -= 5);
    if (height > 245 || height < 0) {
      clearInterval(interval);
    }
    hamburgerOptions.style.height = `${height}px`;
  }, 1);
}

//////////////////////////////////////

btnNavbar[0].addEventListener("click", function (e) {
  hide = !hide;
  if (hide) {
    navbar.classList.remove("transform");
    arrow[0].classList.add("rotate");
  } else {
    navbar.classList.add("transform");
    arrow[0].classList.remove("rotate");
  }
});

btnNavbar[1].addEventListener("click", function (e) {
  hideProducts = !hideProducts;
  myInterval(hideProducts);
  hideProducts
    ? arrow[1].classList.add("rotate")
    : arrow[1].classList.remove("rotate");
});
