describe("multiply mechanism - mul", function () {

   it ("should not wipeout Object prototype and be a mechanism", function() {
     var mech = m.mul();
     expect(mech).to.have.property('toString');
     expect(m._.MulF).to.not.eql(undefined);
   });

   it ("should have correct properties", function() {
     var mech = m.mul(1,2);
     expect(mech.isMech).to.be.true;
   
     expect(mech).to.have.property('l');
     expect(mech).to.have.property('_l'); // imagined privacy
   
     expect(mech).to.have.property('r');
     expect(mech).to.have.property('_r'); // imagined privacy
   
   });
   
   it ("mul() should have same behaivor as dualArg()", function() {
      var mech = m.mul();
      expect(mech.l).to.eql(undefined);
      expect(mech.r).to.eql(undefined);
         
      expect(mech.go).to.eql(undefined);
      expect(mech.goNum).to.eql(undefined);
      expect(mech.goStr).to.equal("(undefined * undefined)");
      expect(mech.goArr[0]).to.eql(undefined);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should mul(NaN,NaN) correctly", function() {
      var mech = m.mul(NaN,NaN);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(NaN * NaN)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should mul(null,null) correctly", function() {
      var mech = m.mul(null,null);
      expect(mech.l).to.eql(undefined);
      expect(mech.r).to.eql(undefined);
         
      expect(mech.go).to.eql(undefined);
      expect(mech.goNum).to.eql(undefined);
      expect(mech.goStr).to.equal("(undefined * undefined)");
      expect(mech.goArr[0]).to.eql(undefined);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should mul(undefined,undefined) correctly", function() {
      var mech = m.mul(undefined,undefined);
      expect(mech.l).to.eql(undefined);
      expect(mech.r).to.eql(undefined);
         
      expect(mech.go).to.eql(undefined);
      expect(mech.goNum).to.eql(undefined);
      expect(mech.goStr).to.equal("(undefined * undefined)");
      expect(mech.goArr[0]).to.eql(undefined);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should mul(0, 0) correctly", function() {
      var mech = m.mul(0, 0);
      expect(mech.l).to.equal(0);
      expect(mech.r).to.equal(0);

      expect(mech.go).to.equal(0);
      expect(mech.goNum).to.equal(0);
      expect(mech.goStr).to.equal("(0 * 0)");
      expect(mech.goArr).to.contain(0);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });

   it ("should mul(Infinity, Infinity) correctly", function() {
      var mech = m.mul(Infinity, Infinity);
      expect(mech.l).to.equal(Infinity);
      expect(mech.r).to.equal(Infinity);
   
      expect(mech.go).to.equal(Infinity);
      expect(mech.goNum).to.equal(Infinity);
      expect(mech.goStr).to.equal("(Infinity * Infinity)");
      expect(mech.goArr[0]).to.equal(Infinity);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.true;
   });
   
   it ("should mul(-Infinity, -Infinity) correctly", function() {
      var mech = m.mul(-Infinity, -Infinity);
      expect(mech.l).to.equal(-Infinity);
      expect(mech.r).to.equal(-Infinity);
   
      expect(mech.go).to.equal(Infinity);
      expect(mech.goNum).to.equal(Infinity);
      expect(mech.goStr).to.equal("(-Infinity * -Infinity)");
      expect(mech.goArr[0]).to.equal(Infinity);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.true;
   });
   
   it ("should mul(-Infinity, Infinity) correctly", function() {
      var mech = m.mul(-Infinity, Infinity);
      expect(mech.l).to.equal(-Infinity);
      expect(mech.r).to.equal(Infinity);
   
      expect(mech.go).to.equal(-Infinity);
      expect(mech.goNum).to.equal(-Infinity);
      expect(mech.goStr).to.equal("(-Infinity * Infinity)");
      expect(mech.goArr).to.contain(-Infinity);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should mul(2, 5) correctly", function() {
      var mech = m.mul(2, 5);
      expect(mech.l).to.equal(2);
      expect(mech.r).to.equal(5);
   
      expect(mech.go).to.equal(10);
      expect(mech.goNum).to.equal(10);
      expect(mech.goStr).to.equal("(2 * 5)");
      expect(mech.goArr).to.contain(10);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.true;
   });
   
   it ("should mul nested operations correctly", function() {
       var mech = m.mul(1, m.mul(3, 4));
       expect(mech.l).to.equal(1);
       expect(mech.r.goNum).to.equal(12);

       expect(mech.go).to.equal(12);
       expect(mech.goNum).to.equal(12);
       expect(mech.goStr).to.equal("(1 * (3 * 4))");
       expect(mech.goArr).to.contain(12);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;

       var mech2 = m.mul( m.mul (m.num(3), m.num(-1) ), -1 );
       expect(mech2.l.goNum).to.equal(-3);
       expect(mech2.r).to.equal(-1);

       expect(mech2.go).to.equal(3);
       expect(mech2.goNum).to.equal(3);
       expect(mech2.goStr).to.equal("((3 * -1) * -1)");
       expect(mech2.goArr).to.contain(3);
       expect(mech2.goArr).to.have.length(1);
       expect(mech2.goBool).to.be.true;
    });
   
   it ("should mul('hi','hello') correctly", function() {
      var mech = m.mul("hi","hello");
      expect(mech.l).to.equal("hi");
      expect(mech.r).to.equal("hello");
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(hi * hello)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });      

   it ("should play nicely with emitters", function() {
      var mech = m.mul(2, m.emitFromArr([9,2,8]));
      expect(mech.goNum).to.equal(18);
      expect(mech.goNum).to.equal(4);
      expect(mech.goNum).to.equal(16);
      expect(mech.goNum).to.eql(undefined);
   });


});