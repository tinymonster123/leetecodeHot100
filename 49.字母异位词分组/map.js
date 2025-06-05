var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const item = Array.from(str).sort().join("");
    if (map.has(item)) {
      map.get(item).push(str);
    } else {
      map.set(item, [str]);
    }
  }
  return Array.from(map.values());
};
