const longestPalindrome = require('./index');

test('The longest palindrome should be aba, when the string is babad', () => {
  const str = 'babad';
  const actual = longestPalindrome(str);
  const expected = 'aba';
  expect(actual).toEqual(expected);
});


test('The longest palindrome should be bb, when the string is cbbd', () => {
  const str = 'cbbd';
  const actual = longestPalindrome(str);
  const expected = 'bb';
  expect(actual).toEqual(expected);
});

test('The longest palindrome should be an empty string, when the string is empty', () => {
  const str = '';
  const actual = longestPalindrome(str);
  const expected = '';
  expect(actual).toEqual(expected);
});
