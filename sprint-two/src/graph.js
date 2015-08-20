

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var hasNode = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      hasNode = true;
    }
  }
  return hasNode;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var index = this.nodes.indexOf(node);
  if (index !== -1) {
    this.nodes.splice(index, 1);
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var hasEdge = false;
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i].indexOf(fromNode) !== -1) && (this.edges[i].indexOf(toNode) !== -1)) {
      hasEdge = true;
    }
  }
  return hasEdge;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  var edge = [fromNode, toNode];
  this.edges.push(edge);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var edge = [fromNode, toNode];
  var index = -1;
  for (var i = 0; i < this.edges.length; i++) {
    if ((this.edges[i][0] === edge[0]) && (this.edges[i][1] === edge[1])) {
      this.edges.splice(i, 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


