/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 实际上这种写法并没有想要去包含所有组合：
// 1.数组排序（至关重要的一步）
// 2.当 nums[i] > 0 之后的 nums[left] ,nums[right] > 0不可能会有等于 0 的三元组
// 3.在出现 result = 0 的情况时，通过 left 右移和 right 左移，使 nums[left] 变大，nums[right] 变小来尝试构造新的三元组。（如果只是单纯地移动 left 或只移动 right 则不可能构造出新的三元组）
var threeSum = function (nums) {
  let counts = [],
    count = [];
  if (!nums || nums.length < 3) return counts;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    //需要添加 i 本身的去重,判断条件不要写错
    if (i && nums[i] === nums[i - 1]) continue; //因为当 nums[i] === nums[i-1] 时所有和一定包括了 nums[i] 作为 left 的情况需要避免重复计算（对外层循环去重的目的）
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let result = nums[i] + nums[left] + nums[right];
      if (!result) {
        count = Array.from([nums[i], nums[left], nums[right]]);
        //下面两个变量的去重是为了防止重复存储相同的结果，例如:[0,0,0,0],采用左右指针去重能够保证最终结果是[[0,0,0]]而不是[[0,0,0],[0,0,0],[0,0,0]]
        while (left < right && nums[left] === nums[left + 1]) left++; // 去重
        while (left < right && nums[right] === nums[right - 1]) right--; // 去重
        // 在出现 result = 0 的情况时，通过 left 右移和 right 左移，使 nums[left] 变大，nums[right] 变小来尝试构造新的三元组。（如果只是单纯地移动 left 或只移动 right 则不可能构造出新的三元组）
        left++;
        right--;
      } else if (result < 0) {
        left++;
      } else if (result > 0) {
        right--;
      }
    }
  }
  return counts;
};
