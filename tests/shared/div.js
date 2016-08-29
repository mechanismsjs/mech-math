describe("divide mechanism - div", function() {

  it("should not wipeout Object prototype and be a mechanism", function() {
    var mech = m.div();
    expect(mech).to.have.property('toString');
    expect(m._.DivF).to.not.eql(undefined);
  });

  it("should have correct properties", function() {
    var mech = m.div(1, 2);
    expect(mech.isMech).to.be.true;

    expect(mech).to.have.property('l');
    expect(mech).to.have.property('_l'); // imagined privacy

    expect(mech).to.have.property('r');
    expect(mech).to.have.property('_r'); // imagined privacy

  });

  it("div() should have same behaivor as dualArg()", function() {
    var mech = m.div();
    expect(mech.l).to.eql(undefined);
    expect(mech.r).to.eql(undefined);

    expect(mech.go).to.eql(undefined);
    expect(mech.goNum).to.eql(undefined);
    expect(mech.goStr).to.equal("(undefined / undefined)");
    expect(mech.goArr[0]).to.eql(undefined);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(NaN,NaN) correctly", function() {
    var mech = m.div(NaN, NaN);
    expect(mech.l).to.eql(NaN);
    expect(mech.r).to.eql(NaN);

    expect(mech.go).to.eql(NaN);
    expect(mech.goNum).to.eql(NaN);
    expect(mech.goStr).to.equal("(NaN / NaN)");
    expect(mech.goArr[0]).to.eql(NaN);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(null,null) correctly", function() {
    var mech = m.div(null, null);
    expect(mech.l).to.eql(undefined);
    expect(mech.r).to.eql(undefined);

    expect(mech.go).to.eql(undefined);
    expect(mech.goNum).to.eql(undefined);
    expect(mech.goStr).to.equal("(undefined / undefined)");
    expect(mech.goArr[0]).to.eql(undefined);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(undefined,undefined) correctly", function() {
    var mech = m.div(undefined, undefined);
    expect(mech.l).to.eql(undefined);
    expect(mech.r).to.eql(undefined);

    expect(mech.go).to.eql(undefined);
    expect(mech.goNum).to.eql(undefined);
    expect(mech.goStr).to.equal("(undefined / undefined)");
    expect(mech.goArr[0]).to.eql(undefined);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(0, 0) correctly", function() {
    var mech = m.div(0, 0);
    expect(mech.l).to.equal(0);
    expect(mech.r).to.equal(0);

    expect(mech.go).to.eql(NaN);
    expect(mech.goNum).to.eql(NaN);
    expect(mech.goStr).to.equal("(0 / 0)");
    expect(mech.goArr[0]).to.eql(NaN);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(Infinity, Infinity) correctly", function() {
    var mech = m.div(Infinity, Infinity);
    expect(mech.l).to.equal(Infinity);
    expect(mech.r).to.equal(Infinity);

    expect(mech.go).to.eql(NaN);
    expect(mech.goNum).to.eql(NaN);
    expect(mech.goStr).to.equal("(Infinity / Infinity)");
    expect(mech.goArr[0]).to.eql(NaN);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(-Infinity, -Infinity) correctly", function() {
    var mech = m.div(-Infinity, -Infinity);
    expect(mech.l).to.equal(-Infinity);
    expect(mech.r).to.equal(-Infinity);

    expect(mech.go).to.eql(NaN);
    expect(mech.goNum).to.eql(NaN);
    expect(mech.goStr).to.equal("(-Infinity / -Infinity)");
    expect(mech.goArr[0]).to.eql(NaN);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(-Infinity, Infinity) correctly", function() {
    var mech = m.div(-Infinity, Infinity);
    expect(mech.l).to.equal(-Infinity);
    expect(mech.r).to.equal(Infinity);

    expect(mech.go).to.eql(NaN);
    expect(mech.goNum).to.eql(NaN);
    expect(mech.goStr).to.equal("(-Infinity / Infinity)");
    expect(mech.goArr[0]).to.eql(NaN);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div(10, -2) correctly", function() {
    var mech = m.div(10, -2);
    expect(mech.l).to.equal(10);
    expect(mech.r).to.equal(-2);

    expect(mech.go).to.equal(-5);
    expect(mech.goNum).to.equal(-5);
    expect(mech.goStr).to.equal("(10 / -2)");
    expect(mech.goArr).to.contain(-5);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should div nested operations correctly", function() {
    var mech = m.div(2, m.div(8, 4));
    expect(mech.l).to.equal(2);
    expect(mech.r.goNum).to.equal(2);

    expect(mech.go).to.equal(1);
    expect(mech.goNum).to.equal(1);
    expect(mech.goStr).to.equal("(2 / (8 / 4))");
    expect(mech.goArr).to.contain(1);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.true;

    var mech2 = m.div(m.div(m.num(3), m.num(-1)), -1);
    expect(mech2.l.goNum).to.equal(-3);
    expect(mech2.r).to.equal(-1);

    expect(mech2.go).to.equal(3);
    expect(mech2.goNum).to.equal(3);
    expect(mech2.goStr).to.equal("((3 / -1) / -1)");
    expect(mech2.goArr).to.contain(3);
    expect(mech2.goArr).to.have.length(1);
    expect(mech2.goBool).to.be.true;
  });

  it("should div('hi','hello') correctly", function() {
    var mech = m.div("hi", "hello");
    expect(mech.l).to.eql("hi");
    expect(mech.r).to.eql("hello");

    expect(mech.go).to.eql(NaN);
    expect(mech.goNum).to.eql(NaN);
    expect(mech.goStr).to.equal("(hi / hello)");
    expect(mech.goArr[0]).to.eql(NaN);
    expect(mech.goArr).to.have.length(1);
    expect(mech.goBool).to.be.false;
  });

  it("should play nicely with emitters", function() {

    var mech = m.div(m.emitFromArr([9, 3, 6]), 3);
    expect(mech.go).to.equal(3);
    expect(mech.goNum).to.equal(1);
    expect(mech.goNum).to.equal(2);
    expect(mech.goNum).to.eql(undefined);

    var mech2 = m.add(5, m.emitFromArr([3, 4, 5]));
    var first = mech2.go;
    var second = mech2.goNum;
    var third = mech2.goStr;
    var fourth = mech2.go;
    expect(first).to.equal(8);
    expect(second).to.equal(9);
    expect(third).to.equal('(5 + 5)');
    expect(fourth).to.eql(undefined);
  });

  it("should set _parDir of child mechanisms to parent", function() {
    var mech = m.num(1);
    var mech2 = m.num(2);
    var mech3 = m.div(mech, mech2);
    expect(mech._parDir).to.equal(mech3);
    expect(mech2._parDir).to.equal(mech3);
  });

});
