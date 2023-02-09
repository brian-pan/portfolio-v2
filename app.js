import { projects } from "./data/projects/projects.js";
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

//add tech stacks for each project
for (let project of allProjects) {
  const p = document.createElement("p");
  p.classList.add("project__tech-stacks");
  document.querySelector(`#${project.camelCasedName}Wrapper`).appendChild(p);
  for (let el of project.stacks) {
    const span = document.createElement("span");
    span.classList.add("project__tech-stacks-name");
    span.textContent = el;
    const separator = document.createElement("span");
    separator.classList.add("project__tech-stacks-separator");
    separator.textContent = " | ";
    if (span.textContent === project.stacks.slice(-1).toString()) {
      p.appendChild(span);
    } else {
      p.appendChild(span).after(separator);
    }
  }
}

//add description for each project
for (let project of allProjects) {
  const ul = document.createElement("ul");
  ul.classList.add("project__description-list");
  const points = project.description.split(".");
  if (!points[points.length - 1]) {
    points.pop();
  }
  for (let point of points) {
    const li = document.createElement("li");
    li.classList.add("project__description-list-item");
    li.textContent = point + (point === points[points.length - 1] ? "." : ";");
    ul.appendChild(li);
  }
  document.querySelector(`#${project.camelCasedName}Wrapper`).appendChild(ul);
}

//add urls to for each project
for (let project of allProjects) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("project__links");
  const liveLink = document.createElement("a");
  liveLink.classList.add("project__link", "project__link--live");
  liveLink.href = project.urlLive;
  liveLink.target = "_blank";
  liveLink.textContent = "View Live";
  wrapper.appendChild(liveLink);
  if (project.urlRepo) {
    const repoLink = document.createElement("a");
    repoLink.classList.add("project__link", "project__link--repo");
    repoLink.href = project.urlRepo;
    repoLink.target = "_blank";
    repoLink.textContent = "GitHub";
    wrapper.appendChild(repoLink);
  }
  document
    .querySelector(`#${project.camelCasedName}Wrapper`)
    .appendChild(wrapper);
}
