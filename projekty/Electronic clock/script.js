"use strict";
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let hour, minute, second, h, m, s;

function getTime() {
  const today = new Date();
  hour = today.getHours();
  minute = today.getMinutes();
  second = today.getSeconds();
}
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}
async function startTime() {
  for (h = hour; h < 24; h++) {
    for (m = minute; m < 60; m++) {
      for (s = second; s < 60; s++) {
        h < 10 ? (hours.textContent = `0${h}`) : (hours.textContent = h);
        m < 10 ? (minutes.textContent = `0${m}`) : (minutes.textContent = m);
        s < 10 ? (seconds.textContent = `0${s}`) : (seconds.textContent = s);
        await sleep(1000);
      }
      s === 60 ? (second = 0) : (s = s);
    }
    m === 60 ? (minute = 0) : (m = m);
    if (h === 23) {
      h = -1;
      minute = 0;
      second = 0;
    }
  }
}
getTime();
startTime();
