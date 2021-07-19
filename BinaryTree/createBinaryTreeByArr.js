const TreeNode = require("../dataStructure/TreeNode");

const createBinaryTreeByArray = (list, index = 0) => {
  if (index < list.length && list[index] !== null) {
    const node = new TreeNode(list[index]);
    node.left = createBinaryTreeByArray(list, 2 * index + 1);
    node.right = createBinaryTreeByArray(list, 2 * index + 2);

    return node;
  }

  return null;
};

module.exports = createBinaryTreeByArray;
