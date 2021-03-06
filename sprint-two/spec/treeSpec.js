describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should be able to refer to a tree\'s parent', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should be able to disassociate a tree with its parent by removeFromParent', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    tree.children[0].addChild(3);
    var parentLessNode = tree.children[0].children[0];
    expect(tree.children[0].children[0].value).to.equal(6);
    expect(tree.children[0].children[1].value).to.equal(3);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].children[0].value).not.to.equal(6);
    expect(parentLessNode.parent).to.equal(null);
  });

  it('should execute a callback on each value in the tree', function() {
    var array = [];
    var func = function(value){
      array.push(value); 
    };
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(7);
    tree.addChild(8);
    tree.traverse(func);
    expect(array).to.eql([5,6,7,8]);
  });

  it('should execute a callback on each value in a nested tree', function() {
    var array = [];
    var func = function(value){
      array.push(value); 
    };
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(7);
    tree.addChild(8);
    tree.children[0].addChild(9);
    tree.traverse(func);
    expect(array).to.eql([5,9,6,7,8]);
  });

});
