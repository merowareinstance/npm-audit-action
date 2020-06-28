/* eslint-disable global-require */
jest.unmock("../../index.js");
const init = require("../../src/init");

describe("Main index unit test", () => {
  test("Should complete succesfully if start doesn't throw", () => {
    require("../../index");
    expect(init.start).toHaveBeenCalled();
  });
});
