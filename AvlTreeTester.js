AvlTree = require("./AvlTree.js");

var tree = new AvlTree();
tree.insert(7);
console.log(tree);
tree.insert(5);
console.log(tree);
tree.insert(6);
console.log(tree);

//return;

tree.insert(2);
console.log(tree);
tree.printTree();
tree.insert(1);

console.log(tree);

tree.insert(9);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(2);
tree.insert(6);
tree.insert(0);
tree.insert(.5);

tree.printTree();

//console.log(tree.printTree());
