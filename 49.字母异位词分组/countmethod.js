/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 计算字符串中每个字符出现的次数
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    let count = Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1; // 不能 char - "a" 因为 char 为字符串类型直接相减无法转化为 ASC 码
    }

    const key = count.join();
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }

  return Array.from(map.values());
};
