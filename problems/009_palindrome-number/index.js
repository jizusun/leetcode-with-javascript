var isPalindromeString = function(str) {
  let isPalindrome = true;
  for (let i = 0; i < str.length /2; i++) {
    if (str[i] !== str[str.length -i -1]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const isLastDigitZero = (x % 10 === 0 && x !== 0);
  if (x < 0 || isLastDigitZero) {
    return false;
  } else if (x === 0) {
    return true;
  } else {
    return isPalindromeString(new String(x));
  }
};


module.exports = isPalindrome;