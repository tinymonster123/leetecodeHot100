/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  // 主要区别在于：
  // 第一段代码使用 if-else if 结构，意味着一旦某个条件满足，后面的条件就不会被检查
  // 第二段代码使用独立的 if 语句，每个条件都会被检查，不管前面的条件是否满足
  while (left <= right) {
    // if (nums[left] < target) {
    //   left++;
    // } else if (nums[right] > target) {
    //   right--;
    // } else if (nums[left] >= target) {
    //   console.log(nums[left],3);

    //   return left;
    // } else if (nums[right] < target) {
    //   console.log(right + 1, 3);
    //   return right + 1;
    // }
    if (nums[left] < target) left++;
    if (nums[right] > target) right--;
    if (nums[left] >= target) return left;
    if (nums[right] < target) return right + 1;
  }
};
