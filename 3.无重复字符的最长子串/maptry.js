/**
 * @param {string} s
 * @return {number}
 */

let getLongestSubStr = function (strs) {
  let nums = [];
  for (let str of strs) {
    nums.push(str.length);
  }
  return Math.max(...nums);
};

let setNewString = function (strs, char) {
  let i = 0;
  for (; i < strs.length; i++) {
    if (strs[i] === char) break;
  }

  i += 1;
  if (i < strs.length) return strs.slice(i);
  return null;
};

var lengthOfLongestSubstring = function (s) {
  if (s === "") return 0;
  let subStrArr = [];
  const map = new Map();
  let prev;
  for (let char of s) {
    if (map.has(char)) {
      let subStr = Array.from(map.values()).join("");
      subStrArr.push(subStr);
      console.log(subStr);

      let key = setNewString(subStr, char);
      map.clear();
      if (key) map.set(key, key);
      map.set(char, char);
    } else {
      map.set(char, char);
    }

    prev = char;
  }

  //处理字符串中不存在重复字符的情况
  if (map.size > 0) {
    let subStr = Array.from(map.values()).join("");
    console.log(subStr);

    subStrArr.push(subStr);
  }

  return getLongestSubStr(subStrArr);
};

lengthOfLongestSubstring("abcabcbb");
