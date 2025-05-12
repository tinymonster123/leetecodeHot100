/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 我的想法
// 一个改版的滑动窗口但是没有成功
// var subarraySum = function (nums, k) {
//   if (!nums.length) return 0;
//   let [prev, curr, count, result] = [0, 0, 0, 0];

//   while (curr < nums.length) {
//     if (!nums[curr]) result++;
//     if (prev === curr) {
//       if (nums[curr] === k) {
//         result++;
//         curr++;
//       }
//       curr++;
//     } else {
//       if (!count) {
//         count = nums[prev] + nums[curr];
//       } else {
//         count += nums[curr];
//       }
//       console.log(count);
//       if (count === k) {
//         result++;
//         count = 0;
//         prev = curr;
//         curr++;
//       } else if (count < k) {
//         curr++;
//       } else if (count > k) {
//         if (nums[curr] === k) {
//           result++;
//         }
//         count = 0;
//         prev = curr;
//         curr++;
//       }
//     }
//   }
//   return result;
// };
// AI
// 对于任意位置j，如果存在某个位置i (i<j)，使得 prefixSum[j] - prefixSum[i] = k
// 则说明从位置i+1到j的子数组和为k
var subarraySum = function (nums, k) {
  const map = new Map();
  let [sum, count] = [0, 0];
  // AI:初始化空前缀，处理从数组开始位置就满足条件的子数组
  map.set(0, 1); // 当最初始的 sum === k 时可以不遗漏
  for (let num of nums) {
    sum += num;
    //  sum - k 应该有两种情况
    // 1.sum - k === 0 即 sum === k 时
    // 2.sum - k === k 在出现这种情况时会先经历经过 sum === k 此时 map 中已经存储了 sum === k 的情况，如果在位置 j 的前缀和为 sum，且在之前位置 i 的前缀和为 sum-k，则从位置 i+1 到 j 的子数组和为 k
    // 通过 sum - k 转换为寻找"是否曾经出现过和为 sum-k 的前缀
    count += map.get(sum - k) || 0; // += 非常的巧妙
    map.set(sum, map.get(sum) + 1 || 1);
  }
  return count;
};
