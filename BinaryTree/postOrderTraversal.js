/**
 * 后序迭代遍历二叉树
 * 先左 后右 再中间
 */
const {createTree} = require('../dataStructure/Tree');

function postOrderTraversal(root){
  const stack= [];
  let current = root;
  let last = null; // 标记上一个被访问的节点
  while(current || stack.length > 0){
    if(current){
      stack.push(current);
      current = current.left;
    }else{
      // 先查看栈顶元素
      let top = stack[stack.length - 1];
      if(top.right === last || !top.right){
        current = stack.pop();
        current.show();
        last = current;
        current = null; // 继续出栈；
      }else{
        current = top.right;
      }
    }
  }
}

const tree = createTree();
tree.postOrder();
console.log('---------');
postOrderTraversal(tree.root);
