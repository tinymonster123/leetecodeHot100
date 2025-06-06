/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  res[0] = intervals[0];
  for (let interval of intervals) {
    let lastMerged = res[res.length - 1];
    if (lastMerged[1] >= interval[0]) {
      res[res.length - 1][1] = Math.max(interval[1], lastMerged[1]);
    } else {
      res.push(interval);
    }
  }
  return res;
};
