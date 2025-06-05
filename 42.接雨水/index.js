/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const [prevSum, sufSum] = [[], []];
  [prevSum[0], sufSum[height.length - 1]] = [
    height[0],
    height[height.length - 1],
  ];
  let res = 0;
  for (let i = 1; i < height.length; i++) {
    prevSum[i] = Math.max(height[i], prevSum[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    sufSum[i] = Math.max(height[i], sufSum[i + 1]);
  }
  for (let i = 0; i < height.length; i++) {
    const high = Math.min(prevSum[i], sufSum[i]) - height[i];
    res += high;
  }
  return res;
};
