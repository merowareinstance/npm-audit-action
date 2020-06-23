const prettyNpmAudit = require("pretty-npm-audit");
const { actionsModule } = require("./modules");

async function start({
  dirPath,
  sort,
  environment,
  debug
}) {
  prettyNpmAudit({
    dirPath,
    sort,
    environment,
    debug,
    json: true,
  });

  const tables = await prettyNpmAudit.audit();
  actionsModule.generateAnnotations(tables);
}

module.exports = {
  start,
};
