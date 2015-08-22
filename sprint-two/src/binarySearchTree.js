var BinarySearchTree = function(value){
  var newBSTree = Object.create(BinarySearchTree.prototype);
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;
  newBSTree.depth = 1;
  newBSTree.root = newBSTree;
  return newBSTree;
};

// Max depth is the furthest path from root to leaf
// Min depth 
// Ex. min depth of Binary tree {1,2} is 2
// Rebalance when max depth is more than twice the min depth

// Complexity: O(log(n))
BinarySearchTree.prototype.insert = function(value){
  if (value < this.value){
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
      this.left.depth += this.depth;
      this.left.root = this.root;
      if (this.left.depth > 2 * this.root.findMinDepth()) {
        var nodes = [];
        this.root.breadthFirstLog(function(node){
          nodes.push(node);
        });
        
        nodes.sort(function(a,b) {return parseInt(a) - parseInt(b)});
        var middleIndex = Math.floor(nodes.length / 2);
        var node = new BinarySearchTree(nodes[middleIndex]);
        var leftArray = nodes.slice(0, middleIndex);
        var rightArray = nodes.slice(middleIndex + 1, nodes.length);
        this.root.value = nodes[middleIndex];
        this.root.left = this.balance(leftArray);
        this.root.right = this.balance(rightArray);
      }

    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      this.right.depth += this.depth;
      this.right.root = this.root;
      if (this.right.depth > 2 * this.root.findMinDepth()) {
        var nodes = [];
        this.root.breadthFirstLog(function(node){
          nodes.push(node);
        });

        nodes.sort(function(a,b) {return parseInt(a) - parseInt(b)});
        var middleIndex = Math.floor(nodes.length / 2);
        var node = new BinarySearchTree(nodes[middleIndex]);
        var leftArray = nodes.slice(0, middleIndex);
        var rightArray = nodes.slice(middleIndex + 1, nodes.length);
        this.root.value = nodes[middleIndex];
        this.root.left = this.balance(leftArray);
        this.root.right = this.balance(rightArray);
      }

    } else {
      this.right.insert(value);
    }
  }

  // Do a check for minimum depth
  // Do a check for maximum path
  // If mex depth is more than twice the min depth
  // --> rebalance
}

// Complexity: O(log(n))
BinarySearchTree.prototype.contains = function(value){
  var hasValue = false;
  if (value < this.value){
    if (this.left === null) {
      return false;
    } else {
      hasValue = hasValue || this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      hasValue = hasValue || this.right.contains(value);
    }
  }
  else{
    return true;
  }
  return hasValue;
}

// Complexity: O(n)
BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
}

// Complexity: O(n)
BinarySearchTree.prototype.breadthFirstLog = function(callback){
  var queue = [];
  queue.push(this);

  while(queue.length > 0) {
    var node = queue.shift();
    callback(node.value);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}

BinarySearchTree.prototype.findMinDepth = function(){
  if ((this.left === null) && (this.right === null)) {
    return 1;
  }
  if ((this.left !== null) && (this.right === null)) {
    return this.left.findMinDepth() + 1;
  }
  if ((this.left === null) && (this.right !== null)) {
    return this.right.findMinDepth() + 1;
  }
  if ((this.left !== null) && (this.right !== null)) {
    return Math.min(this.left.findMinDepth() + 1, this.right.findMinDepth() + 1);
  }
}

BinarySearchTree.prototype.balance = function(array) {
  if (array.length === 0) {
    return null;
  }
  var middleIndex = Math.floor(array.length / 2);
  var node = new BinarySearchTree(array[middleIndex]);
  var leftArray = array.slice(0, middleIndex);
  var rightArray = array.slice(middleIndex + 1, array.length);
  node.left = this.balance(leftArray);
  node.right = this.balance(rightArray);
  return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
