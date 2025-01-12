/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    moduleFileExtensions: ['js','json','ts'],
    testEnvironment: 'node',
    transform: { '^.+\\.ts$': 'ts-jest' },
    testPathIgnorePatterns: [
      '/node_modules', 'output'
    ],
    setupFiles: [
      'jest-plugin-context/setup',
    ],
    rootDir: '.',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['**/*.(t|j)s', '!**/node_modules/**'],
    testTimeout: 10000,
  };
