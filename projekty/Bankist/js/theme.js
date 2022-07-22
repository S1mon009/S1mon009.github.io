"use strict";

const icon = document.getElementById("checkbox");
const logo = document.querySelectorAll(".nav_logo");
const header_img = document.querySelector(".header_img");
const imgLazy = document.querySelectorAll(".section_img_lazy");
const balls = document.querySelectorAll(".ball");
const toRight = [
  ["29px", "-50%"],
  ["29px", "-50%"],
  ["29px", "-50%"],
];
const toLeft = [
  ["0px", "-50%"],
  ["0px", "-50%"],
  ["0px", "-50%"],
];
const imgWhite = [
  "img/card.jpg",
  "img/digital.jpg",
  "img/digital.jpg",
  "img/grow.jpg",
];
const imgBlack = [
  "img/card-black.png",
  "img/digital-black.png",
  "img/digital-black.png",
  "img/grow-black.png",
];

////////////////////////////////////////

function changeTheme(ball) {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    logo.forEach((logo) => (logo.src = "img/logo-biale.png"));
    header_img.src = "img/header-img-black.png";
    imgLazy.forEach((img, i) => (img.src = imgBlack[i]));
    balls.forEach((b, i) => (b.style.transform = `translate(${toRight[i]})`));
  } else {
    logo.forEach((logo) => (logo.src = "img/logo-czarne.png"));
    header_img.src = "img/header-img.png";
    imgLazy.forEach((img, i) => (img.src = imgWhite[i]));
    balls.forEach((b, i) => (b.style.transform = `translate(${toLeft[i]})`));
  }
}

//////////////////////////////////////

icon.addEventListener("click", changeTheme);
