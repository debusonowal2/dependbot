// Minimal entry point so the npm manifest references real dependencies.
const _ = require("lodash");

function main() {
  console.log(_.capitalize("dependabot lab ready"));
}

main();
