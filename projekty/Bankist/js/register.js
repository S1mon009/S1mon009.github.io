"use strict";

const inputFullName = document.querySelector(".createAccountName");
const inputLogin = document.querySelector(".createAccountLogin");
const inputPIN = document.querySelector(".createAccountPIN");
const inputLocale = document.querySelector(".createAccountCurrency");
const inputAvatar = document.querySelector(".createAccountAvatar");
const btnCreateAccount = document.querySelector(".btnCreateAccount");
let currency;
const nb = /[0-9]/g;
let accountNumber = 2;

////////////////////////////////////

function createAccount(name, login, pin, locale, Avatar) {
  if (locale === "pl-PL") {
    currency = "PLN";
  } else if (locale === "en-US") {
    currency = "USD";
  } else if (locale === "de-DE") {
    currency = "EUR";
  }
  accounts[accountNumber] = {
    Name: name,
    login: login,
    PIN: pin,
    locale: locale,
    currency: currency,
    loans: 0,
    avatar: Avatar,
    loginHistory: [],
    movements: [],
    movementsDates: [],
  };
  console.log(accounts);
  accountNumber++;
}
function checkIfExist(pin) {
  for (let i = 0; i < accountNumber; i++) {
    if (accounts[i].PIN === pin) {
      return true;
    }
  }
}

//////////////////////////////////////

btnCreateAccount.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputFullName.value === "") {
    inputFullName.style.border = "1px solid red";
    inputFullName.style.animation = "0.1s error linear ";
  }
  if (inputLogin.value === "") {
    inputLogin.style.border = "1px solid red";
    inputLogin.style.animation = "0.1s error linear ";
  }
  if (inputPIN.value === "" || inputPIN.value.match(nb) === false) {
    inputPIN.style.border = "1px solid red";
    inputPIN.style.animation = "0.1s error linear ";
  }
  if (checkIfExist(inputPIN.value)) {
    inputPIN.style.border = "1px solid red";
    inputPIN.style.animation = "0.1s error linear ";
    alert("That PIN is already exist");
  }
  if (inputAvatar.value === "") {
    inputAvatar.style.border = "1px solid red";
    inputAvatar.style.animation = "0.1s error linear ";
  } else {
    createAccount(
      inputFullName.value,
      inputLogin.value,
      Number(inputPIN.value),
      inputLocale.value,
      inputAvatar.value
    );
    inputFullName.value = inputLogin.value = inputPIN.value = "";
    alert("Account succesfull created.");
  }
});
