// 辅助函数：打印节点详细信息
function printNodeDetails(node) {
  return {
    currentValue: node ? node.val : 'null',
    nextValue: node && node.next ? node.next.val : 'null',
    fullList: printList(node)
  };
}

// 辅助函数：打印链表
function printList(node) {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

// 创建链表节点的构造函数
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 创建测试用例的函数
function createLinkedList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// 回文链表判断函数
var isPalindrome = function(head) {
  // 打印初始状态
  console.log("\n初始链表状态：");
  console.log("完整链表：", printList(head));
  console.log("初始节点详情：", printNodeDetails(head));
  
  // 添加新的结构打印
  console.log("初始head节点结构：", {
    value: head ? head.val : 'null',
    next: head ? {
      value: head.next ? head.next.val : 'null',
      next: head.next ? (head.next.next ? head.next.next.val : 'null') : 'null'
    } : 'null'
  });

  let [prev, curr] = [null, head];
  let step = 0;
  
  while (curr) {
    step++;
    console.log(`\n第 ${step} 次循环：`);
    console.log("当前curr节点详情：", printNodeDetails(curr));
    
    // 保存下一个节点的信息
    let nextTemp = curr.next;
    console.log("下一个节点详情：", printNodeDetails(nextTemp));
    
    // 反转指针
    curr.next = prev;
    console.log("反转后curr节点详情：", printNodeDetails(curr));
    
    // 移动指针
    prev = curr;
    curr = nextTemp;
    
    // 打印当前状态
    console.log("反转后的链表：", printList(prev));
    console.log("原始head指向的结构：", printList(head));
    
    // 添加head节点结构的打印
    console.log("当前head节点结构：", {
      value: head ? head.val : 'null',
      next: head ? {
        value: head.next ? head.next.val : 'null',
        next: head.next ? (head.next.next ? head.next.next.val : 'null') : 'null'
      } : 'null'
    });
  }

  return false;
};

// 测试代码
const testCases = [
  [1, 2, 2, 1],  // 回文链表
  [1, 2, 3, 2, 1],  // 回文链表
  [1, 2, 3, 4],  // 非回文链表
];

// 运行测试
testCases.forEach((testCase, index) => {
  console.log(`\n测试用例 ${index + 1}：${testCase}`);
  const head = createLinkedList(testCase);
  console.log("测试结果：", isPalindrome(head));
});