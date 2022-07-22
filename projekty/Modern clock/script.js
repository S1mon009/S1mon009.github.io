"user strict";

const today = new Date();
const clock = document.querySelector(".clock");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const eHours = document.querySelector(".eHours");
const eMinutes = document.querySelector(".eMinutes");
const eSeconds = document.querySelector(".eSeconds");

let newDiv;
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
function createDiv() {
  for (let i = 0; i < 11; i++) {
    newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="hourTable" style="transform: rotate(${
      i * 30
    }deg)"><div class="whitePart"></div>
    <div class="blackPart"></div>
    <div class="whitePart"></div></div>`;
    clock.appendChild(newDiv);
  }
  for (let i = 0; i < 60; i++) {
    newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="minuteTable" style="transform: rotate(${
      i * 6
    }deg)">
    <div class="whitePart"></div>
    <div class="blackPart"></div>
    <div class="whitePart"></div>
  </div>`;
    clock.appendChild(newDiv);
  }
}
setInterval(function () {
  eHours.textContent =
    new Date().getHours() < 10
      ? `0${new Date().getHours()}`
      : new Date().getHours();
  eMinutes.textContent =
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes();
  eSeconds.textContent =
    new Date().getSeconds() < 10
      ? `0${new Date().getSeconds()}`
      : new Date().getSeconds();
  hours.style.transform = `rotateZ(${hour * (360 / 12)}deg)`;
  minutes.style.transform = `rotateZ(${(minute * 360) / 60}deg)`;
  seconds.style.transform = `rotateZ(${(second * 360) / 60}deg)`;
  second++;
  if (second % 60 === 0) {
    minute++;
  }
  if (minute % 60 === 0) {
    hour++;
    minute++;
  }
}, 1000);
createDiv();
