/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const map = new Map();
  map.set("(", ")").set("[", "]").set("{", "}");
  const rightArr = Array.from(map.values());
  let stack = [];
  for (let char of s) {
    if (map.has(char)) stack.push(char);
    console.log(stack, 1);
    if (rightArr.includes(char)) {
      console.log(map.get(stack[stack.length - 1]), char, 2);

      if (map.get(stack[stack.length - 1]) !== char) {
        return false;
      }
      stack.pop(char);
    }
  }
  if (stack.length === 0) return true;
  return false;
};

isValid("()[]{}");
