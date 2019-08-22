/**
 * 非递归版二叉树中序遍历
 */

const {createTree} = require('../dataStructure/Tree');

function inOrderTraversal(root){
    let stack = [];
    let current = root;
    while(current || stack.length > 0){
        if(current){
            stack.push(current);
            current = current.left;
        }else{
            const node = stack.pop();
            node.show();
            current = node.right;
        }
    }
}

const tree = createTree();
tree.inOrder();
console.log('-------------------')
inOrderTraversal(createTree().root);