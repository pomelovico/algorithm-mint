/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const { createLinkList, ListNode } = require("./structure");
var mergeTwoLists = function (l1, l2) {
  const head = (p = new ListNode());
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        p.next = l1;
        l1 = l1.next;
      } else {
        p.next = l2;
        l2 = l2.next;
      }
      p = p.next;
    } else if (l1) {
      p.next = l1;
      break;
    } else {
      p.next = l2;
      break;
    }
  }
  return head.next;
};

const l1 = createLinkList([1, 3, 5]);
const l2 = createLinkList([2, 4, 4.5]);

mergeTwoLists(l1, l2);
