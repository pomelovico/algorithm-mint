/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const arr = Array(n)
    .fill(0)
    .map((_, index) => index + 1);

  const build = (nodeArr) => {
    if (!nodeArr || !nodeArr.length) {
      return [null];
    }
    if (nodeArr.length === 1) {
      return [new TreeNode(nodeArr[0])];
    }
    const nodes = [];
    for (let i = 0; i < nodeArr.length; i++) {
      // 左子二叉树集合
      const builtSubLeftTreeNodes = build(nodeArr.slice(0, i));
      // 右子二叉树集合
      const builtSubRightTreeNodes = build(nodeArr.slice(i + 1));
      for (let j = 0; j < builtSubLeftTreeNodes.length; j++) {
        for (let k = 0; k < builtSubRightTreeNodes.length; k++) {
          nodes.push(
            new TreeNode(
              nodeArr[i],
              builtSubLeftTreeNodes[j],
              builtSubRightTreeNodes[k]
            )
          );
        }
      }
    }
    return nodes;
  };

  return build(arr);
};

console.log("====>  n= 3: ", generateTrees(3));
