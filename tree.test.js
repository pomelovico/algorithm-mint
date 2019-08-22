const {Tree} = require('./dataStructure/Tree');

const tree = new Tree();

tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(9);
tree.insert(-1);
tree.insert(24);

// tree.inOrder();

console.log(tree.min())
console.log(tree.max())

console.log(tree.find(6));
