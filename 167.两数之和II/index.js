/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else if (sum === target) {
      return [left + 1, right + 1];
    }
  }
};
