/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  let lcp = strs[0];
  for(let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(lcp) !== 0)  {
      lcp = lcp.slice(0, lcp.length-1);
    }
    if (lcp === '') {
      return '';
    }
  }
  return lcp;
};

module.exports = longestCommonPrefix;
