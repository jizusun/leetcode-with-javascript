const threeSum = require('./index');

test('normal case',() => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const actual = threeSum(nums);
  const expected = [
    [-1, -1, 2],
    [-1, 0, 1]
  ];
  expect(actual).toEqual(expected);
});


test('the input array contains several same numbers',() => {
  const nums = [0, 0, 0, 0];
  const actual = threeSum(nums);
  const expected = [
    [0, 0, 0]
  ];
  expect(actual).toEqual(expected);
});


