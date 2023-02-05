import * as urls from "./data/urls/urls.js";

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
for (let name of personalProjectNames.concat(workProjectNames)) {
  document
    .querySelector(`#${name}LiveLink`)
    ?.setAttribute("href", urls[`${name}Live`]);
  document
    .querySelector(`#${name}GitHubLink`)
    ?.setAttribute("href", urls[`${name}GitHub`]);
}
