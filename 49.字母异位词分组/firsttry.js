/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//第一次思考：遍历 string 数组中然后将每个 string 中的元素单独取出与剩余的元素中每个字符进行匹配(自己尝试失败)
var groupAnagrams = function (strs) {
  let stringResults = [];
  if (strs.length === 0 || strs.length === 1) {
    let stringResult = [strs[0]];
    stringResults.push(stringResult);
    return stringResults;
  }
  for (let i = 0; i < strs.length; i += 1) {
    let stringResult = [];
    let hasIndexArray = [];
    if (hasIndexArray.includes(i)) break;
    hasIndexArray.push(i);
    let subString = strs[i];
    stringResult.push(subString);
    // console.log(stringResult, 0);
    // console.log(subString, 1);
    for (let j = 0; j < strs.length; j += 1) {
      let otherSubString = strs[j];
      //   console.log(otherSubString, 2);

      if (i !== j) {
        let count = 0;
        for (let k = 0; k < subString.length; k += 1) {
          for (let x = 0; x < otherSubString.length; x += 1) {
            // console.log(count, 3);
            // console.log(subString[k], otherSubString[x], 6);
            if (stringResult.includes(otherSubString)) break;
            if (subString[k] === otherSubString[x]) count += 1;

            if (count === subString.length && count === otherSubString.length) {
              console.log(
                hasIndexArray.includes(j),
                stringResult.includes(otherSubString)
              );

              if (!hasIndexArray.includes(j)) hasIndexArray.push(j);

              stringResult.push(otherSubString);
              console.log(subString, otherSubString, 10);
            }
            if (!stringResults.includes(stringResult))
              stringResults.push(stringResult);
          }
        }
      }
    }
    // console.log(stringResults, 5);
  }
  return stringResults;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
