module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  verbose: true,
  roots: ['<rootDir>/src'],
  setupFiles: ['./tests/setup.js'],
  setupFilesAfterEnv: ['./tests/setupAfterEnv.ts'],
  testRegex: '(/src/.+\\.(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss|styl)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '\\.(png|gif|ttf|eot|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tests/tsconfig.test.json',
    },
  },
};
