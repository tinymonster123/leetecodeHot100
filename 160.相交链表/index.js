/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//采用双指针法
// 下面的方法有两个问题：
// 1.没有判断 headA 和 headB 是否为 0
// 2.判断条件会对有长度但是不相交的链表判断为相交因为最终都为 null（即我的代码会误判）
// var getIntersectionNode = function (headA, headB) {
//   let p1 = headA;
//   let p2 = headB;
//   while (!(p1.val === p2.val && p1.next == p2.next)) {
//     p1 = p1.next;
//     p2 = p2.next;
//     if (!p1) p1 = headB;
//     if (!p2) p2 = headA;
//   }
//   return p1;
// };

var getIntersectionNode = function (headA, headB) {
  let p1 = headA,
    p2 = headB;
  if(!headA || !headB) return null
  while(p1 !== p2){
    p1 = p1 === null ? headB : p1.next
    p2 = p2 === null ? headA : p2.next
  }
  return p1
};
