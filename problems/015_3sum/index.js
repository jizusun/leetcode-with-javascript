/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 * The solution set must not contain duplicate triplets.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort( (a, b) => a - b );
  const result = [];
  for(let i = 0; i < nums.length-2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i-1]) continue;
    const target = 0 - nums[i];
    let j = i+1;
    let k = nums.length -1;

    while (j < k) {
      if (nums[i] + nums[j] > 0) break;
      if (nums[j] + nums[k] < target) {
        j++;
      } else if (nums[j] + nums[k] > target){
        k--;
      } else {
        result.push( [ nums[i], nums[j], nums[k] ] );
        while (j < k && nums[j] === nums[j+1]) j++;
        while (j < k && nums[k] === nums[k-1]) k--;
        j++; k--;
      }
    }
  }
  return result;
};

module.exports = threeSum;
