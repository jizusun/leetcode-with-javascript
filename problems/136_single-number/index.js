/*
---
created: 20190521
updated: 
  - 20190522 
  - 20190527
source: 
  - https://leetcode.com/problems/single-number/ 
level:
  - easy
description: 
  - Given a non-empty array of integers, every element appears twice except for one. Find that single one.
tags: 
  - hash table 
  - bit manipulation 
solutions: 
  - singleNumberWithXOR
    - runtime: 60 ms, beats 95.47%
    - memory: 35.4 MB, beats 83.53%
  - singleNumberWithHashTable
    - runtime?: 60 ms, beats 95.47%
    - memory?: 35.4 MB, beats 83.53%
    
---
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberWithXOR = function(nums) {
  return nums.reduce( (acc, cur) =>  acc ^ cur , 0); 
};

var singleNumberWithHashTable= function(nums) {
  let m = new Map();

  for (let i=0; i < nums.length; i++)  {
    const num = nums[i];
    if(m.get(num)) {
      m.delete(num);
    } else {
      m.set(num, true);
    }
  }
  const result =  [...m.keys()][0] || 0;
  return result;

};

module.exports = {
  singleNumberWithXOR,
  singleNumberWithHashTable
};
