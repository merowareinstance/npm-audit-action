function parseCommands(commands) {
  const data = {};
  commands.forEach((rawCommand) => {
    const parts = rawCommand.split("=");
    if (parts.length === 2) {
      const [command, value] = parts;
      let parsedValue = null;
      switch (command) {
        case "debug":
          if (value === "true") {
            parsedValue = true;
          } else if (value === "false") {
            parsedValue = false;
          }
          break;
        case "dirPath":
          parsedValue = value;
          break;
        case "environment":
          parsedValue = value;
          break;
        case "sort":
          if (value === "asc" || value === "dsc") {
            parsedValue = value;
          }
          break;
        default:
      }
      if (parsedValue) {
        data[command] = parsedValue;
      }
    }
  });
  return data;
}

module.exports = {
  parseCommands,
};
