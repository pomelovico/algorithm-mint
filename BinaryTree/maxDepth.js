/**
 * 二叉树最大深度
 */

 const { createRandomTree, createTree, Tree } = require('../dataStructure/Tree');

 function maxDepth(root){
   return !root ? 0 : Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
 }

//  console.log(maxDepth(createRandomTree(20).root));

const tree = new Tree();

tree.insert(6);
tree.insert(4);
tree.insert(3);
tree.insert(9);
tree.insert(20);
tree.insert(100);

console.log(maxDepth(tree.root));


