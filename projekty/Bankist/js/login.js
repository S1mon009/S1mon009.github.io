"use strict";

const inputLogInLogin = document.querySelector(".logInAccountLogin");
const inputLogInPIN = document.querySelector(".logInAccountPIN");
const btnLogIn = document.querySelector(".btnLogInAccount");
const container = document.querySelector(".container");
const userPanel = document.querySelector(".user-panel");
const loadingDiv = document.querySelector(".loading");
const containerLogin = document.querySelector(".login");
let interval = 0;

////////////////////////////////////

function checkData(Login, pin) {
  for (let i = 0; i < accountNumber; i++) {
    if (accounts[i].login === Login && accounts[i].PIN === pin) {
      currentAccount = accounts[i];
      currentAccount.loginHistory.push(new Date());
      container.classList.toggle("none");
      userPanel.classList.toggle("none");
      inputLogInLogin.value = inputLogInPIN.value = "";
      containerLogin.classList.add("hidden");
      document.body.style.overflowY = "auto";
      update();
      startLoadingInterval();
      break;
    } else if (i === accountNumber) {
      inputLogInLogin.style.border = inputLogInPIN.style.border =
        "1px solid red";
      inputLogInLogin.style.animation = inputLogInPIN.style.animation =
        "0.1s error linear";
      alert("Wrong login or PIN.");
      break;
    }
  }
}
function startLoadingInterval() {
  const loadingInterval = setInterval(function () {
    if (interval < 3) {
      interval++;
    } else {
      loadingDiv.style.position = "relative";
      loadingDiv.style.display = "none";
      interval = 0;
      clearInterval(loadingInterval);
    }
  }, 1000);
}

////////////////////////////////////////

btnLogIn.addEventListener("click", function (e) {
  e.preventDefault();
  checkData(inputLogInLogin.value, Number(inputLogInPIN.value));
});
