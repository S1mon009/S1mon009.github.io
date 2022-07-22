"use strict";

const themeContainer = document.querySelector(".theme");
const icon = document.querySelector(".fa-gear");
const logo = document.querySelector(".logo");
const colors = [
  ["#1f1f38", "#4eb5fb"],
  ["#191a1d", "#ff531b"],
  ["#02140a", "#5ec576"],
];
const classValue = ["root", "black-orange", "black-green"];
let hide = false;
////////////////////////////////////////////////////////

function displayThemes() {
  for (let i = 0; i < classValue.length; i++) {
    const color = colors[i];
    const html = `<div class="theme_value" data-theme="${classValue[i]}" style="background-image: linear-gradient(45deg, ${color[0]} 50%, ${color[1]} 50%);">
    </div>`;
    themeContainer.insertAdjacentHTML("beforeend", html);
  }
}
displayThemes();

/////////////////////////////////////////////////////

themeContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("theme_value")) {
    document.body.className = "";
    const themeValue = e.target.dataset.theme;
    localStorage.setItem("themeColor", themeValue);
    document.body.classList.add(localStorage.getItem("themeColor"));
  }
});
icon.addEventListener("click", function (e) {
  e.preventDefault();
  hide = !hide;
  if (hide) {
    themeContainer.classList.remove("hide");
  } else {
    themeContainer.classList.add("hide");
  }
});

///////////////////////////////////////////////////

document.body.classList.add(localStorage.getItem("themeColor"));
