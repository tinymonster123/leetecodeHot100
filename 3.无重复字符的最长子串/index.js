/**
 * @param {string} s
 * @return {number}
 */
// 真正的滑动窗口算法通常有以下特征：

// 窗口平滑移动，而不是跳跃
// 当不满足条件时，窗口会从左侧收缩（移动左指针）
// 当需要探索更多可能性时，窗口会从右侧扩展（移动右指针）

var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let [prev, curr] = [0, 1];
  let subStr = s.slice(prev, curr);
  let maxLength = 0;
  while (curr < s.length) {
    if (subStr.includes(s[curr])) {
      maxLength = Math.max(maxLength, subStr.length);
      prev += jumpToTheIndex(subStr, s[curr]);
      if (curr === s.length - 1) break;
      curr++;
      subStr = s.slice(prev, curr);
    } else {
      curr++;
      subStr = s.slice(prev, curr);
    }
  }

  maxLength = Math.max(maxLength, subStr.length);
  return maxLength;
};

var jumpToTheIndex = function (s, char) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === char) return i + 1;
  }
};
