const isPalindrome = require('./index');

it('121 => true', () => {
  const x = 121;
  const actual = isPalindrome(x);
  const expected = true;
  expect(actual).toEqual(expected);
});

it('-121 => false', () => {
  const x = -121;
  const actual = isPalindrome(x);
  const expected = false;
  expect(actual).toEqual(expected);
});

it('10 => false', () => {
  const x = 10;
  const actual = isPalindrome(x);
  const expected = false;
  expect(actual).toEqual(expected);
});