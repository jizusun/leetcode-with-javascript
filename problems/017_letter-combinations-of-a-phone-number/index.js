/*
---
created: 20190425
updated:
  - 20190916
source:
  - https://leetcode.com/problems/letter-combinations-of-a-phone-number/
level:
  - medium
description:
  - Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
tags:
  - String
  - Backtracking
solutions:
  -
    - runtime: ms, beats %
    - memory:  MB, beats %
---
*/

// const letterCombinationsFp = digits => { }

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var mapping = {
    '2': 'abc', '3': 'def',  '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };
  const combinations = [];
  if (digits) {
    backtrack('', digits, combinations, mapping);
  }
  return combinations;
};

/**
 * @param {string} comb
 * @param {string} digits
 * @param {array} combinations
 */
var backtrack = (comb, digits, combinations, mapping) => {
  if (digits.length === 0) {
    combinations.push(comb);
  } else {
    const firstDigit = digits.slice(0, 1);
    const letters = mapping[firstDigit];
    for (let letter of letters) {
      backtrack(comb + letter, digits.slice(1), combinations, mapping);
    }
  }
};


module.exports = {
  letterCombinations
  //, letterCombinationsFp
};
