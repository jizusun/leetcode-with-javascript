/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length === 0) {
    return 0;
  }
  const hash = {};
  let maxLen = 1;
  let low = 0;
  for (let i=low ; i<s.length; i++)  {
    if (i !== low && s[i] in hash) {
      low = Math.max(hash[s[i]] + 1, low);
    } 
    maxLen = Math.max(i-low+1, maxLen);
    hash[s[i]] = i;
  }
  return maxLen;
};

module.exports = lengthOfLongestSubstring;

// var lengthOfLongestSubstring = function(s) {
//   let result = 0;
//   let map = new Map();
//   for(let i = 0, j = 0; j < s.length; j++) {
//     let lastOccurance = map.get(s[j]);
//     if (lastOccurance) {
//       i = Math.max(lastOccurance + 1, i);
//     }
//     console.log(`${s}:  ${i}, ${j}, ${result}`)
//     result = Math.max(j-i+1, result);
//     map.set(s[j], j);
//   }
//   return result;
// };

