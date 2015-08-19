var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};

  return extend(someInstance, stackMethods);
};

var stackMethods = {
    push : function(value){
        this.storage[this.size()] = value;
  },

  pop : function(){
    var popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  },

  size : function(){
    return Object.keys(this.storage).length;
  }
};

var extend  = function(obj) {
    for(var i = 1; i < arguments.length;i++){
      for(var defKey in arguments[i]){
        if (obj[defKey] === undefined){
          obj[defKey] = arguments[i][defKey];
        }
      }
    }
    return obj;
  };



