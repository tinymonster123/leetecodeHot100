/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const res = [];
  set1.forEach((value) => {
    if (set2.has(value)) res.push(value);
  });
  return res;
};
