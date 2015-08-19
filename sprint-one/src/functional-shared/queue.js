var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  return extend(someInstance, queueMethods);
};

var queueMethods = {
    enqueue : function(value){
        this.storage[this.size()] = value;
    },

    dequeue : function(){
        var dequeued;

        if (this.storage[0] !== undefined){
          dequeued = this.storage[0];
          delete this.storage[0];
          for(var indexStr in this.storage){
            var index = parseInt(indexStr);
            this.storage[index - 1] = this.storage[index];
          }
          delete this.storage[this.size() - 1];
          return dequeued;
        }

        return undefined;
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


