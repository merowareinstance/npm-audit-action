const core = require("@actions/core");
const init = require("./src/init");

try {
  const dirPath = core.getInput("dirPath");
  const sort = core.getInput("sort");
  const environment = core.getInput("environment");
  const debug = core.getInput("debug");

  init
    .start({
      dirPath,
      sort,
      environment,
      debug,
    })
    .catch((e) => {
      core.setFailed(e.message);
    });
} catch (e) {
  core.setFailed(e.message);
}
