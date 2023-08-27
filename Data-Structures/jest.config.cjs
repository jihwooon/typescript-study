/** @type {import('jest').Config} */
module.exports = {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    "rootDir": "src",
    "testRegex": ".*\\.(test|spec)\\.js$",
    "collectCoverageFrom": [
      "**/*.js"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node",
      testPathIgnorePatterns: [
        '/node_modules/',
    ],
    "setupFiles": [
      "jest-plugin-context/setup"
    ]
};
