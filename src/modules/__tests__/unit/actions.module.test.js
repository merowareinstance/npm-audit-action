jest.unmock("../../actions.module");
const actionsAnnotations = require("../../actions.annotations.module");
const actionsModule = require("../../actions.module");

describe("Actions Module Unit Test", () => {
  describe("generateAnnotations", () => {
    test("Should not call action annotations if object provided is null", () => {
      actionsModule.generateAnnotations(null);
      expect(actionsAnnotations.warn).not.toHaveBeenCalled();
      expect(actionsAnnotations.error).not.toHaveBeenCalled();
    });

    test("Should not call action annotations if object only has severity info", () => {
      actionsModule.generateAnnotations({
        info: ["Data Found Info"],
      });
      expect(actionsAnnotations.warn).not.toHaveBeenCalled();
      expect(actionsAnnotations.error).not.toHaveBeenCalled();
    });

    test("Should call warn if low severity item found", () => {
      actionsModule.generateAnnotations({
        low: ["Data Found Low"],
      });
      expect(actionsAnnotations.warn).toHaveBeenCalledWith({
        message: "Data Found Low",
      });
      expect(actionsAnnotations.error).not.toHaveBeenCalled();
    });

    test("Should call warn if moderate severity item found", () => {
      actionsModule.generateAnnotations({
        moderate: ["Data Found Moderate"],
      });
      expect(actionsAnnotations.warn).toHaveBeenCalledWith({
        message: "Data Found Moderate",
      });
      expect(actionsAnnotations.error).not.toHaveBeenCalled();
    });

    test("Should call error if high severity item found", () => {
      actionsModule.generateAnnotations({
        high: ["Data Found High"],
      });
      expect(actionsAnnotations.warn).not.toHaveBeenCalled();
      expect(actionsAnnotations.error).toHaveBeenCalledWith({
        message: "Data Found High",
      });
    });

    test("Should call error if critical severity item found", () => {
      actionsModule.generateAnnotations({
        critical: ["Data Found Critical"],
      });
      expect(actionsAnnotations.warn).not.toHaveBeenCalled();
      expect(actionsAnnotations.error).toHaveBeenCalledWith({
        message: "Data Found Critical",
      });
    });

    test("Should not call anything if severity not supported", () => {
      actionsModule.generateAnnotations({
        infinity: ["Data Found Critical"],
      });
      expect(actionsAnnotations.warn).not.toHaveBeenCalled();
      expect(actionsAnnotations.error).not.toHaveBeenCalled();
    });
  });
});
