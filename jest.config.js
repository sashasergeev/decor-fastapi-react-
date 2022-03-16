/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  setupFiles: ["./.jest/setEnvVars.ts"], // to make env variables work
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
