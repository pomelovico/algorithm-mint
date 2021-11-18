/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const tree = require("./buildTree");
var isSameTree = function (p, q) {
  if (p && q) {
    if (p.val === q.val) {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
  }
  if (!p && !q) {
    return true;
  }
  return false;
};

const t1 = tree.build([1, 2, 1]);
const t2 = tree.build([1, 1, 2]);

console.log("====> same tree?:  ", isSameTree(t1, t2));
