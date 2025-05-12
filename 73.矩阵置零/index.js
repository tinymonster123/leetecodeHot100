/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const map = new Map();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        if (map.has(i)) {
          map.get(i).push(j);
        } else {
          map.set(i, [j]);
        }
      }
    }
  }
  map.forEach((value, key) => {
    for (let k = 0; k < matrix.length; k++) {
      if (k === key) {
        for (let z = 0; z < matrix[k].length; z++) {
          matrix[k][z] = 0;
        }
        continue;
      }
      for (let subVal of value) {
        matrix[k][subVal] = 0;
      }
    }
  });
};
