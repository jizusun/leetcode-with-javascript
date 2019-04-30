/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const isLastDigitZero = (x % 10 === 0 && x !== 0);
  if (x < 0 || isLastDigitZero) {
    return false;
  } 

  let headHalf = x, revertedTailHalf = 0;
  while (headHalf > revertedTailHalf) {
    revertedTailHalf = 10 * revertedTailHalf + headHalf % 10;
    headHalf = parseInt(headHalf /10);

  }
  return (
    headHalf === revertedTailHalf 
   || headHalf === parseInt(revertedTailHalf/10) 
  ); 
};
module.exports = isPalindrome;