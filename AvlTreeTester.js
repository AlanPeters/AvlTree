AvlTree = require("./AvlTree.js");

var tree = new AvlTree();
tree.insert2(7);
console.log(tree);
tree.insert2(5);
console.log(tree);
tree.insert2(6);
console.log(tree);

//return;

tree.insert2(2);
console.log(tree);
tree.printTree();
tree.insert2(1);

console.log(tree);

tree.insert2(9);
tree.insert2(5);
tree.insert2(15);
tree.insert2(1);
tree.insert2(2);
tree.insert2(6);
tree.insert2(0);
tree.insert2(.5);

tree.printTree();

//console.log(tree.printTree());
