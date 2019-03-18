/*
*/ 


const lengthOfLongestSubstring = require('./index');
test('the answer is abc with the length of 3, when the given string is abcabcbb', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});
test('the answer is b with the length of 1, when the given string is bbbbb', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(3);
});
test('the answer is wke with the length of 3, when the given string is pwwkew', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});