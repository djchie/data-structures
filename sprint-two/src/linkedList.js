var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Complexity: O(1)
  list.addToTail = function(value){
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
      
    }
    this.tail = node;
  };

  // Complexity: O(1)
  list.removeHead = function(){
    if (this.head !== null) {
      var value = this.head.value;
      this.head = this.head.next;
      return value;
    } 
  };

  // Complexity: O(n)
  list.contains = function(target){
    var node = list.head;
    while((node !== null) && (node.value !== target)){
      node = node.next;
    }
    if (node !== null){
      return true;
    }
    else{
      return false;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
