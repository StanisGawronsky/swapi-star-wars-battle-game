module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  moduleNameMapper: {
    "~/components/atoms": "<rootDir>/src/components/atoms/index.ts",
    "~/components/molecules": "<rootDir>/src/components/molecules/index.ts",
    "~/components/organisms": "<rootDir>/src/components/organisms/index.ts",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  collectCoverageFrom: ["<rootDir>/src/components/**/*.tsx"],
};