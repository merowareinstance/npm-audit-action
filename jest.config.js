const isUnitTest = process.env.TEST_ENV === "unit";
module.exports = {
  automock: isUnitTest,
  bail: true,
  clearMocks: true,
  collectCoverage: isUnitTest,
  collectCoverageFrom: ["*.js", "src/**/*.js"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["./node_modules/", "./jest/", "jest.config.js"],
  coverageReporters: ["json", "text", "lcov", "clover"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },
  resetMocks: true,
  restoreMocks: true,
  testEnvironment: "node",
};
