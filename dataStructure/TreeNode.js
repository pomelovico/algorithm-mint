function TreeNode(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

TreeNode.prototype.show = function(){
  console.log(`Node value: ${this.data}`);
}

module.exports = TreeNode;