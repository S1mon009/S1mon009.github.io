"use strict";

const headerMessage = document.querySelector(".header_title");

///////////////////////////////////////

const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookies");
cookieMessage.innerHTML = `We use cookied for improved functionality and analytics.
<button class="btn hide_cookie">Accept all</button>`;

headerMessage.prepend(cookieMessage);

////////////////////////////////////////

document.querySelector(".hide_cookie").addEventListener("click", function () {
  cookieMessage.remove();
});
