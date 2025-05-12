/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 参考学习 map 特性后，可以使用哈希表方法来解决
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    // for 循环的时间复杂度为 O(n)
    const standardStr = str.split("").sort().join(""); //split 的时间复杂度为 O(k),sort 的时间复杂度为 O(klogk),join 的时间复杂度为 O(k),瓶颈主要在 sort
    // const standardStr = str.split().sort().join(); 输入：eta 输出：eta(split 不带参数会将字符串完整返回)
    // const standardStr = str.split("").sort().join(); 输入：eta 输出：a,e,t(join 不带参数会默认使用逗号进行拼接字符)
    console.log(standardStr);

    if (map.has(standardStr)) {
      map.get(standardStr).push(str);
    } else {
      map.set(standardStr, [str]);
    }
  }

  return Array.from(map.values());
};
