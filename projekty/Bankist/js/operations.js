"use strict";

const operationsBtns = document.querySelectorAll(".section_btn");
const operationsContener = document.querySelector(".section_btns");
const operationsContent = document.querySelectorAll(".btns_description");

///////////////////////////////////////

operationsContener.addEventListener("click", function (e) {
  const click = e.target.closest(".section_btn");

  if (!click) return;

  operationsBtns.forEach((op) => op.classList.remove("btn_active"));
  operationsContent.forEach((opc) => opc.classList.add("none"));

  click.classList.add("btn_active");

  document
    .querySelector(`.btns_description--${click.dataset.tab}`)
    .classList.remove("none");
});
