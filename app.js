import { projects } from "./data/projects.js";

console.log(projects);

//add camelCasedName upon loading
for (let project of projects.personal.concat(projects.work)) {
  const words = project.name.split(" ");
  words[0] = words[0].toLowerCase();
  const camelCasedName = words.join("");
  project.camelCasedName = camelCasedName;
}
