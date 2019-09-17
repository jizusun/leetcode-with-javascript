/*
---
created: 20190917
updated:
  -
source:
  - https://leetcode.com/discuss/interview-question/383819/facebook-phone-screen-number-of-1s-in-range-decode-ways
  - https://leetcode.com/problems/range-sum-query-immutable/
level:
  - easy
description:
  - Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
  - You may assume that the array does not change.
  - There are many calls to sumRange function.
tags:
  - Dynamics Programming
solutions:
  -
    - runtime: ms, beats %
    - memory:  MB, beats %
---
*/


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sum = [0];
  for(let i = 0; i < nums.length; i++)  {
    this.sum.push(this.sum[i] + nums[i]);
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sum[j+1] - this.sum[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

module.exports = {
  NumArray
};
