describe("equality string mechanism - eqlStr", function () {

  it ("should not wipeout Object prototype and be a mechanism", function() {
    var mech = m.eqlStr();
    expect(mech).to.have.property('toString');
    expect(m._.EqlStrF).to.not.eql(undefined);
  });

  it ("should have correct properties", function() {
    var mech = m.eqlStr("A","B");
    expect(mech.isMech).to.be.true;

    expect(mech).to.have.property('l');
    expect(mech).to.have.property('_l'); // imagined privacy

    expect(mech).to.have.property('r');
    expect(mech).to.have.property('_r'); // imagined privacy
  });

  it ("should consider null and undefined as equal numbers", function() {
    var mech = m.eqlStr();
    expect(mech.goBool).to.be.false;

    var mech2 = m.eqlStr(null);
    expect(mech2.goBool).to.be.false;

    var mech3 = m.eqlStr(null, null);
    expect(mech3.goBool).to.be.false;
  });

  it ("should consider two equal primitive values to be equal", function() {
    var mech = m.eqlStr(3, 3);
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two unequal primitive values to be equal", function() {
    var mech = m.eqlStr(3, 5);
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two equal string primitive values that are numeric to be equal", function() {
    var mech = m.eqlStr("3", "3");
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two un-equal string primitive values that are numeric to be equal", function() {
    var mech = m.eqlStr("3", "2");
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two equal mechanisms that are numeric to be equal", function() {
    var mech = m.eqlStr(m.num(45), m.num(45));
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two non-equal mechanisms that are numeric to be equal", function() {
    var mech = m.eqlStr(m.num(42), m.num(45));
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two equal mechanisms that are string to be equal", function() {
    var mech = m.eqlStr(m.str("hello!"), m.str("hello!"));
    expect(mech.goBool).to.be.true;
  });

  it ("should consider two non-equal mechanisms that are string to be equal", function() {
    var mech = m.eqlStr(m.str("45"), m.str("41"));
    expect(mech.goBool).to.be.false;
  });

  it ("should consider two non-equal mechanisms that are non-numeric string to be un-equal", function() {
    var mech = m.eqlStr(m.str("fourty"), m.str("eightye"));
    expect(mech.goBool).to.be.false;
  });

  it ("should consider NaN to be unequal (default of javascript but we may need to fix this?)", function() {
    var mech = m.eqlStr(NaN, NaN);
    expect(mech.goBool).to.be.false;
  });

});