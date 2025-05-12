/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let row of matrix) {
    if (row.includes(target)) return true;
  }
  return false;
};
