var BloomFilter = function(){
  this._limit = 18;
  this._storage = Array.apply(null, Array(this._limit)).map(Number.prototype.valueOf,0);
};

// Complexity: O(1)
BloomFilter.prototype.insert = function(s){
  var i = getIndexBelowMaxForKey(s, this._limit);
  var j = getIndexByFNV(s, this._limit);
  var k = getIndexByMurmur(s, this._limit);
  this._storage[i] = 1;
  this._storage[j] = 1;
  this._storage[k] = 1;
};

// Complexity: O(1)
BloomFilter.prototype.checkElement = function(s){
  var i = getIndexBelowMaxForKey(s, this._limit);
  var j = getIndexByFNV(s, this._limit);
  var k = getIndexByMurmur(s, this._limit);
  return !!(this._storage[i] && this._storage[j] && this._storage[k]);
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
// Complexity: O(n)
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
// Complexity: O(n)
var getIndexByFNV = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<3) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
// Complexity: O(n)
var getIndexByMurmur = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<8) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
