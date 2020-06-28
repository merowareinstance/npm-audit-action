jest.unmock("../../init");
const core = require("@actions/core");
const prettyNpmAudit = require("pretty-npm-audit");
const { actionsModule } = require("../../modules");
const init = require("../../init");

describe("Main Index Unit Test", () => {
  test("Should call proper functions with correct data", async () => {
    core.getInput
      .mockImplementationOnce(() => "./package")
      .mockImplementationOnce(() => true)
      .mockImplementationOnce(() => true);

    prettyNpmAudit.audit.mockImplementationOnce(() => ({
      low: [],
    }));

    await init.start();

    expect(core.getInput).toHaveBeenCalledTimes(3);
    expect(prettyNpmAudit).toHaveBeenCalledWith({
      dirPath: "./package",
      sort: true,
      debug: true,
      jsonPretty: true,
    });
    expect(prettyNpmAudit.audit).toHaveBeenCalledTimes(1);
    expect(actionsModule.generateAnnotations).toHaveBeenCalledWith({
      low: [],
    });
  });
});
