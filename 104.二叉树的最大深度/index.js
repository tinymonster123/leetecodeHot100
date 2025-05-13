/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function (root) {
//   if (!root) return 0;
//   let [result, queue] = [[], []];
//   queue.push(root);
//   while (queue.length) {
//     let length = queue.length;
//     let currentLevel = [];
//     while (length--) {
//       let node = queue.shift();
//       currentLevel.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     result.push(currentLevel);
//   }
//   return result.length;
// };
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
