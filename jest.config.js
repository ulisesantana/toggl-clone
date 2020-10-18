module.exports = {
  moduleDirectories: ["node_modules", "src"],
  cacheDirectory: ".cache",
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts)?$": "ts-jest",
  },
};
