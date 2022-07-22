"use strict";

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider_btn_left");
const btnRight = document.querySelector(".slider_btn_right");
let currentSlide = 0;
const nrOfSlide = slides.length;
const dotsBox = document.querySelector(".dots");

///////////////////////////////////////

function createDots() {
  slides.forEach(function (_, i) {
    dotsBox.insertAdjacentHTML(
      "beforeend",
      `<button class="dots_dot" data-slide="${i}"></button>`
    );
  });
}
function dotActive(slide) {
  document
    .querySelectorAll(".dots_dot")
    .forEach((dot) => dot.classList.remove("dots_dot_active"));

  document
    .querySelector(`.dots_dot[data-slide="${slide}"]`)
    .classList.add("dots_dot_active");
}
function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}
function nextSlide() {
  if (currentSlide === nrOfSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  dotActive(currentSlide);
}
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = nrOfSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  dotActive(currentSlide);
}

////////////////////////////////////

goToSlide(0);
createDots();
dotActive(0);

//////////////////////////////////

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});
dotsBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots_dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    dotActive(slide);
  }
});
