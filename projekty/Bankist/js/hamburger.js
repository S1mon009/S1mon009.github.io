"use strict";

const hamburger = document.getElementById("checkboxH");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
let switchMenu = true;

/////////////////////////////////////////

hamburger.addEventListener("click", function () {
  if (switchMenu) {
    navbar.style.transform = "translateX(0%)";
    body.style.overflowY = "hidden";
    switchMenu = !switchMenu;
  } else {
    navbar.style.transform = "translateX(100%)";
    body.style.overflowY = "auto";
    switchMenu = !switchMenu;
  }
});
