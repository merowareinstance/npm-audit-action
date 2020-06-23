const actionsAnnotations = require("./actions.annotations.module");

async function generateAnnotations(data) {
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i += 1) {
    const severity = keys[i];
    const tables = data[severity];
    for (let j = 0; j < tables.length; j += 1) {
      const message = tables[j];
      switch (severity) {
        case "info":
          break;
        case "low":
        case "moderate":
          actionsAnnotations.warn({ message });
          break;
        case "high":
        case "critical":
          actionsAnnotations.error({ message });
          break;
        default:
      }
    }
  }
}

module.exports = {
  generateAnnotations,
};
