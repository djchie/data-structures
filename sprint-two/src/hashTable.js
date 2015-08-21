var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  // Need the value below to set the minimum size in which halfSize stops
  this._minSize = 8;
};

// Complexity: O(1)
HashTable.prototype.insert = function(k, v){
  // We do a check for 75%, if over, we double size
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
    this._size++;
    if (this._size >= 0.75 * this._limit){
      this.doubleSize();
    }
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
      this._size--;
      bucket.splice(i,1);
      // We do a check for 25%, if under, we half size
      if ((this._size <= 0.25 * this._limit) && (this._limit > this._minSize)){
        this.halfSize();
      }
      return true;
    }
  }
};

HashTable.prototype.doubleSize = function(){
  var oldLimitedArray = this._storage;
  this._limit = this._limit * 2;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  var that = this;
  oldLimitedArray.each(function(bucket){
    if (bucket !== undefined){
      for(var i = 0;i < bucket.length;i++){
        that.insert(bucket[i][0],bucket[i][1]);
      }
    }
  });
};

HashTable.prototype.halfSize = function(){
  var oldLimitedArray = this._storage;
  this._limit = Math.floor(this._limit / 2);
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  var that = this;
  oldLimitedArray.each(function(bucket){
    if (bucket !== undefined){
      for(var i = 0;i < bucket.length;i++){
        that.insert(bucket[i][0],bucket[i][1]);
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
