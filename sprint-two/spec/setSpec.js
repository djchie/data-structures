describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add numbers to a set', function(){
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(2)).to.equal(true);
    expect(set.contains(3)).to.equal(true);
    expect(set.contains(4)).to.equal(true);
  });

  it('should remove numbers from a set', function(){
    set.add(1);
    set.remove(1);
    expect(set.contains(1)).to.equal(false);
  });

  it('should add objects to a set', function(){
    var objectA = {'name':"Danny Glover"};
    var objectB = {'name':"Susan Sarandon"}
    set.add(objectA);
    set.add(objectB);
    expect(set.contains(objectA)).to.equal(true);
    expect(set.contains(objectB)).to.equal(true);
  });

  it('should remove objects from a set', function(){
    var object = {'name':"Mel Gibson"};
    set.add(object);
    set.remove(object);
    expect(set.contains(object)).to.equal(false);
  });

});
