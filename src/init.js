const prettyNpmAudit = require("pretty-npm-audit");
const { actionsModule } = require("./modules");

async function start({ dirPath, sort, debug }) {
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
