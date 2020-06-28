const core = require("@actions/core");
const init = require("./src/init");

init.start().catch((e) => {
  core.setFailed(e.message);
});
