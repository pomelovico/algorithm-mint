/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const { createLinkList, ListNode } = require("./structure");

var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let s = head,
    f = head.next,
    p = new ListNode();
  p.next = head;

  const finalHead = head.next;

  while (f) {
    s.next = f.next;
    f.next = s;
    p.next = f;

    //
    p = s;
    if (!s.next) {
      break;
    }
    f = s.next.next;
    s = s.next;
  }

  return finalHead;
};

const list = createLinkList([2, 3, 4, 5, 6, 7, 9]);

console.log(swapPairs(list));
