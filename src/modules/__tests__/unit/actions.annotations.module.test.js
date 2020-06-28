jest.unmock("../../actions.annotations.module");
const { issueCommand, issue } = require("@actions/core/lib/command");
const actionsModule = require("../../actions.annotations.module");

describe("Actions Annotations Module Unit Test", () => {
  describe("begin", () => {
    test("Should test calling issue with proper params", () => {
      actionsModule.begin();
      expect(issue).toHaveBeenCalledWith("group", "Audit Annotations");
    });
  });
  describe("done", () => {
    test("Should test calling issue with proper params", () => {
      actionsModule.done();
      expect(issue).toHaveBeenCalledWith("endgroup");
    });
  });
  describe("log", () => {
    test("Should test calling issue command with proper commands", () => {
      actionsModule.log({ level: "test", message: "some message" });
      expect(issueCommand).toHaveBeenCalledWith("test", {}, "some message");
    });
  });
  describe("info", () => {
    test("Should test calling this.log with proper params", () => {
      jest.spyOn(actionsModule, "log").mockImplementationOnce(() => {});
      actionsModule.info({ message: "some message" });
      expect(actionsModule.log).toHaveBeenCalledWith({
        level: "info",
        message: "some message",
      });
    });
  });
  describe("debug", () => {
    test("Should test calling this.log with proper params", () => {
      jest.spyOn(actionsModule, "log").mockImplementationOnce(() => {});
      actionsModule.debug({ message: "some message" });
      expect(actionsModule.log).toHaveBeenCalledWith({
        level: "debug",
        message: "some message",
      });
    });
  });
  describe("warn", () => {
    test("Should test calling this.log with proper params", () => {
      jest.spyOn(actionsModule, "log").mockImplementationOnce(() => {});
      actionsModule.warn({ message: "some message" });
      expect(actionsModule.log).toHaveBeenCalledWith({
        level: "warning",
        message: "some message",
      });
    });
  });
  describe("error", () => {
    test("Should test calling this.log with proper params", () => {
      jest.spyOn(actionsModule, "log").mockImplementationOnce(() => {});
      actionsModule.error({ message: "some message" });
      expect(actionsModule.log).toHaveBeenCalledWith({
        level: "error",
        message: "some message",
      });
    });
  });
});
