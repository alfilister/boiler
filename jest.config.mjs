import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {

  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/pages/**/*.tsx'],
  coveragePathIgnorePatterns: [
    'src/pages/_app.tsx',
    'src/pages/_document.tsx',
  ],
}

export default createJestConfig(config)
