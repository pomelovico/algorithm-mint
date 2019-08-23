/**
 * 镜像树
 */

 const { createTree } = require('../dataStructure/Tree');

 function mirrorTree(root){
   if(!root){
     return null;
   }
   let left = root.left;
   root.left = mirrorTree(root.right);
   root.right = mirrorTree(left);
   return root;
 }

const tree = createTree();
tree.inOrder();
console.log('------------------');
const node = mirrorTree(tree.root);
tree.inOrder(node);
