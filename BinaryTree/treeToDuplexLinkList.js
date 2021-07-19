/**
 * 二叉搜索树转有序双向链表
 */

const { Tree } = require('../dataStructure/Tree');

// 递归
function binaryTreeToDuplexLinkList(root){
  if(!root){
    return null
  }
  const left = root.left;
  const right = root.right;
  delete root.left;
  delete root.right;
  root.prev= null;
  root.next = null;
  const prev = binaryTreeToDuplexLinkList(left);
  const next = binaryTreeToDuplexLinkList(right);

  if(prev){
    let head = prev;
    while(head.next){
      head = head.next;
    }
    root.prev = head;
    head.next = root;
  }

  root.next = next;
  if(next){
    next.prev = root;
  }

  return prev ? prev : root;
}

const tree = new Tree();

/**
 *        10
 *      8    12
 *    5   9    15
 *  1 
 */

tree.insert(10);
tree.insert(8);
tree.insert(12);
tree.insert(5);
tree.insert(15);
tree.insert(9);
tree.insert(1);

/**
 * list: 1 5 8 9 10 12 15
 */
const linkList = binaryTreeToDuplexLinkList(tree.root);

let head = linkList;
while(head){
  console.log(head.data);
  head = head.next;
}

// 迭代
// function binaryTreeToDuplexLinkList2(root){
//   const stack = [];
//   let prev = null;
//   let current = root;
//   while(current || stack.length){
//     while(current){
//       stack.push(current);
//       current = current.left;
//     }
//     const node = stack.pop();
//     node.prev = prev;
//     prev = node;
//     current = node.right;
//   }
// }
