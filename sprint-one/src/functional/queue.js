var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function(){
    var dequeued;

    if (storage[0] !== undefined){
      dequeued = storage[0];
      delete storage[0];
      for(var indexStr in storage){
        var index = parseInt(indexStr);
        storage[index - 1] = storage[index];
      }
      delete storage[someInstance.size() - 1];
      return dequeued;
    }

    return undefined;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
