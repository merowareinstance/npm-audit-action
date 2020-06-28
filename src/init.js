const core = require("@actions/core");
const prettyNpmAudit = require("pretty-npm-audit");
const { actionsModule } = require("./modules");

async function start() {
  const dirPath = core.getInput("dirPath");
  const sort = core.getInput("sort");
  const debug = core.getInput("debug");

  prettyNpmAudit({
    dirPath,
    sort,
    debug,
    jsonPretty: true,
  });

  const tables = await prettyNpmAudit.audit();
  actionsModule.generateAnnotations(tables);
}

module.exports = {
  start,
};
