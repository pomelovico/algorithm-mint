/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const tree = require("./buildTree");

var zigzagLevelOrder = function (root) {
  let queue = [root];
  let direction = 1;
  const arr = [];
  while (queue.length && root) {
    const nextQueue = [];
    const tempArr = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      tempArr[direction ? "push" : "unshift"](node.val);
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    arr.push(tempArr);
    queue = nextQueue;
    // 异或
    direction ^= 1;
  }
  return arr;
};

const t = tree.build([3, 9, 20, null, null, 15, 7]);

console.log("====> ", zigzagLevelOrder(t));
