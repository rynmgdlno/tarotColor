/* 
  Converts path aliases from tsconfig.json to a format that jest.config likes (regexp).
  input syntax: 'libName': <rootDir>/path/to/lib;
  output syntax: '^libName(.*)$': '<rootDir>/path/to/lib$1'
  Use to automatically keep paths in sync between jest.config and tsconfig.json
*/

type path = {
  [key: string]: string;
};

export const convertPathsToRegex = (paths: object): object => {
  const convertedPaths: path = {};
  Object.entries(paths).forEach((path) => {
    const key = `^${path[0]}(.*)$`;
    const value = `${path[1]}$1`;
    convertedPaths[key] = value;
  });
  return convertedPaths;
};
