"use strict";

const btnScroll = document.querySelector(".btn--scroll-to");
const btnScrollUp = document.querySelector(".btn_scroll_up");
const section1 = document.getElementById("section--1");
const headerDiv = document.querySelector(".header");
const navbarLink = document.querySelector(".navbar");
const headerTitle1 = document.querySelector(".header_title");
const headerObserver1 = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0.1,
});
let change = true;

///////////////////////////////////////

function stickyHeader(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) btnScrollUp.classList.remove("none");
  else btnScrollUp.classList.add("none");
}

///////////////////////////////////////////////////

btnScroll.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

btnScrollUp.addEventListener("click", function () {
  headerDiv.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav_links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

hamburger.addEventListener("click", function () {
  if (change) {
    hamburger.checked = true;
    change = false;
  } else {
    hamburger.checked = false;
    change = true;
  }
});

navbarLink.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav_link")) {
    navbarLink.style.transform = "translateX(100%)";
    document.body.style.overflowY = "auto";
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    hamburger.checked = false;
    change = false;
  }
});

headerObserver1.observe(headerTitle1);
