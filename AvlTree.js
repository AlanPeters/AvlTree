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

//Called by Insert to add a new node beyond the root
AvlTree.prototype.insertDown = function(rootNode, newNode){
    if(newNode.value < rootNode.value){
        if(rootNode.left === undefined){
            rootNode.left = newNode;
            rootNode.balance++;
        }else{
             rootNode.balance += this.insertDown(rootNode.left, newNode);
             var tempNode = this.balance(rootNode.left);
             if(tempNode !== rootNode.left) rootNode.balance -= 1;
             rootNode.left = tempNode;
        }
    }else{
        if(rootNode.right === undefined){
            rootNode.right = newNode;
            rootNode.balance--;
        }else{
             rootNode.balance -= this.insertDown(rootNode.right, newNode);
             var tempNode = this.balance(rootNode.right);
             if(tempNode !== rootNode.right) rootNode.balance += 1;
             rootNode.right = tempNode;
        }
    }
    if(rootNode.balance === 0){
        return 0;
    }
    return 1;
}

//Called by each node when another node is added below.
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

AvlTree.prototype.printTree = function(){
    var position = 1;
    var numlayers = 1;
    var items = [];
    if(this.root === undefined){
        return "Empty tree";
    }
    var height = this.addToArray(this.root, position, items);
    var height2 = Math.ceil(Math.log(items.length)/Math.log(2));
    console.log(height+":"+height2);
//    console.log(height);
//    console.log(items.length);

    console.log(items);

    var layers = [""];
    for(var i = 0; i < height; i++){
        var spacing = Math.pow(2,height - i);
        var offset = Math.pow(2,i);
        layers[i] = Array(Math.floor(spacing/2)).join(" ");
        for(var k = offset; k < Math.pow(2,i+1); k++){
             layers[i] += items[k] === undefined ? " ": items[k];
             layers[i] += Array(spacing).join(" ");
        }
    }



    layers.map(function(value){console.log(value)});

    return layers;

}

AvlTree.prototype.addToArray = function(node, position, array){
    //array[position] = node.value;
    if(node.balance === 1){ array[position] = "+";}
    else if(node.balance === -1){ array[position] = "-"; }
    else { array[position] = node.balance }

    var left = 1;
    var right = 1;
    if(node.left !== undefined){
        left += this.addToArray(node.left,position*2,array);
    }
    if(node.right !== undefined){
        right += this.addToArray(node.right,position*2+1,array);
    }
    return left > right ? left : right;
}

module.exports = AvlTree;


//       4
//   3       6
// 1   4   5   7
//1 2 3 4 5 6 7 8
