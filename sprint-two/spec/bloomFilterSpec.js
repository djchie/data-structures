describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  // it('should have methods named "insert", "remove", and "retrieve', function() {
  //   expect(hashTable.insert).to.be.a("function");
  //   expect(hashTable.remove).to.be.a("function");
  //   expect(hashTable.retrieve).to.be.a("function");
  // });

  it('should maybe contain values that were inserted', function() {
    bloomFilter.insert("Ben");
    bloomFilter.insert("Derrick");
    bloomFilter.insert("Kyle");
    bloomFilter.insert("Laura");
    bloomFilter.insert("Daniel");
    expect(bloomFilter.checkElement("Ben")).to.equal(true);
    expect(bloomFilter.checkElement("Derrick")).to.equal(true);
    expect(bloomFilter.checkElement("Kyle")).to.equal(true);
    expect(bloomFilter.checkElement("Laura")).to.equal(true);
    expect(bloomFilter.checkElement("Daniel")).to.equal(true);
  });

  it('should maybe contain values that was not inserted, but has valid hashes', function() {
    bloomFilter.insert("Ben");
    bloomFilter.insert("Derrick");
    bloomFilter.insert("Kyle");
    bloomFilter.insert("Laura");
    bloomFilter.insert("Daniel");
    bloomFilter.insert("John");
    bloomFilter.insert("Michael");
    bloomFilter.insert("David");
    bloomFilter.insert("Alex");
    bloomFilter.insert("Cameron");
    bloomFilter.insert("Nate");
    expect(bloomFilter.checkElement("Cynthia")).to.equal(true);
    expect(bloomFilter.checkElement("Naomi")).to.equal(true);
  });

  it('should not contain values that with non-existing hashes', function() {
    bloomFilter.insert("Ben");
    bloomFilter.insert("Derrick");
    bloomFilter.insert("Kyle");
    expect(bloomFilter.checkElement("Laura")).to.equal(false);
    expect(bloomFilter.checkElement("Daniel")).to.equal(false);
  });
});
