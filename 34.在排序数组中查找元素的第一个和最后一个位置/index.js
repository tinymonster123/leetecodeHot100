/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   if (!nums.includes(target)) return [-1, -1];
//   let left = 0,
//     right = nums.length - 1,
//     lefts = [],
//     rights = [];
//   while (left <= right) {
//     if (nums[left] < target) left++;
//     if (nums[right] > target) right--;
//     if (!lefts.length && nums[left] === target) {
//       lefts.push(left);
//     }
//     if (!rights.length && nums[right] === target) {
//       rights.push(right);
//     }
//     if (lefts.length && rights.length) break;
//   }
//   return [...lefts, ...rights];
// };

// 找到 target 最后出现的位置和最早出现的位置可以不需要同时写
// 可以拆开，即是使用二分法分别查找左侧元素和右侧元素
var searchRange = function (matrix, target) {
  if (!matrix.includes(target)) return [-1, -1];
  const left = findLeftElement(matrix, target);
  const right = findRightElement(matrix, target);
  console.log(left, right, 1);

  return [left, right];
};
// 查找左侧元素
var findLeftElement = function (matrix, target) {
  let left = 0,
    right = matrix.length - 1;
  while (left <= right) {
    console.log(left, right, 2);

    const middle = left + Math.floor((right - left) / 2);
    if (matrix[middle] === target) {
      right = middle - 1;
    } else if (matrix[middle] > target) {
      right = middle - 1;
    } else if (matrix[middle] < target) {
      left = middle + 1;
    }
  }
  return left;
};
// 查找右侧元素
var findRightElement = function (matrix, target) {
  let left = 0,
    right = matrix.length - 1;
  while (left <= right) {
    console.log(left, right, 3);
    const middle = left + Math.floor((right - left) / 2);
    if (matrix[middle] === target) {
      left = middle + 1;
    } else if (matrix[middle] > target) {
      right = middle - 1;
    } else if (matrix[middle] < target) {
      left = middle + 1;
    }
  }
  return right;
};

const nums = [1, 4];
const target = 4;

searchRange(nums, target);
