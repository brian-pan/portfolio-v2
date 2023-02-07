import { projects } from "./data/projects.js";
console.log(projects);

const allProjects = projects.personal.concat(projects.work);

//add camelCasedName to each project upon loading
for (let project of allProjects) {
  const words = project.name.split(" ");
  words[0] = words[0].toLowerCase();
  const camelCasedName = words.join("");
  project.camelCasedName = camelCasedName;
}

//create h3 for each project
for (let project of allProjects) {
  const h3 = document.createElement("h3");
  h3.classList.add("project__heading");
  h3.setAttribute("id", `${project.camelCasedName}Heading`);
  h3.textContent = project.name;
  document.querySelector(`#${project.camelCasedName}Wrapper`).appendChild(h3);
}

//
