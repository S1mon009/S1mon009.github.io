"use strict";

let languageAll = new Set();
const inputSearch = document.querySelector(".search");
const resultsContainer = document.querySelector(".results");
const resultsWhitePart = document.querySelector(".results_part--1");
const resul = document.querySelector(".result");
const allDataSearch = createSearchData();

///////////////////////////////////////////////////////

function createSearchData() {
  let data,
    allData = [],
    item,
    index;
  for (let i = 0; i < 2; i++) {
    data = myProjects[i];
    index = Object.keys(data).length;
    for (let j = 0; j < index; j++) {
      allData.push([data[j].title, data[j].source, data[j].Github]);
    }
  }
  return allData;
}
function checkIfExist(input) {
  for (let i = 0; i < allDataSearch.length; i++) {
    const dataItem = allDataSearch[i];
    if (dataItem[0].toLowerCase().match(input.toLowerCase())) {
      return true;
    }
  }
}
function search(input) {
  allDataSearch.map(function (item, i) {
    const dataItem = item;
    if (dataItem[0].toLowerCase().match(input.toLowerCase())) {
      const div = `<div class="result"><div class="result_part--1">${dataItem[0]}</div><div class="result_part--2"><a href="${dataItem[2]}"<button class="btn"><span>Github</span></button></a> <a href="${dataItem[1]}"<button class="btn"><span>Live demo</span></button></a></div></div>`;
      resultsContainer.insertAdjacentHTML("beforeend", div);
    }
  });
}
function createSet() {
  for (const [index, item] of Object.entries(myProjects)) {
    for (const [indexProject, project] of Object.entries(item)) {
      for (let i = 0; i < project.languages.length; i++) {
        languageAll.add(project.languages[i]);
      }
    }
  }
}

/////////////////////////////////////////////////////

inputSearch.addEventListener("input", function (e) {
  if (inputSearch.value != "" && checkIfExist(inputSearch.value)) {
    resultsContainer.classList.remove("none");
    resultsWhitePart.classList.remove("none");
    resultsContainer.innerHTML = "";
    search(inputSearch.value);
  } else {
    resultsContainer.classList.add("none");
    resultsWhitePart.classList.add("none");
  }
});
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("result")) {
    return;
  } else {
    resultsContainer.classList.add("none");
    resultsWhitePart.classList.add("none");
  }
});

createSet();
