"use strict";

const sections = document.querySelectorAll(".section");
const sectionImg = document.querySelectorAll(".section_img_lazy");
const sectionObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.15,
});
const sectionImgObserver = new IntersectionObserver(showSectionImg, {
  root: null,
  threshold: 0.9,
});

/////////////////////////

function showSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section_hidden");
  observer.unobserve(entry.target);
}
function showSectionImg(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("blur");
  observer.unobserve(entry.target);
}

/////////////////////////////////////

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section_hidden");
});

sectionImg.forEach(function (img) {
  sectionImgObserver.observe(img);
});
