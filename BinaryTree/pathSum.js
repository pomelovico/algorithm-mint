/**
 * 找到和为指定整数的所有路径,
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径
 */

const { Tree } = require('../dataStructure/Tree');

function findSumPath(root, sum){
  const stack = [];
  const result = [];
  findCore(root, sum, stack, result);
  return result;

  function findCore(root, except, stack,result){
    if(!root || except < 0){
      return;
    }
    // 回溯
    stack.push(root.data);

    if(root.data === except && !root.right && !root.left){
      result.push(stack.slice(0));
    }
    findCore(root.left, except - root.data, stack, result);
    findCore(root.right, except - root.data, stack, result);

    // 该节点递归结束后出栈
    stack.pop();
  }
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

console.log(findSumPath(tree.root, 27).map(a=>a.join(',')).join('\n'));





