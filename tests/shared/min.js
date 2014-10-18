describe("minimum mechanism - min", function () {

   it ("should not wipeout Object prototype and be a mechanism", function() {
     var mech = m.min([]);
     expect(mech).to.have.property('toString');
     expect(m._.MinF).to.not.eql(undefined);
   });
   
   it ("should have correct properties", function() {
     var mech = m.min([]);
     expect(mech.isMech).to.be.true;
   });
   
   it ("should return a minimum value of a list", function() {
      var mech = m.min(4,2,8,4);
      expect(mech.go).to.equal(2);

      var mech2 = m.min(-4,2,8,4);
      expect(mech2.go).to.equal(-4);

      var mech3 = m.min(22);
      expect(mech3.go).to.equal(22);

   });
   
   it ("should return a minimum value of a list", function() {
      var mech = m.min();
      expect(mech.go).to.equal(+Infinity);
   });

   it ("should return a minimum value of a list that has mechanisms", function() {
      var mech = m.min(m.num(8),4,12,m.num(-20));
      expect(mech.go).to.equal(-20);
   });

});
