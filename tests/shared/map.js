describe("mapition mechanism - map", function () {

   it ("should not wipeout Object prototype and be a mechanism", function() {
     var mech = m.map();
     expect(mech).to.have.property('toString');
     expect(m.AddF).to.not.eql(undefined);
   });
   
   it ("should have correct properties", function() {
     var mech = m.map(1);
     expect(mech.isMech).to.be.true;
   });
   
   it ("should return an emitArr as an array", function(){
      var mech = m.map(m.emitArr([1,2,3,4]));
      expect(mech.go).to.have.length(4);
      expect(mech.go[0]).to.equal(1);
      expect(mech.go[1]).to.equal(2);
      expect(mech.go[2]).to.equal(3);
      expect(mech.go[3]).to.equal(4);
   
      var mech2 = m.map(m.emitArr([8,6,7]));
      expect(mech2.go).to.have.length(3);
      expect(mech2.go[0]).to.equal(8);
      expect(mech2.go[1]).to.equal(6);
      expect(mech2.go[2]).to.equal(7);

      expect(mech2.goNum).to.have.length(3);
      expect(mech2.goNum[0]).to.equal(8);
      expect(mech2.goNum[1]).to.equal(6);
      expect(mech2.goNum[2]).to.equal(7);

      expect(mech2.goArr).to.have.length(3);
      expect(mech2.goArr[0]).to.equal(8);
      expect(mech2.goArr[1]).to.equal(6);
      expect(mech2.goArr[2]).to.equal(7);
      
   }); 
   
   it ("should return an emitRange as an array", function(){
      var mech = m.map(m.emitRange(1,2,.5));
      expect(mech.goNum).to.have.length(3);
      expect(mech.goNum[0]).to.equal(1);
      expect(mech.goNum[1]).to.equal(1.5);
      expect(mech.goNum[2]).to.equal(2);
      expect(mech.go).to.have.length(3);
      expect(mech.go[0]).to.equal(1);
      expect(mech.go[1]).to.equal(1.5);
      expect(mech.go[2]).to.equal(2);
      expect(mech.goArr).to.have.length(3);
      expect(mech.goArr[0]).to.equal(1);
      expect(mech.goArr[1]).to.equal(1.5);
      expect(mech.goArr[2]).to.equal(2);
   }); 
   
   it ("should return a fixed range", function(){
      var mech = m.map(m.emitRange(1,2000,2),3);
      expect(mech.go).to.have.length(3);
      expect(mech.go[0]).to.equal(1);
      expect(mech.go[1]).to.equal(3);
      expect(mech.go[2]).to.equal(5);
   });
   
   it ("should not hang when a HUGE range is emitted", function(){
      var mech = m.map(m.emitRange(1,Infinity,45959532));
      expect(mech.go).to.have.length(1000);
   });
   
   it ("should not hang when a HUGE range is emitted", function(){
      var mech = m.map(m.emitRange(1,Infinity,45959532));
      expect(mech.go).to.have.length(1000);
   });

   it ("should operate correctly using an algorithm", function(){
      
      var mech = m.map(m.add(4,m.emitArr([1,2,3,4])));
      expect(mech.go).to.have.length(4);
      expect(mech.go[0]).to.equal(5);
      expect(mech.go[1]).to.equal(6);
      expect(mech.go[2]).to.equal(7);
      expect(mech.go[3]).to.equal(8);
      expect(mech.go[4]).to.eql(undefined);

      var mech2 = m.map(
         m.add(
            m.emitRange(1,4,1),
            m.emitArr([1,2,3,4,5])
         )
      );
      expect(mech2.go).to.have.length(4);
      expect(mech2.go[0]).to.equal(2);
      expect(mech2.go[1]).to.equal(4);
      expect(mech2.go[2]).to.equal(6);
      expect(mech2.go[3]).to.equal(8);
      expect(mech2.go[4]).to.eql(undefined);
      
      var mech3 = m.map(m.addS(m.emitArr(["a","b","c"]), "e"));
      expect(mech3.go).to.have.length(3);
      expect(mech3.go[0]).to.equal("ae");
      expect(mech3.go[1]).to.equal("be");
      expect(mech3.go[2]).to.equal("ce");

   });

});