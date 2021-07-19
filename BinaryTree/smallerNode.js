const Node = require("../dataStructure/TreeNode");

/**
 * 找出数组中，当前元素右侧小于当前元素的个数，存放到该位置
 */
const arr = [5, 3, 6, 4, 1, 2]; // -> [4, 2, 3, 2, 0, 0];

function insert(val, node, i, prevSum, res) {
  if (!node) {
    const newNode = new Node(val);
    newNode.sum = 0;
    res[i] = prevSum;
    return newNode;
  }
  switch (true) {
    case val > node.data:
      node.right = insert(val, node.right, i, prevSum + node.sum + 1, res);
      break;
    case val < node.data:
      node.sum += 1;
      node.left = insert(val, node.left, i, prevSum, res);
      break;
    default:
  }
  return node;
}

function smaller(arr) {
  let res = [];
  //
  arr.reduceRight((root, next, i) => insert(next, root, i, 0, res), null);
  // for (let i = arr.length - 1; i >= 0; i -= 1) {
  //   root = insert(arr[i], root, i, 0, res);
  // }
  return res;
}

console.log(smaller(arr).toString());
