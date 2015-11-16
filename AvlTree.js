function AvlTree(){
    this.root = undefined;
}

AvlTree.prototype.insert = function(value){
    var node = {};
    node.value = value;
    node.balance = 0;

    if(this.root === undefined){
        this.root = node;
        return;
    }

    this.insertDown(this.root, node);

    this.root = this.balance(this.root);
}


AvlTree.prototype.insertDown = function(rootNode, newNode){
    if(newNode.value < rootNode.value){
        if(rootNode.left === undefined){
            rootNode.left = newNode;
            rootNode.balance++;
        }else{
             rootNode.balance += this.insertDown(rootNode.left, newNode);
             rootNode.left = this.balance(rootNode.left);
        }
    }else{
        if(rootNode.right === undefined){
            rootNode.right = newNode;
            rootNode.balance--;
        }else{
             rootNode.balance -= this.insertDown(rootNode.right, newNode);
             rootNode.right = this.balance(rootNode.right);
        }
    }
    if(rootNode.balance === 0){
        return 0;
    }
    return 1;
}

AvlTree.prototype.balance = function(rootNode){
    if(rootNode.balance === 2){
        if(rootNode.left.balance === -1){
            rootNode.left = this.rotateLeft(rootNode.left);
        }
        return this.rotateRight(rootNode);
    } else if(rootNode.balance === -2){
        if(rootNode.right.balance === 1){
            rootNode.right = this.rotateRight(rootNode.right);
        }
        return this.rotateLeft(rootNode);
    }
    return rootNode;
}

AvlTree.prototype.rotateRight = function(rootNode){
    var newRoot = rootNode.left;
    rootNode.left = newRoot.right;
    newRoot.right = rootNode;
    newRoot.balance = newRoot.left === undefined ? -1 : 0;
    rootNode.balance = 0;
    return newRoot;
}

AvlTree.prototype.rotateLeft = function(rootNode){
     var newRoot = rootNode.right;
     rootNode.right = newRoot.left;
     newRoot.left = rootNode;
     newRoot.balance = newRoot.right === undefined ? 1 : 0;
     rootNode.balance = 0;
     return newRoot;
}

module.exports = AvlTree;
