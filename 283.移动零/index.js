/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  //先在数组前面部分填满非零数字
  for (let num of nums) {
    if (num !== 0) {
      nums[nonZeroIndex++] = num;
    }
  }
  //填好数字 0
  for (; nonZeroIndex < nums.length; nonZeroIndex++) nums[nonZeroIndex] = 0;
};
