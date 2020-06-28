/* eslint-disable global-require */
jest.unmock("../../index.js");
const core = require("@actions/core");
const init = require("../../src/init");

describe("Main index unit test", () => {
  test("Should complete succesfully if start doesn't throw", () => {
    init.start.mockResolvedValueOnce();
    require("../../index");
    expect(core.setFailed).not.toHaveBeenCalled();
  });

  test.only("Should call set failed if if start throws", () => {
    const errorToThrow = new Error("Failed");
    init.start.mockRejectedValueOnce(errorToThrow);
    require("../../index");
    expect(core.setFailed).toHaveBeenCalledWith(errorToThrow.message);
  });
});
