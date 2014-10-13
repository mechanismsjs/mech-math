describe("dual argument mechanism - dualArg", function() {
   it ("should not wipeout Object prototype and be a mechanism", function() {
     var mech = m.dualArg();
     expect(mech).to.have.property('toString');
     expect(m.DualArgF).to.not.eql(undefined);
   });
   
   it ("should have correct properties", function() {
     var mech = m.dualArg();
     expect(mech.isMech).to.be.true;
     expect(mech.isNull).to.be.false;
     expect(mech.isPrim).to.be.false;
             
     expect(mech).to.have.property('l');
     expect(mech).to.have.property('_l'); // imagined privacy
  
     expect(mech).to.have.property('r');
     expect(mech).to.have.property('_r'); // imagined privacy
  
   });
  
   it ("dualArg() should be NaN", function() {
       var mech = m.dualArg();
       expect(mech.l).to.eql(NaN);
       expect(mech.r).to.eql(NaN);
    });
    
  
   it ("dualArg(undefined) should be NaN", function() {
      var mech = m.dualArg(undefined);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   });
   
   it ("dualArg(NaN) should be NaN", function() {
      var mech = m.dualArg(NaN);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   });
  
  it ("dualArg(Infinity) should be Infinity and NaN", function() {
     var mech = m.dualArg(Infinity);
     expect(mech.l).to.equal(Infinity);
     expect(mech.r).to.eql(NaN);
  });
   
   it ("dualArg(5) should be 5 and NaN", function() {
      var mech = m.dualArg(5);
      expect(mech.l).to.equal(5);
      expect(mech.r).to.eql(NaN);
   });
  
   it ("dualArg(0) should be 0 and NaN", function() {
      var mech = m.dualArg(0);
      expect(mech.l).to.equal(0);
      expect(mech.r).to.eql(NaN);
   });
  
   it ("dualArg(1,2) should be 1 and 2", function() {
      var mech = m.dualArg(1,2);
      expect(mech.l).to.equal(1);
      expect(mech.r).to.equal(2);
   });
  
   it ("dualArg('1','2') should be 1 and 2", function() {
      var mech = m.dualArg("1","2");
      expect(mech.l).to.eql("1");
      expect(mech.r).to.eql("2");
   });
  
   it ("dualArg(NaN,NaN) should be NaN and NaN", function() {
      var mech = m.dualArg(NaN,NaN);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   });
  
   it ("dualArg(null,null) should be NaN and NaN", function() {
      var mech = m.dualArg(null,null);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   });
  
   it ("dualArg(undefined,undefined) should be NaN and NaN", function() {
      var mech = m.dualArg(undefined,undefined);
      expect(mech.l).to.eql(NaN);
      expect(mech.r).to.eql(NaN);
   });

   it ("dualArg(mech,mech) should be5 and 8", function() {
      var mech = m.dualArg(m.num(5),m.num(8));
      expect(mech.l.v).to.eql(5);
      expect(mech.r.v).to.eql(8);
   });



});