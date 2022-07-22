"use strict";

const btnHamburger = document.getElementById("checkbox");
const hamburgerNavbar = document.querySelector(".hamburger_navbar");
let hamburgerHide = false;

///////////////////////////////////

function showNavbar() {
  if (btnHamburger.checked) {
    hamburgerNavbar.style.transform = "translateX(0%)";
    document.body.style.overflowY = `hidden`;
  } else {
    hamburgerNavbar.style.transform = "translateX(100%)";
    document.body.style.overflowY = `auto`;
  }
}

/////////////////////////////////

btnHamburger.addEventListener("click", showNavbar);
