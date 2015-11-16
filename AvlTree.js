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

    this.insertDown(this.head, node);
}


AvlTree.prototype.insertDown = function(rootNode, newNode){
    if(newNode.value < rootNode.value){
        if(rootNode.left === undefined){
            rootNode.left = newNode;
            rootNode.balance++;
        }else{
             rootNode.balance += this.insertDown(rootNode.left, newNode);
        }
    }else{
        if(rootNode.right === undefined){
            rootNode.right = newNode;
            rootNode.balance--;
        }else{
             rootNode.balance -= this.insertDown(rootNode.right, newNode);
        }
    }
    if(rootNode.balance === 0){
        return 0;
    }
    if(rootNode.balance === 2){
        if(rootNode.left.balance === -1){
            this.rotateLeft(rootNode.left);
        }
        this.rotateRight(rootNode);
    }else if(rootNode.balance === -2){
        if(rootNode.right.balance === -1){
             this.rotateRight(rootNode.right);
        }
        this.rotateLeft(rootNode);
    }






    return 1;
}

module.exports = AvlTree;
