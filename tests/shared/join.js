describe("joining mechanism - join", function() {

  it("should not wipeout Object prototype and be a mechanism", function() {
    var mech = m.join([]);
    expect(mech).to.have.property('toString');
    expect(m._.JoinF).to.not.eql(undefined);
  });

  it("should have correct properties", function() {
    var mech = m.join([]);
    expect(mech.isMech).to.be.true;
  });

  it("should join elements in an array defaulting to comma", function() {
    var mech = m.join([1, 2, 3, 4]);
    expect(mech.go).to.equal("1,2,3,4");
  });

  it("should join elements in an array using using our own token", function() {
    var mech = m.join([1, 2, 3], ":");
    expect(mech.go).to.equal("1:2:3");
  });

  it("should join elements in an array using using our own token", function() {
    var mech = m.join(["a", "b", "c"], ":");
    expect(mech.go).to.equal("a:b:c");
  });

  it("should join with no elements", function() {
    var mech = m.join([]);
    expect(mech.go).to.equal("");
  });

  it("should throw a range exception when not defined correctly", function() {
    var ex = false;
    try {
      var x = m.join();
    } catch (e) {
      expect(e.toString()).to.equal("RangeError: array must be defined.");
      ex = true;
    }
    expect(ex).to.be.true;
  });

  it("should require array to be an array type", function() {
    var ex = false;
    try {
      var x = m.join(5);
    } catch (e) {
      expect(e.toString()).to.equal("RangeError: array must be an array type.");
      ex = true;
    }
    expect(ex).to.be.true;
  });

  it("should join elements using an emitter", function() {
    var mech = m.join(m.map("a", 3), ":");
    expect(mech.go).to.equal("a:a:a");
  });

  it("should join elements using an emitter", function() {
    var mech = m.join(m.map("a", 3), ":");
    expect(mech.go).to.equal("a:a:a");
  });

  it("should join elements using an emitter", function() {
    var mech = m.join(m.map("q", 6));
    expect(mech.go).to.equal("q,q,q,q,q,q");
  });

  it("should require a mechanism to return an array type", function() {
    var ex = false;
    try {
      var x = m.join(m.num(5)).go;
    } catch (e) {
      expect(e.toString()).to.equal("RangeError: array must be an array type.");
      ex = true;
    }
    expect(ex).to.be.true;
  });

  it("should set _parDir of child mechanisms to parent", function() {
    var mech = m.num(1);
    var mech2 = m.num(2);
    var mech3 = m.join(mech, mech2);
    expect(mech._parDir).to.equal(mech3);
    expect(mech2._parDir).to.equal(mech3);
  });

});
