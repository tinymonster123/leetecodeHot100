/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;
  let temp1 = list1,
    temp2 = list2;
  while (temp1.next) {
    temp1 = temp1.next;
  }
  temp1.next = temp2;
  let newTemp = list1;
  let vals = [];
  while (newTemp) {
    vals.push(newTemp.val);
    newTemp = newTemp.next;
  }
  vals.sort((a, b) => a - b); // 升序排列
  let otherTemp = list1;
  for (let val of vals) {
    otherTemp.val = val;
    otherTemp = otherTemp.next;
  }
  return list1;
};
