/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var lengthOfLongestSubstring = function(s) {
  let result = 0;
  let map = new Map();
  for(let i = 0, j = 0; j < s.length; j++) {
    let lastOccurance = map.get(s[j]);
    if (lastOccurance) {
      i = Math.max(lastOccurance + 1, i);
    }
    console.log(`${s}:  ${i}, ${j}, ${result}`)
    result = Math.max(j-i+1, result);
    map.set(s[j], j);
  }
  return result;
};

module.exports = lengthOfLongestSubstring;
