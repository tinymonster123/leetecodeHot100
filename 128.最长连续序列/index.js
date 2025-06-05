/**
 * @param {number[]} nums
 * @return {number}
 */
// 下面的方法当 max 值太大时会导致堆栈溢出
// var longestConsecutive = function (nums) {
//   if (!nums.length) return 0;
//   const [min, max] = [Math.min(...nums), Math.max(...nums)];
//   const arr = Array.from({ length: max - min + 1 }, (_, i) => min + i);
//   let str = [];
//   let count = [];
//   for (let i of arr) {
//     if (nums.includes(i)) {
//       str.push(i);
//     } else {
//       count.push(str.length);
//       str = [];
//     }
//   }
//   if (str.length > 0) count.push(str.length);

//   return Math.max(...count);
// };
// var longestConsecutive = function (nums) {
//   // 使用 set 存储数据去掉重复值
//   const set = new Set(nums);
//   let result = Array.from(set)
//     .filter((num) => !set.has(num - 1)) // 找到无前置的值即最开始值，例：[1,2,3,4,100,200,400] 中的 [1,100,200,400]
//     .map((num) => {
//       let count = 1;
//       while (set.has(num + count)) {
//         count += 1; // 找到连续的序列长度
//       }
//       return count; // map 方法会将收集每个返回值并且组合为一个新的数组（保持对应原始的元素的顺序和长度）
//     })
//     .reduce((res, num) => Math.max(res, num), 0); //使用 reduce 进行长度最大值判断
//   return result;
// };

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      // 找出那些没有前置元素的元素
      let count = 1;
      let currVal = num;
      while (set.has(currVal + 1)) {
        count++;
        currVal++;
      }
      ans = Math.max(ans, count);
    }
  }
  return ans
};
