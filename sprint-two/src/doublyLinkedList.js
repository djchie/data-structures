var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // Complexity: O(1)
  list.addToTail = function(value){
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
  };

  // Complexity: O(1)
  list.removeHead = function(){
    if (this.head !== null) {
      var value = this.head.value;
      if (this.head.next !== null) {
        this.head = this.head.next;
        this.head.previous = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      return value;
    } 
  };

  // Complexity: O(n)
  list.contains = function(target){
    var node = list.head;
    var hasTarget = false;
    while((node !== null) && (node!== undefined)){
      if (node.value === target) {
        hasTarget = true;
      }
      node = node.next;
    }
    return hasTarget;
  };

  // Complexity: O(1)
  list.addToHead = function(value){
    var node = Node(value);
    if (this.tail === null) {
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
    }
    this.head = node;
  };

  // Complexity: O(1)
  list.removeTail = function(value){
    if (this.tail !== null){
      var value = this.tail.value;
      if (this.tail.previous !== null){
        this.tail = this.tail.previous;
        this.tail.next = null;
      }
      return value;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
