/**
 * 根据序列重建二叉树
 */

const { Tree } = require('../dataStructure/Tree');
const TreeNode = require('../dataStructure/TreeNode');

const preOrder = [1,2,4,7,3,5,6,8];
const inOrder = [4,7,2,1,5,3,8,6];

// 基于先序序列 & 中序序列重建
/**
 * 从先序序列中获取根结点，根据节点将中序序列截取成左右两个子序列，
 * 同样，先序序列也取出左右两边的子序列，继续递归构建
 * @param {array} preOrder 
 * @param {array} inOrder 
 */
function rebuildWithPreAndInOrder(preOrder, inOrder){
  if(preOrder.length === 0){
    return null;
  }
  if(preOrder.length === 1){
    return new TreeNode(preOrder[0]);
  }
  const rootData = preOrder[0];
  // 找到根结点位置
  const index = inOrder.indexOf(rootData);
  const inLeft = inOrder.slice(0,index);
  const inRight = inOrder.slice(index+1);
  const preLeft = preOrder.slice(1,index+1);
  const preRight = preOrder.slice(index+1);

  const node = new TreeNode(rootData);
  node.left = rebuildWithPreAndInOrder(preLeft,inLeft);
  node.right = rebuildWithPreAndInOrder(preRight, inRight);
  return node;
}

const root = rebuildWithPreAndInOrder(preOrder,inOrder);

const tree = new Tree();

// tree.inOrder(root);
// tree.preOrder(root);