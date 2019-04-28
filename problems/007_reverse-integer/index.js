/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  let head = x;
  
  while (head !== 0) {
    const tail = head % 10 ;
    const newResult = result * 10 + tail;
    if (Math.abs(newResult) > 0x7FFFFFFF) {
      return 0;
    }
    result = newResult;
    head = parseInt(head / 10);
  }
  
  return result;
   
};


module.exports = reverse;
