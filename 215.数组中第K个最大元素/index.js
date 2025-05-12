/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 思路非常简单直接排序即可，用 sort 排序直接秒杀
var findKthLargest = function (nums, k) {
  if (k > nums.length) return null;
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
// 尝试使用手写的排序,但是冒泡排序时间复杂度
// var findKthLargest = function (nums, k) {
//   if (k > nums.length) return null;
//   // 使用冒泡排序
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 0; j < nums.length - 1 - i; j++) {
//       if (nums[j] < nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//       }
//     }
//   }
//   return nums[k - 1];
// };
