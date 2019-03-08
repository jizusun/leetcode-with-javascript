/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = nums.reduce((prev, current, idx) => {
    prev[current] = idx;
    return prev;
  }, {});

  let result = [];
  for (let i = 0; result.length < 2; i++) {
    const remain = target - nums[i];
    const possibleIndex = hash[remain];
    if (remain in hash && i !== possibleIndex) {
      result = [i, possibleIndex];
    }
  }
  return result;
};

module.exports = twoSum;
