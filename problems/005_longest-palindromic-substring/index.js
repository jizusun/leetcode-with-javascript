const getLengthOfExpanded = function(i, j, s){
  let left = i, right = j;
  while(left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // console.log(i, j, left, right, s.slice(left+1, right));
  return right-left-1;
};


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return '';
  let start = 0, end = 0;
  let result;
  for(let i=0; i<s.length; i++) {
    const len1 = getLengthOfExpanded(i, i, s);
    const len2 = getLengthOfExpanded(i, i+1, s);
    const len = Math.max(len1, len2);
    if ( len > end - start) {
      start = i - Math.floor((len-1)/2);
      end = i + len/2;
    }
    result = s.slice(start, end+1);
    //    console.log(i, len, result);
  }
  
  return result;
};

module.exports = longestPalindrome;
