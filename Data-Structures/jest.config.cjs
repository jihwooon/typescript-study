/** @type {import('jest').Config} */
module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  rootDir: 'src',
  testRegex: '.*\\.(test|spec)\\.js$',
  collectCoverageFrom: [
    '**/*.js',
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  setupFiles: [
    'jest-plugin-context/setup',
  ],
};
