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
 * @return {boolean}
 */

const tree = require("./buildTree");

var isValidBST = function (root) {
  let node = root;
  const stack = [];
  const list = [];
  while (stack.length || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      if (list[list.length - 1] >= node.val) {
        return false;
      }
      list.push(node.val);
      node = node.right;
    }
  }
  return true;
};

console.log(isValidBST(tree.build([34, -6, null, -21])));
