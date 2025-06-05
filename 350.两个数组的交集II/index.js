/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  nums1.forEach((value) => {
    if (map.has(value)) {
      map.set(value, map.get(value) + 1);
    } else {
      map.set(value, 1);
    }
  });
  const res = [];
  nums2.forEach((value) => {
    if (map.has(value) && map.get(value)) {
      map.set(value, map.get(value) - 1);
      res.push(value);
    }
  });
  return res;
};
