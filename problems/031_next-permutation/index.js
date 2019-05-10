// Created: 20190509
// Modified: 20190510

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // find the last peak
  let i = nums.length - 2;
  while(i >= 0 && nums[i] > nums[i+1]) {
    i--;
  }

  if (i > 0 ){
    let j = nums.length - 1;
    while(i > j && nums[j] < nums[i] ) {
      j--;
    }
    swap(nums, i, j);
  }

  // swap the value before the last peak with the larger number on the right side
  // reverse the numbers from the last peak
  reverse(nums, i+1);
};

const reverse = (nums, i) => {
  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i++, j--);
  }
};

const swap = (nums, i, j) => {
  [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
};

module.exports = nextPermutation;
