/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 注意一点 js 中没有初始化的变量默认是 undefined
var twoSum = function (nums, target) {
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex += 1) {
    for (let secondIndex = 0; secondIndex < nums.length; secondIndex += 1) {
      if (firstIndex !== secondIndex) {
        let judgeResult = nums[firstIndex] + nums[secondIndex] === target;
        if (judgeResult) return [firstIndex, secondIndex];
      }
    }
  }
};
