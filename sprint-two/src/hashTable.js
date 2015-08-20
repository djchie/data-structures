var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Complexity: O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if (bucket === undefined){
    bucket = {};
  }
  bucket[k] = v;
  this._storage.set(i, bucket);
};

// Complexity: O(1)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    return null;
  }
  for (var key in bucket) {
    if (key === k) {
      return bucket[key];
    }
  }
  return null;
};

// Complexity: O(1)
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    return false;
  }
  for (var key in bucket) {
    if (key === k) {
      delete bucket[key];
      return true;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



// Fails the collision test
/*
var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Complexity: O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
};

// Complexity: O(1)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

// Complexity: O(1)
HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};
*/


/*
 * Complexity: What is the time complexity of the above functions?
 */