/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return null;
  if (nums.length === 1) return nums[0];
  let result = nums[0];
  let results = [result];
  console.log(result, 1);
  for (let i = 1; i < nums.length; i++) {
    result = result > 0 ? result + nums[i] : nums[i];
    results.push(result);
  }
  return Math.max(...results);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

