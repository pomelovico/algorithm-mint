function ListNode(val) {
  this.val = val;
  this.next = null;
}

const createLinkList = (arr) => {
  const head = new ListNode(null);
  arr.reduce((list, next) => {
    const node = new ListNode(next);
    list.next = node;
    return node;
  }, head);

  return head.next;
};

module.exports = {
  ListNode,
  createLinkList,
};
