const longestCommonPrefix = require('./index');

it('common case', () => {
  const strs = ['flower','flow','flight'];
  const expected = 'fl';
  const actual = longestCommonPrefix(strs);
  expect(actual).toEqual(expected);
});

it('the lcp is empty', () => {
  const strs = ['dog','racecar','car'];
  const expected = '';
  const actual = longestCommonPrefix(strs);
  expect(actual).toEqual(expected);
});

