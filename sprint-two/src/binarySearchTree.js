var BinarySearchTree = function(value){
  var newBSTree = Object.create(BinarySearchTree.prototype);
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;
  // newBSTree.depth = 0;
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
      // this.left.depth += this.depth + 1;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      // this.right.depth += this.depth + 1;
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
