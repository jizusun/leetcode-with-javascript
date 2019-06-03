/*
---
created: 20190603
updated:
  -
source:
  - https://leetcode.com/problems/string-to-integer-atoi/
level:
  - medium
description:
  - Implement atoi which converts a string to an integer.
tags:
  - math
  - string
solutions:
  - myAtoi
    - runtime: 60 ms, beats 95.47%
    - memory: 35.4 MB, beats 83.53%
  - singleNumberWithHashTable
    - runtime?: 60 ms, beats 95.47%
    - memory?: 35.4 MB, beats 83.53%
---
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const match = /^ *?([-+]{0,1}\d+)/.exec(str) ;
  const number =  match!== null ? parseInt(match[1]) : 0;
  if (number > 0x7fffffff) {
    return 0x7fffffff;
  } else if (number < -0x80000000) {
    return -0x80000000;
  } else {
    return number;
  }
};


var myAtoiOneliner= str => Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);

module.exports = {
  myAtoi,
  myAtoiOneliner
};
