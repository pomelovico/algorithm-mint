const TreeNode = require("./TreeNode");

function preOrder(node) {
  if (node) {
    node.show();
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder(node) {
  if (node) {
    inOrder(node.left);
    node.show();
    inOrder(node.right);
  }
}

function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    node.show();
  }
}
function findNode(node, data) {
  if (node) {
    if (data === node.data) {
      return node;
    }
    return data < node.data
      ? findNode(node.left, data)
      : findNode(node.right, data);
  }
  return null;
}

function Tree() {
  this.root = null;
  this.compare = function (left, right) {
    if (right === right) {
      return 0;
    }
    return left > right ? -1 : 1;
  };
}

Tree.prototype.insert = function (data) {
  const node = new TreeNode(data, null, null);
  if (!this.root) {
    // 根结点空
    this.root = node;
    return;
  }
  let current = this.root;
  let parent = null; // 记录父节点
  while (current) {
    parent = current;
    if (data < parent.data) {
      // 小于当前节点，插入左子树
      current = current.left;
      if (!current) {
        parent.left = node;
        return;
      }
    } else {
      current = current.right;
      if (!current) {
        parent.right = node;
        return;
      }
    }
  }
};

// 先序
Tree.prototype.preOrder = function (node) {
  preOrder(node || this.root);
};

// 中序
Tree.prototype.inOrder = function (node) {
  inOrder(node || this.root);
};

// 后序
Tree.prototype.postOrder = function (node) {
  postOrder(node || this.root);
};

// 最小,  最左叶子
Tree.prototype.min = function () {
  let current = this.root;
  while (current) {
    if (!current.left) {
      return current;
    }
    current = current.left;
  }
};

// 最大,  最右叶子
Tree.prototype.max = function () {
  let current = this.root;
  while (current) {
    if (!current.right) {
      return current;
    }
    current = current.right;
  }
};

// 树的深度
Tree.prototype.depth = function (node, depth) {
  depth = depth || 0;
  if (!node) {
    return depth;
  }
  const leftDepth = this.depth(node.left, depth + 1);
  const rightDepth = this.depth(node.right, depth + 1);
  return Math.max(leftDepth, rightDepth);
};

// 查找
Tree.prototype.find = function (data, node) {
  return findNode(node || this.root, data);
};

function createTree() {
  const dataSet = [3, 5, 6, -1, 56, 89, 2, 10, -7];
  const tree = new Tree();
  dataSet.forEach((data) => {
    tree.insert(data);
  });
  return tree;
}

function createRandomTree(count = 10) {
  const tree = new Tree();
  Array.from({ length: count })
    .fill("")
    .forEach(() => {
      tree.insert(Math.floor(Math.random() * 100));
    });
  return tree;
}

module.exports.Tree = Tree;
module.exports.createTree = createTree;
module.exports.createRandomTree = createRandomTree;
