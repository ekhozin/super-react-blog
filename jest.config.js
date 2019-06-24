module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules', 'src', './'],
  testURL: 'http://localhost:2019',
  testRegex: '/tests/__tests__/.*?\\.(test|spec)\\.js$',
  setupFiles: ['<rootDir>/tests/__setup__/setupFiles.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/__setup__/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
};
