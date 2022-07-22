"use strict";

const projectsContainerNew = document.getElementById("section--2");
const projectsContainerEasy = document.getElementById("section--3");
const projectsContainerAdvanced = document.getElementById("section--4");
const numberOfProjectsContainer = document.querySelector(".number_of_projects");
const listOfLanguageContainer = document.getElementById("listProjects");
let language = [],
  colorLanguage = ["orange", "blue", "yellow"],
  allLanguages = [...languageAll],
  sumOfProjectsNumber = 0,
  countLanguage = [],
  allProjectsArray = [];
let typeOfLevel, container, typeDiv;

allLanguages.forEach(() => countLanguage.push(0));

////////////////////////////////////////////////

function displayProjects() {
  for (const [index, item] of Object.entries(myProjects)) {
    let maxNumberOfProject = 0;
    for (const [indexProject, project] of Object.entries(item)) {
      if (maxNumberOfProject === 12) break;
      allProjectsArray.push(project);
      if (project.level === "Prosty") {
        typeOfLevel = `<i class="fa-solid fa-code-branch"></i
      >`;
        container = projectsContainerEasy;
        typeDiv = "easy";
      } else {
        typeOfLevel = `<i class="fa-solid fa-code"></i
        >`;
        container = projectsContainerAdvanced;
        typeDiv = "advanced";
      }
      createDiv(project, container);
      countNumberOfLanguage(project.languages);
      maxNumberOfProject++;
    }
  }

  allProjectsArray.sort(function (a, b) {
    return new Date(a.date).getMonth() - new Date(b.date).getMonth();
  });
  allProjectsArray.reverse();
  for (let i = 0; i < allProjectsArray.length; i++) {
    if (i === 12) break;
    createDiv(allProjectsArray[i], projectsContainerNew);
  }
  displayList();
}
function createDiv(project, container) {
  const locale = new Intl.DateTimeFormat(window.locale).format(
    new Date(project.date)
  );
  const html = `<div class="project ${typeDiv}">
      <div class="project_date">${locale}</div>
      <div class="project_image"><img src="${project.image}">
      </div>
      <div class="project_title">${project.title}</div>
      <div class="project_categories">
        ${checkLanguages(project.languages)}
        <span>${typeOfLevel} ${project.level}</span>
          
      </div>
      <div class="project_buttons">
        <a href="${
          project.Github
        }"><button class="btn"><span>Github</span></button></a>
        <a href="${
          project.source
        }"><button class="btn"><span>Live demo</span></button></a>
      </div>
    </div>`;

  container.insertAdjacentHTML("beforeend", html);
}
function checkLanguages(language) {
  let listOfLanguage = [];
  for (let i = 0; i < language.length; i++) {
    for (let j = 0; j < colorLanguage.length; j++) {
      if (language[i] === allLanguages[j]) {
        listOfLanguage.push(
          `<span><i class="fa-solid fa-circle ${colorLanguage[j]}"></i> ${language[i]}</span>`
        );
      }
    }
  }
  return listOfLanguage.join("");
}
function countNumberOfLanguage(language) {
  for (let i = 0; i < language.length; i++) {
    for (let j = 0; j < colorLanguage.length; j++) {
      if (language[i] === allLanguages[j]) {
        countLanguage[j]++;
      }
    }
  }
  sumOfProjectsNumber = countLanguage.reduce((acc, mov) => acc + mov, 0);
}
function displayList() {
  numberOfProjectsContainer.textContent = `${sumOfProjectsNumber}+ projektach.`;
  for (let i = 0; i < allLanguages.length; i++) {
    const percent = ((countLanguage[i] / sumOfProjectsNumber) * 100).toFixed(0);
    const html = `<div class="section--1_list_item--2">
      <div class="section--1_list_item--2_type">
        <i class="fa-solid fa-circle"></i> <h3>${allLanguages[i]}:</h3><h3>${percent}%</h3>
      </div>
      <div class="section--1_list_item--2_range--1"></div>
      <div class="section--1_list_item--2_range--2" style="width: ${percent}%;"></div>
    </div>`;
    listOfLanguageContainer.insertAdjacentHTML("beforeend", html);
  }
}

//////////////////////////////////////////

displayProjects();
