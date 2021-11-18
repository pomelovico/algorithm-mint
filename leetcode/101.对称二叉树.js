/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const tree = require("./buildTree");

var isSymmetric = function (root) {
  const check = (p, q) => {
    if (p && q && q.val === p.val) {
      return check(p.left, q.right) && check(p.right, q.left);
    }
    if (!p && !q) {
      return true;
    }
    return false;
  };
  return check(root, root);
};

const t = tree.build([1, 2, 2, 3, 4, 4, 3]);
// const t = tree.build([1, 2, 2, 2, null, 2]);

console.log("===> isSymmetric: ", isSymmetric(t));
