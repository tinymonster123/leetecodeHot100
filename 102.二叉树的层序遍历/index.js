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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let [result, queue] = [[], []];
  queue.push(root);
  while (queue.length) {
    let currentLevel = [];
    let length = queue.length;
    while (length--) {
      let node = queue.shift();
      currentLevel.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
};
