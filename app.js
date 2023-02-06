import { personalProjectNames, workProjectNames } from "./data/names/names.js";
import * as urls from "./data/urls/urls.js";

for (let name of personalProjectNames.concat(workProjectNames)) {
  document
    .querySelector(`#${name}LiveLink`)
    ?.setAttribute("href", urls[`${name}Live`]);
  document
    .querySelector(`#${name}GitHubLink`)
    ?.setAttribute("href", urls[`${name}GitHub`]);
}
