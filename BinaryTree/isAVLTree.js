/**
 * 判断是否为二叉平衡树
 */
const { Tree } = require('../dataStructure/Tree');

function isAVLTree(root){
  // 置 -1 作为标记
  return isAVL(root) !== -1;

  function isAVL(root){
    if(!root){
      return 0;
    }
    const left = isAVL(root.left);
    const right = isAVL(root.right);
    if(left === -1 || right === -1 || Math.abs(left - right) > 1 ){
      // 不是平衡树
      return -1;
    }
    return Math.max(left, right) + 1;
  }
}
const tree = new Tree();

tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(8);
// tree.insert(9);

console.log(isAVLTree(tree.root));

