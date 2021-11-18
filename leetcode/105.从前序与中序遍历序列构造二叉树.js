/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
const { TreeNode } = require("./buildTree");
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const build = (rootVal, inorder) => {
    if (rootVal === undefined) {
      return null;
    }
    const root = new TreeNode(rootVal);
    const indexOfRootInInOrder = inorder.indexOf(rootVal);
    const left = inorder.slice(0, indexOfRootInInOrder);
    const right = inorder.slice(indexOfRootInInOrder + 1);

    root.left = left.length ? build(preorder.shift(), left) : null;
    root.right = right.length ? build(preorder.shift(), right) : null;

    return root;
  };

  return build(preorder.shift(), inorder);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
