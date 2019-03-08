const twoSum = require('./index');

test('2 + 7 = 9', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});