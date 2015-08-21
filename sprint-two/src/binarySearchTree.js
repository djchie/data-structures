var BinarySearchTree = function(value){
  var newBSTree = Object.create(BinarySearchTree.prototype);
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;
  return newBSTree;
};

// Complexity: O(log(n))
BinarySearchTree.prototype.insert = function(value){
  if (value < this.value){
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
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

// Complexity: O(log(n))
BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(value);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(value);
  }
}

// Complexity: O(log(n))
BinarySearchTree.prototype.breadthFirstLog = function(callback){
  callback(this.value);
  if (this.left !== null) {
    this.left.breadthFirstLog(value);
  }
  if (this.right !== null) {
    this.right.breadthFirstLog(value);
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
