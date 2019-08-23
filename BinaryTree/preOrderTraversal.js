/**
 * 先序迭代遍历二叉树 
 */
const {createTree} = require('../dataStructure/Tree');


function preOrderTraversal(root){
  const stack = [];
  let current = root;
  while(current || stack.length > 0){
    if(current){
      current.show();
      stack.push(current);
      current = current.left;
    }else{
      const node = stack.pop();
      current = node.right;
    }
  }
}

const tree = createTree();
tree.preOrder();
console.log('---------------');

preOrderTraversal(tree.root);