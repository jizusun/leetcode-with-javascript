/*
---
created:
updated:
  -
source:
  -
level:
  -
description:
  -
tags:
  -
solutions:
  -
    - runtime: ms, beats %
    - memory:  MB, beats %
---
*/

const divide_sample_52ms = require('./index-2');


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  // [−2^31,  2^31 − 1]
  let dvd = Math.abs(dividend); 
  const dvs = Math.abs(divisor);
  const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
  let res = 0;
  const MAX = 0x100000000 / 2; // 2^31
  // pitfalls: 
  // 1073741824 << 1 = -2147483648
  // 2147483648 >> 1 = -1073741824
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  while (dvd >= dvs) {
    let tmp = dvs;
    let mul = 1;
    while( dvd >> 1 >= tmp)  { 
      // shouldn't be `tmp<<1 < dvd`
      // since 1073741824 << 1 = -2147483648
      // very important for dividend as -2147483648
      tmp <<= 1;
      mul <<= 1;
    }  
    res += mul;
    dvd -= tmp; // very important for dividend as -2147483648 and dvd as 1
  }
  if (res >= MAX) {
    return (sign === 1) ? MAX - 1: -MAX;
  }
  return sign*res;
};

module.exports = {
  divide,
  divide_sample_52ms
};
