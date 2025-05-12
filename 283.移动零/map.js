/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const map = new Map();
  const firstKey = 0;
  const secondKey = "is not zero";
  map.set(firstKey, []).set(secondKey, []);
  for (let num of nums) {
    if (num === 0) {
      map.get(firstKey).push(num);
    } else {
      map.get(secondKey).push(num);
    }
  }
  nums = [...map.get(firstKey), ...map.get(secondKey)];
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
