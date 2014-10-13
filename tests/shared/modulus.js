describe("modulusition mechanism - modulus", function () {

   it ("should not wipeout Object prototype and be a mechanism", function() {
     var mech = m.modulus();
     expect(mech).to.have.property('toString');
     expect(m.ModulusF).to.be.not.eql(undefined);
   });

   it ("should have correct properties", function() {
     var mech = m.modulus();
     expect(mech.isMech).to.be.true;
     expect(mech.isNull).to.be.false;
     expect(mech.isPrim).to.be.false;
       
     expect(mech).to.have.property('l');
     expect(mech).to.have.property('_l'); // imagined privacy
     
     expect(mech).to.have.property('r');
     expect(mech).to.have.property('_r'); // imagined privacy
   });

   it ("modulus() should have same behaivor as dualArg() and equal NaN", function() {
      var mech = m.modulus();
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(NaN % NaN)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should modulus(NaN,NaN) correctly", function() {
      var mech = m.modulus(NaN,NaN);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(NaN % NaN)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should modulus(null,null) correctly", function() {
      var mech = m.modulus(null,null);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(NaN % NaN)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should modulus(undefined,undefined) correctly", function() {
      var mech = m.modulus(undefined,undefined);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(NaN % NaN)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });      
   
   it ("should modulus(0, 0) correctly", function() {
      var mech = m.modulus(0, 0);
      expect(mech.l).to.equal(0);
      expect(mech.r).to.equal(0);
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(0 % 0)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should modulus(Infinity, Infinity) correctly", function() {
      var mech = m.modulus(Infinity, Infinity);
      expect(mech.l).to.equal(Infinity);
      expect(mech.r).to.equal(Infinity);
         
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(Infinity % Infinity)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should modulus(-Infinity, -Infinity) correctly", function() {
      var mech = m.modulus(-Infinity, -Infinity);
      expect(mech.l).to.equal(-Infinity);
      expect(mech.r).to.equal(-Infinity);
         
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(-Infinity % -Infinity)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should modulus(-Infinity, Infinity) correctly", function() {
      var mech = m.modulus(-Infinity, Infinity);
      expect(mech.l).to.equal(-Infinity);
      expect(mech.r).to.equal(Infinity);
         
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(-Infinity % Infinity)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });
   
   it ("should modulus(1, 5) correctly", function() {
      var mech = m.modulus(5, 2);
      expect(mech.l).to.equal(5);
      expect(mech.r).to.equal(2);
   
      expect(mech.go).to.equal(1);
      expect(mech.goNum).to.equal(1);
      expect(mech.goStr).to.equal("(5 % 2)");
      expect(mech.goArr).to.contain(1);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.true;
   });
   
   it ("should modulus nested operations correctly", function() {
      var mech = m.modulus(1, m.modulus(4, 3));
      expect(mech.l).to.equal(1);
      expect(mech.r.goNum).to.equal(1);
   
      expect(mech.go).to.equal(0);
      expect(mech.goNum).to.equal(0);
      expect(mech.goStr).to.equal("(1 % (4 % 3))");
      expect(mech.goArr).to.contain(0);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
         
      var mech2 = m.modulus( m.modulus (m.num(7), m.num(-5) ), -1 );
      expect(mech2.l.goNum).to.equal(2);
      expect(mech2.r).to.equal(-1);
         
      expect(mech2.go).to.equal(0);
      expect(mech2.goNum).to.equal(0);
      expect(mech2.goStr).to.equal("((7 % -5) % -1)");
      expect(mech2.goArr).to.contain(0);
      expect(mech2.goArr).to.have.length(1);
      expect(mech2.goBool).to.be.false;
   });
   
   it ("should modulus('hi','hello') correctly", function() {
      var mech = m.modulus("hi","hello");
      expect(mech.l).to.eql("hi");
      expect(mech.r).to.eql("hello");
   
      expect(mech.go).to.eql(NaN);
      expect(mech.goNum).to.eql(NaN);
      expect(mech.goStr).to.equal("(hi % hello)");
      expect(mech.goArr[0]).to.eql(NaN);
      expect(mech.goArr).to.have.length(1);
      expect(mech.goBool).to.be.false;
   });      

});
