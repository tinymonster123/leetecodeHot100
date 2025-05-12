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

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return false;
    
    console.log("\n初始链表状态：");
    console.log("完整链表：", printList(head));
    console.log("初始节点详情：", printNodeDetails(head));
    
    let [slow, fast] = [head, head];
    let prev;
    let step = 0;
    
    console.log("\n开始寻找中点：");
    while (fast && fast.next) {
        step++;
        console.log(`\n第 ${step} 次移动快慢指针：`);
        console.log("当前slow指针：", printNodeDetails(slow));
        console.log("当前fast指针：", printNodeDetails(fast));
        
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
        
        console.log("移动后的状态：");
        console.log("slow移动到：", printNodeDetails(slow));
        console.log("fast移动到：", printNodeDetails(fast));
    }
    
    console.log("\n中点查找完成：");
    console.log("中点位置：", printNodeDetails(slow));
    
    if (prev) {
        prev.next = null;
        console.log("断开前半部分：", printList(head));
    }
    
    if (fast) {  // 奇数个节点
        console.log("\n奇数个节点，跳过中点：");
        slow = slow.next;
        console.log("跳过中点后：", printNodeDetails(slow));
    }
    
    console.log("\n开始反转后半部分：");
    let newHead = reverseList(slow);
    console.log("反转后的后半部分：", printList(newHead));
    
    console.log("\n开始比较两部分：");
    let firstHalf = head;
    let secondHalf = newHead;
    
    while (firstHalf && secondHalf) {
        console.log("\n比较节点：");
        console.log("前半部分节点：", printNodeDetails(firstHalf));
        console.log("后半部分节点：", printNodeDetails(secondHalf));
        
        if (firstHalf.val !== secondHalf.val) {
            console.log("找到不匹配节点，不是回文");
            return false;
        }
        
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    console.log("\n比较完成，是回文链表");
    return true;
};

function reverseList(head) {
    console.log("\n反转链表开始，原链表：", printList(head));
    let [prev, curr] = [null, head];
    let step = 0;
    
    while (curr) {
        step++;
        console.log(`\n第 ${step} 次反转：`);
        console.log("当前节点：", printNodeDetails(curr));
        
        [curr.next, prev, curr] = [prev, curr, curr.next];
        
        console.log("反转后状态：");
        console.log("已反转部分：", printList(prev));
        console.log("待反转部分：", printList(curr));
    }
    
    console.log("\n反转完成：", printList(prev));
    return prev;
}

// 测试代码
const testCases = [
    [1,0,0],
    [1, 2, 2, 1],      // 回文链表
    [1, 2, 3, 2, 1],   // 回文链表
    [1, 2, 3, 4],      // 非回文链表
    [1],               // 单节点
    [],                // 空链表
];

// 运行测试
testCases.forEach((testCase, index) => {
    console.log(`\n==================`);
    console.log(`测试用例 ${index + 1}：${testCase}`);
    const head = createLinkedList(testCase);
    console.log("测试结果：", isPalindrome(head));
    console.log(`==================\n`);
});
