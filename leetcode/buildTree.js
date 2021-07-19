function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const build = (arr) => {
  const root = new TreeNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length; i += 2) {
    const left = arr[i];
    const right = arr[i + 1];
    const node = queue.shift();
    if (left !== undefined && left !== null) {
      const leftNode = new TreeNode(left);
      node.left = leftNode;
      queue.push(leftNode);
    }
    if (right !== undefined && right !== null) {
      const rightNode = new TreeNode(right);
      node.right = rightNode;
      queue.push(rightNode);
    }
  }

  return root;
};

const toList = (root) => {
  const queue = [root];
  const list = [];
  while (queue.length) {
    const node = queue.shift();
    list.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return list;
};

const inOrder = (root) => {
  let node = root;
  const stack = [root];
  const list = [];
  while (stack.length) {
    while (node && node.left) {
      stack.push(node.left);
      node = node.left;
    }

    node = stack.pop();
    list.push(node.val);
    if (node.right) {
      stack.push(node.right);
      node = node.right;
    } else {
      node = null;
    }
  }
  return list;
};

module.exports = {
  build,
  toList,
};
