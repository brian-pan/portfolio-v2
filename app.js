import * as urls from "./assets/urls/urls.js";

const personalProjectNames = [
  "dishGuru",
  "tripPlanner",
  "rockPaperScissorsGame",
  "roomPage",
  "roadSafetyMachineLearningReport",
  "fuelEfficiencyStatisticalModelingProject",
];
const workProjectNames = [
  "medicationLocator",
  "conditionFinder",
  "bmiCalculator",
  "featureFilter",
  "milestones",
];
for (let name of personalProjectNames) {
  if (document.querySelector(`#${name}LiveLink`)) {
    document
      .querySelector(`#${name}LiveLink`)
      .setAttribute("href", urls[`${name}Live`]);
    document
      .querySelector(`#${name}GitHubLink`)
      .setAttribute("href", urls[`${name}GitHub`]);
  }
}
for (let name of workProjectNames) {
  if (document.querySelector(`#${name}LiveLink`)) {
    document
      .querySelector(`#${name}LiveLink`)
      .setAttribute("href", urls[`${name}Live`]);
  }
}
