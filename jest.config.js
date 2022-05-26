module.exports = {
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^root(.*)$': '<rootDir>/index.ts',
    }
  }