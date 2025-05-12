/**
 * @param {number[]} height
 * @return {number}
 */
//存储了所有值会导致堆内存溢出
// var maxArea = function (height) {
//   let squres = [];
//   let head = 0;
//   for (; head < height.length; head += 1) {
//     let end = height.length - 1;
//     while (end > head) {
//       let distance = end - head;
//       let h = Math.min(height[end], height[head]);
//       let squre = distance * h;
//       squres.push(squre);
//       end -= 1;
//     }
//   }

//   let result = squres.reduce((res, squre) => Math.max(res, squre));

//   return result;
// };
//使用贪心策略
var maxArea = function (height) {
  let [head, end] = [0, height.length - 1];

  let maxSqure = 0;
  while (end > head) {
    maxSqure = Math.max(
      maxSqure,
      (end - head) * Math.min(height[head], height[end])
    );
    //题目的要求是找出最大值，我能够直接想到的思想就是找到所有可能值然后进行比较
    //但是如果输入值过多会造成堆溢出的情况
    //所有我们采用贪心策略
    //因为木桶盛水受限与最短的木板
    //通过移动最短的边来设想获得更大的面积（因为如果移动更大边，面积仍然受限与更短的边或者移动后变得更短的边宽度变小高度不变或变小则面积一定更小）
    //因为题目要求要找到最大面积，所以肯定是想找到比初始面积更大的面积
    //更小的面积则可排除在外就不必要被收集了
    if (height[end] > height[head]) {
      // 总是移动最短的一边
      head += 1;
    } else {
      end -= 1;
    }
  }

  return maxSqure;
};
