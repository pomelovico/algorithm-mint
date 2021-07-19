/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const { createLinkList, ListNode } = require("./structure");

const buildList = (stack) => {
  let h = new ListNode();
  stack.reduceRight((head, next) => {
    next.next = null;
    head.next = next;
    return next;
  }, h);
  return h.next;
};

var reverseKGroup = function (head, k) {
  if (!head || k === 1) {
    return head;
  }
  const stack = [];
  let count = 0;
  let p = head;
  let h = new ListNode();
  h.next = head;
  let ph = h;
  while (p) {
    count++;
    // 节点入栈
    stack.push(p);
    p = p.next;
    if (count === k) {
      // 翻转
      const hh = buildList(stack);
      // 链接至上个节点尾部
      ph.next = hh;
      // 移动到翻转后的尾部
      ph = stack[0];
      ph.next = p;
      // 重置
      stack.length = 0;
      count = 0;
    }
  }

  return h.next;
};

const list = createLinkList([2, 3, 4, 5, 6, 7, 8, 9]);

console.log(reverseKGroup(list, 2));
