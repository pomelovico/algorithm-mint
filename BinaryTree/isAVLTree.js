/**
 * 判断是否为二叉平衡树
 */
const createTree = require("./createBinaryTreeByArr");

function isAVLTree(root) {
  // 置 -1 作为标记
  return isAVL(root) !== -1;

  function isAVL(root) {
    if (!root) {
      return 0;
    }
    const left = isAVL(root.left);
    const right = isAVL(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      // 不是平衡树
      return -1;
    }
    return Math.max(left, right) + 1;
  }
}

const tree = createTree([1, 2, 4, 3]);

console.log(isAVLTree(tree));
