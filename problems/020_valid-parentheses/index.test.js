const isValid = require('./index');

/**

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

*/

it('should return true when the input is an empty string', () => {
  const s = '';
  const expected = true;
  const actual = isValid(s);
  expect(actual).toEqual(expected);
});

it('should return true when the input is ()', () => {
  const s = '()';
  const expected = true;
  const actual = isValid(s);
  expect(actual).toEqual(expected);
});

it('should return true when the input is ()[]{}', () => {
  const s = '()[]{}';
  const expected = true;
  const actual = isValid(s);
  expect(actual).toEqual(expected);
});


it('should return false when the input is (]', () => {
  const s = '(]';
  const expected = false;
  const actual = isValid(s);
  expect(actual).toEqual(expected);
});


it('should return false when the input is ([)]', () => {
  const s = '([)]';
  const expected = false;
  const actual = isValid(s);
  expect(actual).toEqual(expected);
});


it('should return true when the input is {[]}', () => {
  const s = '{[]}';
  const expected = true;
  const actual = isValid(s);
  expect(actual).toEqual(expected);
});

