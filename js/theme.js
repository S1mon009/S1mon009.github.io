"use strict";

const icon = document.getElementById("checkbox");
const logo = document.querySelectorAll(".header_logo");
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

////////////////////////////////////////

function changeTheme(ball) {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    logo.forEach((logo) => (logo.src = "img/logo-biale.png"));
    balls.forEach((b, i) => (b.style.transform = `translate(${toRight[i]})`));
  } else {
    logo.forEach((logo) => (logo.src = "img/logo-czarne.png"));
    balls.forEach((b, i) => (b.style.transform = `translate(${toLeft[i]})`));
  }
}

//////////////////////////////////////

icon.addEventListener("click", changeTheme);
