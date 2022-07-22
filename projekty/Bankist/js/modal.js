"use strict";

const createAccountModal = document.querySelector(".createAccount");
const login = document.querySelector(".login");
const backgroundOverlay = document.querySelector(".background_overlay");
const btnsSignUp = document.querySelectorAll(".btn_sign_up");
const btnCloseSignUp = document.querySelector(".btn_close_sign_up");
const btnLogin = document.querySelectorAll(".btn_login");
const btnCloseLogin = document.querySelector(".btn_close_login");

//////////////////////////////////////

function openModals(element) {
  element.classList.remove("hidden");
  backgroundOverlay.classList.remove("hidden");
}

function closeModals(element) {
  element.classList.add("hidden");
  backgroundOverlay.classList.add("hidden");
}

function overlayHide() {
  backgroundOverlay.classList.add("hidden");
  login.classList.add("hidden");
  createAccountModal.classList.add("hidden");
}

////////////////////////////////////////

btnsSignUp.forEach((btn) =>
  btn.addEventListener(
    "click",
    function (event) {
      openModals(createAccountModal);
      event.preventDefault();
    },
    true
  )
);
btnLogin.forEach((btn) =>
  btn.addEventListener(
    "click",
    function (event) {
      openModals(login);
      event.preventDefault();
    },
    true
  )
);

btnCloseSignUp.addEventListener("click", function () {
  closeModals(createAccountModal);
});

// btnLogin.addEventListener("click", function (event) {
//   openModals(login);
//   event.preventDefault();
// });

btnCloseLogin.addEventListener("click", function (event) {
  closeModals(login);
  event.preventDefault();
});

backgroundOverlay.addEventListener("click", overlayHide);

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !createAccountModal.classList.contains("hidden")) ||
    (e.key === "Escape" && !login.classList.contains("hidden"))
  ) {
    overlayHide();
  }
});
