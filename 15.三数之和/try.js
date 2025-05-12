/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 因为是子序列而不是子数组（区别在于索引是否连续），所以 prev 与 curr 始终相差 2 会漏掉索引不连续的情况
// var threeSum = function (nums) {
//   let prev = 0,
//     curr = 2;
//   let subArr = [];
//   let result = 0,
//     count = [],
//     counts = [];
//   while (curr < nums.length) {
//     subArr = nums.slice(prev, curr + 1);
//     console.log(subArr,3);
//     result = subArr.reduce((res, val) => res + val, 0);
//     console.log(result, 1);
//     if (!result) {
//       count = Array.from({ length: curr - prev + 1 }, (_, i) => nums[prev + i]);
//       console.log(count, 2);
//       counts.push(count);
//     }
//     prev++;
//     curr++;
//   }
//   return counts;
// };

// 第二版但是仍然失败了陷入死循环
// var threeSum = function (nums) {
//   let counts = [],
//     count = [];
//   if (nums.length < 3) return counts;
//   nums.sort((a, b) => a - b); // 升序
//   if (nums[0] > 0) return counts; // 如果排序之后的首项大于 0 则不存在和为 0 的情况
//   outest:for (let i = 0; i < nums.length - 2; i++) {
//     if (i) {
//       if (nums[i] === nums[i - 1]) continue outest;
//     }
//     let next = i + 1,
//       result = 0;

//     out: while (next < nums.length - 1) {
//       if (next - 1 > i) {
//         if (nums[next] === nums[next - 1]) next++;
//         continue out;
//       }

//       inner: for (let final = nums.length - 1; final > next; final--) {
//         if (final < nums.length - 1) {
//           if (nums[final] === nums[final + 1]) continue inner;
//         }
//         result = nums[i] + nums[next] + nums[final];
//         if (!result) {
//           count = Array.from([nums[i], nums[next], nums[final]]);
//           console.log(count, 1);
//           console.log(counts.includes(count, 2));
//           counts.push(count);
//           //   if (!counts.includes(count)) counts.push(count);
//           console.log(counts);
//         }
//       }
//       next++;
//     }
//   }
//   return counts;
// };
