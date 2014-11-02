describe("equality string mechanism - eqlStr", function () {

  it ("should not wipeout Object prototype and be a mechanism", function() {
    var mech = m.eqlStr();
    expect(mech).to.have.property('toString');
    expect(m._.EqlStrF).to.not.eql(undefined);
  });

  it ("should have correct properties", function() {
    var mech = m.eqlStr(1,2);
    expect(mech.isMech).to.be.true;

    expect(mech).to.have.property('l');
    expect(mech).to.have.property('_l'); // imagined privacy

    expect(mech).to.have.property('r');
    expect(mech).to.have.property('_r'); // imagined privacy
  });

  it ("should consider null and undefined as equal numbers", function() {
    var mech = m.eqlStr();
    expect(mech.go).to.be.false;
    expect(mech.goNum).to.equal(0);
    expect(mech.goStr).to.equal("false");
    expect(mech.goArr).to.contain(false);
    expect(mech.goBool).to.be.false;

    var mech2 = m.eqlStr(null);
    expect(mech2.go).to.be.false;
    expect(mech2.goNum).to.equal(0);
    expect(mech2.goStr).to.equal("false");
    expect(mech2.goArr).to.contain(false);
    expect(mech2.goBool).to.be.false;

    var mech3 = m.eqlStr(null, null);
    expect(mech3.go).to.be.false;
    expect(mech3.goNum).to.equal(0);
    expect(mech3.goStr).to.equal("false");
    expect(mech3.goArr).to.contain(false);
    expect(mech3.goBool).to.be.false;
  });

  it ("should consider two equal primitive values to be equal", function() {
    var mech = m.eqlStr(3, 3);
    expect(mech.go).to.be.true;
    expect(mech.goNum).to.equal(1);
    expect(mech.goStr).to.equal("true");
    expect(mech.goArr).to.contain(true);
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two unequal primitive values to be equal", function() {
    var mech = m.eqlStr(3, 5);
    expect(mech.go).to.be.false;
    expect(mech.goNum).to.equal(0);
    expect(mech.goStr).to.equal("false");
    expect(mech.goArr).to.contain(false);
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two equal string primitive values that are numeric to be equal", function() {
    var mech = m.eqlStr("3", "3");
    expect(mech.go).to.be.true;
    expect(mech.goNum).to.equal(1);
    expect(mech.goStr).to.equal("true");
    expect(mech.goArr).to.contain(true);
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two un-equal string primitive values that are numeric to be equal", function() {
    var mech = m.eqlStr("3", "2");
    expect(mech.go).to.be.false;
    expect(mech.goNum).to.equal(0);
    expect(mech.goStr).to.equal("false");
    expect(mech.goArr).to.contain(false);
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two equal mechanisms that are numeric to be equal", function() {
    var mech = m.eqlStr(m.num(45), m.num(45));
    expect(mech.go).to.be.true;
    expect(mech.goNum).to.equal(1);
    expect(mech.goStr).to.equal("true");
    expect(mech.goArr).to.contain(true);
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two non-equal mechanisms that are numeric to be equal", function() {
    var mech = m.eqlStr(m.num(42), m.num(45));
    expect(mech.go).to.be.false;
    expect(mech.goNum).to.equal(0);
    expect(mech.goStr).to.equal("false");
    expect(mech.goArr).to.contain(false);
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two equal mechanisms that are string to be equal", function() {
    var mech = m.eqlStr(m.str("41"), m.str("41"));
    expect(mech.go).to.be.true;
    expect(mech.goNum).to.equal(1);
    expect(mech.goStr).to.equal("true");
    expect(mech.goArr).to.contain(true);
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two non-equal mechanisms that are string to be equal", function() {
    var mech = m.eqlStr(m.str("45"), m.str("41"));
    expect(mech.go).to.be.false;
    expect(mech.goNum).to.equal(0);
    expect(mech.goStr).to.equal("false");
    expect(mech.goArr).to.contain(false);
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two non-equal mechanisms that are non-numeric string to be un-equal", function() {
    var mech = m.eqlStr(m.str("fourty"), m.str("eightye"));
    expect(mech.go).to.be.false;
    expect(mech.goNum).to.equal(0);
    expect(mech.goStr).to.equal("false");
    expect(mech.goArr).to.contain(false);
    expect(mech.goBool).to.be.false;
  });

  it ("should consider NaN to be unequal (default of javascript but we may need to fix this?)", function() {
    var mech = m.eqlStr(NaN, NaN);
    expect(mech.go).to.be.false;
    expect(mech.goNum).to.equal(0);
    expect(mech.goStr).to.equal("false");
    expect(mech.goArr).to.contain(false);
    expect(mech.goBool).to.be.false;
  });

});