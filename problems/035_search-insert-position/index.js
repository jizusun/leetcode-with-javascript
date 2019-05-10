// Created: 20190509
// Updated: 20190510

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0;
  let j = nums.length;
  while (i < j) { 
    const mid = parseInt((i + j) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return i;
};

module.exports = searchInsert;
