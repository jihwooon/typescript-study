/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: [
      '/node_modules', 'output'
    ],
    setupFiles: [
      'jest-plugin-context/setup',
    ],
    rootDir: './',
    moduleFileExtensions: [
      'js',
      'json',
      'ts',
    ],
    roots: ['<rootDir>/'],
    collectCoverageFrom: ['**/*.(t|j)s', '!**/node_modules/**'],
    testTimeout: 10000,
  };
