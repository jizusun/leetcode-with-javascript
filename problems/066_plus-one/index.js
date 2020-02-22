/*
---
created: 20191125
updated:
  - 
source:
  - https://leetcode.com/problems/plus-one/
level:
  - easy
description:
  - Given a non-empty array of digits representing a non-negative integer, plus one to the integer. 
  - The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
  - You may assume the integer does not contain any leading zero, except the number 0 itself.
tags:
  - array
solutions:
  -
    - runtime: ms, beats %
    - memory:  MB, beats %
---
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const result = digits.slice(0);
  const len = digits.length;
  const lastDigit = result[len - 1];
  if (lastDigit === 9) {     result[len-1]  = 0;     let idx = len - 2;     while(result[idx] === 9 && idx >= 0)  {      result[idx] = 0;       idx--;     }
    if (idx < 0) {
      result.unshift(1);
    }
    else {
      result[idx] = result[idx] + 1;
    }
  } else {
    result[len-1] =  lastDigit + 1;
  }
  return result;
};

module.exports = {
  plusOne
};