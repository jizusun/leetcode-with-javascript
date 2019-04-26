/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const symbols =  [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 
    'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const values  =  [ 1,   4,    5,   9,    10,  40,   
    50,  90,   100,  400, 500, 900,  1000]; 
  
  
  let remain = num;
  let result = '';
  
  for (let i=values.length-1; i >=0 ; i--)  {
    while (remain - values[i] >= 0) {
      result += symbols[i];
      remain -= values[i];
    }
  }
  
  return result;
};


module.exports = intToRoman;
