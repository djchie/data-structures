var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Complexity: O(1)
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if (bucket === undefined){
    bucket = [];
    this._storage.set(i, bucket);
  }
  var hasValue = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      hasValue = true;
    }
  }
  if (!hasValue) {
    bucket.push([k,v]);
  }
};

// Complexity: O(1)
HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
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
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i,1);
      return true;
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
