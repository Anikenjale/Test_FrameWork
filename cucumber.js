module.exports = {
  default: {
    require: ["src/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "json:reports/cucumber-report.json"
    ],
    parallel: 2,
    retry: 1,
    paths: ["src/features/**/*.feature"]
  }
};
