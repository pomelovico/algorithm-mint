function ListNode(val) {
  this.val = val;
  this.next = null;
}

const creatList = (arr) => {
  const first = new ListNode(arr.shift());
  arr.reduce((list, next) => {
    const t = new ListNode(next);
    list.next = t;
    return t;
  }, first);
  return first;
};

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = (ptr = new ListNode("head"));
  while (l1 || l2) {
    const next = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = next >= 10 ? 1 : 0;
    ptr.next = new ListNode(next % 10);
    ptr = ptr.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (carry) {
    ptr.next = new ListNode(1);
  }
  return head.next;
};

console.log(addTwoNumbers(creatList([2, 4, 3]), creatList([5, 6, 4])));
