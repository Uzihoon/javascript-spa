module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js']
};
