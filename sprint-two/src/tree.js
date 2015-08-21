var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// Complexity: O(1)
treeMethods.addChild = function(value){
  var childTree = Tree(value);
  childTree.parent = this;
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

treeMethods.removeFromParent = function(){
  var index = -1;
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i].value === this.value) {
      index = i;
      break;
    }
  }
  this.parent.children.splice(index, 1);
  this.parent = null;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
