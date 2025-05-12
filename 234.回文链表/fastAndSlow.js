/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//使用快慢指针的方法
var isPalindrome = function (head) {
  if (!head) return false;
  let [slow, fast] = [head, head];
  let prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (prev) prev.next = null;
  // if (fast) {
  //   slow = slow.next;
  //   let newHead = reverseList(slow);
  //   while (head) {
  //     if (head.val !== newHead.val) return false;
  //     head = head === null ? null : head.next;
  //     newHead = newHead === null ? null : newHead.next;
  //   }
  //   return true;
  // } else {
  //   let newHead = reverseList(slow);
  //   while (head) {
  //     if (head.val !== newHead.val) return false;
  //     head = head === null ? null : head.next;
  //     newHead = newHead === null ? null : newHead.next;
  //   }
  //   return true;
  // }
  if (fast) slow = slow.next;
  let newHead = reverseList(slow);
  while (head && newHead) {
    if (head.val !== newHead.val) return false;
    head = head.next;
    newHead = newHead.next;
  }
  return true;
};

function reverseList(head) {
  let [prev, curr] = [null, head];
  // while (curr) [curr.next, prev, curr] = [prev, curr, curr.next];
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}
