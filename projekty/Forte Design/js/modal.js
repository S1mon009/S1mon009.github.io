"use strict";

const fbBtn = document.querySelector(".fb_btn");
const closeFbBtn = document.querySelector(".fa-circle-xmark");

/////////////////////////////////////////

closeFbBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fbBtn.style.display = `none`;
});
