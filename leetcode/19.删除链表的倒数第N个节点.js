/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const { createLinkList, ListNode } = require("./structure");

var removeNthFromEnd = function (head, n) {
  let o = (p = q = head),
    count = 0;
  while (q !== null) {
    if (count >= n) {
      o = p;
      p = p.next;
    }
    count++;
    q = q.next;
  }
  if (p === head) {
    return head.next;
  }
  o.next = o.next.next;
  return head;
};

const link = createLinkList([2]);

const res = removeNthFromEnd(link, 1);

console.log(res);
