/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

/**
 * 给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树
 *
 * 思路：中序遍历二叉搜索树，在遍历过程中找到并记住两个相邻顺序不对的节点，最后交换这两个节点的值
 * 对于[1,2,3,4,5,6,7]，序列，交换2和5之后的序列是[1,5,3,4,2,6,7],
 * 能够发现，[5,3]和[4,2]顺序不对，因此记住前一组的第一个节点(5)和后一组的第二个节点(2)，交换即可
 *
 */

const tree = require("./buildTree");
var recoverTree = function (root) {
  //
  const stack = [];
  const values = [];
  let node = root;
  let firstNode = null;
  let secondNode = null;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      let prevNode = values[values.length - 1];
      if (prevNode && prevNode.val > node.val) {
        if (!firstNode) {
          firstNode = prevNode;
        }
        secondNode = node;
      }

      values.push(node);
      node = node.right;
    }
  }
  const temp = firstNode.val;
  firstNode.val = secondNode.val;
  secondNode.val = temp;
  return root;
};

// const t = tree.build([3, 1, 4, null, null, 2]);
const t = tree.build([1, 3, null, null, 2]);
console.log(tree.toList(recoverTree(t)));
