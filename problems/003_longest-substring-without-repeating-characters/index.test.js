/*
*/ 


const lengthOfLongestSubstring = require('./index');


test('the answer is abc with the length of 3, when the given string is abcabcbb', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test('the answer is b with the length of 1, when the given string is bbbbb', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
});

test('the answer is wke with the length of 3, when the given string is pwwkew', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});

test('the answer is a with the length of 1, when the given string is aa', () => {
  expect(lengthOfLongestSubstring('aa')).toEqual(1);
});

test('the answer is empty with the length of 0, when the given string is a empty string', () => {
  expect(lengthOfLongestSubstring('')).toEqual(0);
});

test('the answer is a whitespace with the length of 1, when the given string is a whitespace', () => {
  expect(lengthOfLongestSubstring(' ')).toEqual(1);
});

test('the answer is ab with the length of 2, when the given string is abba', () => {
  expect(lengthOfLongestSubstring('abba')).toEqual(2);
});
