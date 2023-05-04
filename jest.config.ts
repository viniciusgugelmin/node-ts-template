export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  transform: {
    ".+.ts$": "ts-jest"
  },
  setupFilesAfterEnv: ["./jest.setup.ts"]
};
