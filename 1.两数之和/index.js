/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 注意一点 js 中没有初始化的变量默认是 undefined
// var twoSum = function (nums, target) {
//   for (let firstIndex = 0; firstIndex < nums.length; firstIndex += 1) {
//     for (let secondIndex = 0; secondIndex < nums.length; secondIndex += 1) {
//       if (firstIndex !== secondIndex) {
//         let judgeResult = nums[firstIndex] + nums[secondIndex] === target;
//         if (judgeResult) return [firstIndex, secondIndex];
//       }
//     }
//   }
// };

//因为题目中提到，不能使用两个相同的值并且每种输入只会对应一个答案
//其实这个题目的本质是其中符合 nums[i]+nums[j] == target 的 i 和 j
//但是不妨换个思路，其实是找 nums[j] = target - nums[i]
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i); // 存储格式为 value-index
    }
  }
};
