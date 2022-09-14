import { testFunc } from '../app'

test('adds 1 + 2 to equal 3', () => {
  expect(testFunc(1, 2)).toBe(3);
});