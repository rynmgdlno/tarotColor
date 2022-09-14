// jest.config.ts
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import { convertPathsToRegex } from './jestPathTransformer';
import { compilerOptions } from './tsconfig.json';
import type { Config } from '@jest/types';

const pathsFromTSConfig = convertPathsToRegex(compilerOptions.paths);
const newPaths = {...pathsFromTSConfig, '\\.(css|less|scss|sss)$': '<rootDir>/node_modules/jest-css-modules'}

// Sync object
const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: newPaths,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js'
  },
  verbose: true,
};

export default config;
