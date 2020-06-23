const { issueCommand, issue } = require("@actions/core/lib/command");

class ActionAnnotations {
  // eslint-disable-next-line class-methods-use-this
  begin() {
    issue("group", "Audit Annotations");
  }

  // eslint-disable-next-line class-methods-use-this
  done() {
    issue("endgroup");
  }

  // eslint-disable-next-line class-methods-use-this
  log({ level, message }) {
    issueCommand(level, {}, message);
  }

  info({ message }) {
    this.log({
      level: "info",
      message,
    });
  }

  debug({ message }) {
    this.log({
      level: "debug",
      message,
    });
  }

  warn({ message }) {
    this.log({
      level: "warning",
      message,
    });
  }

  error({ message }) {
    this.log({
      level: "error",
      message,
    });
  }
}

module.exports = new ActionAnnotations();
