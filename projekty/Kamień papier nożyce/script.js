"use strict";

const userChoose = document.querySelector(".userChoose");
const comChoose = document.querySelector(".comChoose");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const history = document.querySelector(".history");

const btnAgain = document.querySelector(".btnAgain");
const btn = document.querySelectorAll(".btn");

const arrayResult = ["🔴", "🟡", "🟢"];
let arrayHistory;
let arrayScore;
const arrayUser = ["rockU.png", "scissorsU.png", "paperU.png"];
const arrayCom = ["rockC.png", "scissorsC.png", "paperC.png"];

function reset() {
  arrayHistory = [];
  arrayScore = [0, 0];
  score.textContent = `0 - 0`;
  result.style.background = `#222`;
  history.textContent = "";
  userChoose.innerHTML = ``;
  comChoose.innerHTML = ``;
  for (let i = 0; i < btn.length; i++) {
    btn[i].disabled = false;
  }
}
function randomNr() {
  return Math.trunc(Math.random() * 3);
}
function displayResult() {
  if (arrayScore[0] === 3) {
    score.textContent = `Winner!`;
    disabled();
  } else if (arrayScore[1] === 3) {
    score.textContent = `Loser!`;
    disabled();
  } else {
    score.textContent = `${arrayScore.join(" - ")}`;
  }
}
function displayHistory() {
  history.textContent = arrayHistory.join("");
}
function disabled() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].disabled = true;
  }
}
function game(user, com) {
  userChoose.innerHTML = `<img src="img/${arrayUser[user]}">`;
  comChoose.innerHTML = `<img src="img/${arrayCom[com]}">`;
  if (
    (user === 0 && com === 1) ||
    (user === 1 && com === 2) ||
    (user === 2 && com === 0)
  ) {
    result.style.background = `#16c60c`;
    arrayScore[0]++;
    arrayHistory.push(arrayResult[2]);
  } else if (user === com) {
    result.style.background = `#fff100`;
    arrayHistory.push(arrayResult[1]);
  } else {
    result.style.background = `#e81224`;
    arrayScore[1]++;
    arrayHistory.push(arrayResult[0]);
  }
}

reset();

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    game(Number(btn[i].value), randomNr());
    displayResult();
    displayHistory();
  });
}

btnAgain.addEventListener("click", function () {
  reset();
});
