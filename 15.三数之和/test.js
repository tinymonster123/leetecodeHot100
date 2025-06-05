/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let [left, right] = [i + 1, nums.length - 1];
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      console.log(sum);

      if (sum === 0) {
        console.log(nums[i], nums[left], nums[right]);

        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }
  console.log(res);

  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);
