"use strict";

const header = document.querySelector("header");
// const headerTitle = document.querySelector(".header_title");
const headerHeight = header.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

//////////////////////////////////////

function headerAnimation(e) {
  if (e.target.classList.contains("header_item")) {
    const link = e.target;
    const siblings = link.closest("header").querySelectorAll(".header_item");
    const logo = link.closest("header").querySelector("img");
    const text = link.closest("header").querySelector("h2");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    text.style.opacity = this;
  }
}

function stickyHeader(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

////////////////////////////////////////

header.addEventListener("mouseover", headerAnimation.bind(0.5));
header.addEventListener("mouseout", headerAnimation.bind(1));

headerObserver.observe(headerTitle);
