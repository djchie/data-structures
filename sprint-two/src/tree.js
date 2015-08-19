var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// Complexity: O(1)
treeMethods.addChild = function(value){
  var childTree = Tree(value);
  this.children.push(childTree);
};

// Complexity: O(n)
treeMethods.contains = function(target){
  var hasValue = false;
  if (this.value === target) {
    hasValue = true;
  }
  for (var i = 0; i < this.children.length; i++) {
    hasValue = hasValue || this.children[i].contains(target);
  }
  return hasValue;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
