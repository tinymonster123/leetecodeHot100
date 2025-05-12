/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  const map = new Map();
  let temp = head;
  while (temp) {
    if (map.has(temp)) {
      return true;
    } else {
      map.set(temp, temp);
      temp = temp.next;
    }
  }
  return false;
};
