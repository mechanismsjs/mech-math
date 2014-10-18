describe("subtraction mechanism - sub", function () {

   it ("should not wipeout Object prototype and be a mechanism", function() {
     var mech = m.sub();
     expect(mech).to.have.property('toString');
     expect(m._.SubF).to.not.eql(undefined);
   });

   it ("should have correct properties", function() {
     var mech = m.sub(1,2);
     expect(mech.isMech).to.be.true;

     expect(mech).to.have.property('l');
     expect(mech).to.have.property('_l'); // imagined privacy

     expect(mech).to.have.property('r');
     expect(mech).to.have.property('_r'); // imagined privacy

   });

   it ("sub() should have same behaivor as dualArg()", function() {
      var mech = m.sub();
      expect(mech.l).to.eql(undefined);
      expect(mech.r).to.eql(undefined);
         
      expect(mech.go).to.eql(undefined);
      expect(mech.goNum).to.eql(undefined);
      expect(mech.goStr).to.equal("(undefined - undefined)");
      expect(mech.goArr[0]).to.eql(undefined);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should sub(NaN,NaN) correctly", function() {
      var mech = m.sub(NaN,NaN);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);

      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(NaN - NaN)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should sub(null,null) correctly", function() {
      var mech = m.sub(null,null);
      expect(mech.l).to.eql(undefined);
      expect(mech.r).to.eql(undefined);
         
      expect(mech.go).to.eql(undefined);
      expect(mech.goNum).to.eql(undefined);
      expect(mech.goStr).to.equal("(undefined - undefined)");
      expect(mech.goArr[0]).to.eql(undefined);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;

   });

   it ("should sub(undefined,undefined) correctly", function() {
      var mech = m.sub(undefined,undefined);
      expect(mech.l).to.eql(undefined);
      expect(mech.r).to.eql(undefined);
         
      expect(mech.go).to.eql(undefined);
      expect(mech.goNum).to.eql(undefined);
      expect(mech.goStr).to.equal("(undefined - undefined)");
      expect(mech.goArr[0]).to.eql(undefined);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });      

   it ("should sub(0, 0) correctly", function() {
      var mech = m.sub(0, 0);
      expect(mech.l).to.equal(0);
      expect(mech.r).to.equal(0);

      expect(mech.go).to.equal(0);
      expect(mech.goNum).to.equal(0);
      expect(mech.goStr).to.equal("(0 - 0)");
      expect(mech.goArr).to.contain(0);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should sub(Infinity, Infinity) correctly", function() {
      var mech = m.sub(Infinity, Infinity);
      expect(mech.l).to.equal(Infinity);
      expect(mech.r).to.equal(Infinity);
          
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(Infinity - Infinity)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should sub(-Infinity, -Infinity) correctly", function() {
      var mech = m.sub(-Infinity, -Infinity);
      expect(mech.l).to.equal(-Infinity);
      expect(mech.r).to.equal(-Infinity);

      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(-Infinity - -Infinity)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should sub(-Infinity, Infinity) correctly", function() {
      var mech = m.sub(-Infinity, Infinity);
      expect(mech.l).to.equal(-Infinity);
      expect(mech.r).to.equal(Infinity);

      expect(mech.go).to.equal(-Infinity);
      expect(mech.goNum).to.equal(-Infinity);
      expect(mech.goStr).to.equal("(-Infinity - Infinity)");
      expect(mech.goArr).to.contain(-Infinity);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should sub(1, 5) correctly", function() {
      var mech = m.sub(1, 5);
      expect(mech.l).to.equal(1);
      expect(mech.r).to.equal(5);

      expect(mech.go).to.equal(-4);
      expect(mech.goNum).to.equal(-4);
      expect(mech.goStr).to.equal("(1 - 5)");
      expect(mech.goArr).to.contain(-4);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should sub nested operations correctly", function() {
      var mech = m.sub(1, m.sub(3, 4));
      expect(mech.l).to.equal(1);
      expect(mech.r.goNum).to.equal(-1);

      expect(mech.go).to.equal(2);
      expect(mech.goNum).to.equal(2);
      expect(mech.goStr).to.equal("(1 - (3 - 4))");
      expect(mech.goArr).to.contain(2);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.true;

      var mech2 = m.sub( m.sub (m.num(3), m.num(-1) ), -1 );
      expect(mech2.l.goNum).to.equal(4);
      expect(mech2.r).to.equal(-1);

      expect(mech2.go).to.equal(5);
      expect(mech2.goNum).to.equal(5);
      expect(mech2.goStr).to.equal("((3 - -1) - -1)");
      expect(mech2.goArr).to.contain(5);
      expect(mech2.goArr).to.have.length(1);
      expect(mech2.goBool).to.be.true;
   });

   it ("should sub('hi','hello') correctly", function() {
      var mech = m.sub("hi","hello");
      expect(mech.l).to.eql("hi");
      expect(mech.r).to.eql("hello");

      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(hi - hello)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });      

   it ("should play nicely with emitters", function() {
      var mech = m.sub(-2, m.emitFromArr([9,2,8]));
      expect(mech.goNum).to.equal(-11);
      expect(mech.goNum).to.equal(-4);
      expect(mech.goNum).to.equal(-10);
      expect(mech.goNum).to.eql(undefined);
   });


});