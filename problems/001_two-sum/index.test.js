const twoSum = require('./index');

test('Should return an array which contains the index of the two numbers', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});


test('Should not include a number twice ', () => {
  expect(twoSum([3, 3, 11, 15], 6)).toEqual([0, 1]);
});