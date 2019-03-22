/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var lengthOfLongestSubstring = function(s) {
  let result = 1;
  let map = new Map();

  for(let i = 0, j = 1; i < s.length; j++) {
    if (map.has(s[j])) {
      i = map.get(s[j]) + 1;
    }
    map.set(s[j], j);
    result = j-i > result ? j-i : result;
  }
  return result;
};

module.exports = lengthOfLongestSubstring;
