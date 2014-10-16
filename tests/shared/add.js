describe("addition mechanism - add", function () {

   it ("should not wipeout Object prototype and be a mechanism", function() {
      var mech = m.add();
      expect(mech).to.have.property('toString');
      expect(m.AddF).to.not.eql(undefined);
    });
    
    it ("should have correct properties", function() {
      var mech = m.add(1,2);
      expect(mech.isMech).to.be.true;
        
      expect(mech).to.have.property('l');
      expect(mech).to.have.property('_l'); // imagined privacy
    
      expect(mech).to.have.property('r');
      expect(mech).to.have.property('_r'); // imagined privacy
    
    });
    
    it ("add() should have same behaivor as dualArg() and equal undefined", function() {
       var mech = m.add();
       expect(mech.l).to.eql(undefined);
       expect(mech.r).to.eql(undefined);
          
       expect(mech.go).to.eql(undefined);
       expect(mech.goNum).to.eql(undefined);
       expect(mech.goStr).to.equal("(undefined + undefined)");
       expect(mech.goArr[0]).to.eql(undefined);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
    it ("should add(NaN,NaN) correctly", function() {
       var mech = m.add(NaN,NaN);
       expect(mech.l).to.eql(NaN);
       expect(mech.r).to.eql(NaN);
    
       expect(mech.go).to.eql(NaN);
       expect(mech.goNum).to.eql(NaN);
       expect(mech.goStr).to.equal("(NaN + NaN)");
       expect(mech.goArr[0]).to.eql(NaN);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
    it ("should add(null,null) correctly", function() {
       var mech = m.add(null,null);
       expect(mech.l).to.eql(undefined);
       expect(mech.r).to.eql(undefined);
          
       expect(mech.go).to.eql(undefined);
       expect(mech.goNum).to.eql(undefined);
       expect(mech.goStr).to.equal("(undefined + undefined)");
       expect(mech.goArr[0]).to.eql(undefined);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
    it ("should add(undefined,undefined) correctly", function() {
       var mech = m.add(undefined,undefined);
       expect(mech.l).to.eql(undefined);
       expect(mech.r).to.eql(undefined);
          
       expect(mech.go).to.eql(undefined);
       expect(mech.goNum).to.eql(undefined);
       expect(mech.goStr).to.equal("(undefined + undefined)");
       expect(mech.goArr[0]).to.eql(undefined);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });      
    
    it ("should add(0, 0) correctly", function() {
       var mech = m.add(0, 0);
       expect(mech.l).to.equal(0);
       expect(mech.r).to.equal(0);
    
       expect(mech.go).to.equal(0);
       expect(mech.goNum).to.equal(0);
       expect(mech.goStr).to.equal("(0 + 0)");
       expect(mech.goArr).to.contain(0);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
    it ("should add(Infinity, Infinity) correctly", function() {
       var mech = m.add(Infinity, Infinity);
       expect(mech.l).to.equal(Infinity);
       expect(mech.r).to.equal(Infinity);
          
       expect(mech.go).to.equal(Infinity);
       expect(mech.goNum).to.equal(Infinity);
       expect(mech.goStr).to.equal("(Infinity + Infinity)");
       expect(mech.goArr).to.contain(Infinity);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    });
    
    it ("should add(-Infinity, -Infinity) correctly", function() {
       var mech = m.add(-Infinity, -Infinity);
       expect(mech.l).to.equal(-Infinity);
       expect(mech.r).to.equal(-Infinity);
          
       expect(mech.go).to.equal(-Infinity);
       expect(mech.goNum).to.equal(-Infinity);
       expect(mech.goStr).to.equal("(-Infinity + -Infinity)");
       expect(mech.goArr).to.contain(-Infinity);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
    it ("should add(-Infinity, Infinity) correctly", function() {
       var mech = m.add(-Infinity, Infinity);
       expect(mech.l).to.equal(-Infinity);
       expect(mech.r).to.equal(Infinity);
          
       expect(mech.go).to.eql(NaN);
       expect(mech.goNum).to.eql(NaN);
       expect(mech.goStr).to.equal("(-Infinity + Infinity)");
       expect(mech.goArr[0]).to.eql(NaN);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
    it ("should add(1, 5) correctly", function() {
       var mech = m.add(1, 5);
       expect(mech.l).to.equal(1);
       expect(mech.r).to.equal(5);
    
       expect(mech.go).to.equal(6);
       expect(mech.goNum).to.equal(6);
       expect(mech.goStr).to.equal("(1 + 5)");
       expect(mech.goArr).to.contain(6);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    });
    
    it ("should add nested operations correctly", function() {
       var mech = m.add(1, m.add(3, 4));
       expect(mech.l).to.equal(1);
       expect(mech.r.goNum).to.equal(7);
    
       expect(mech.go).to.equal(8);
       expect(mech.goNum).to.equal(8);
       expect(mech.goStr).to.equal("(1 + (3 + 4))");
       expect(mech.goArr).to.contain(8);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    
       var mech2 = m.add( m.add (m.num(3), m.num(-1) ), -1 );
       expect(mech2.l.goNum).to.equal(2);
       expect(mech2.r).to.equal(-1);
    
       expect(mech2.go).to.equal(1);
       expect(mech2.goNum).to.equal(1);
       expect(mech2.goStr).to.equal("((3 + -1) + -1)");
       expect(mech2.goArr).to.contain(1);
       expect(mech2.goArr).to.have.length(1);
       expect(mech2.goBool).to.be.true;
    });
    
    it ("should add('hi','hello') correctly", function() {
       var mech = m.add("hi","hello");
       expect(mech.l).to.eql("hi");
       expect(mech.r).to.eql("hello");
    
       expect(mech.go).to.equal("hihello");
       expect(mech.goNum).to.equal("hihello");
       expect(mech.goStr).to.equal("(hi + hello)");
       expect(mech.goArr).to.contain("hihello");
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
   
   it ("should play nicely with emitters", function() {
      var mech2 = m.add(3,m.emitArr([9,2,8]));
      expect(mech2.goNum).to.equal(12);
      expect(mech2.goNum).to.equal(5);
      expect(mech2.goNum).to.equal(11);
      expect(mech2.goNum).to.eql(undefined);
      
      var mech2 = m.add(5,m.emitArr([3,4,5]));
      var first = mech2.go;
      var second = mech2.goNum;
      var third = mech2.goStr;
      var fourth = mech2.go;
      expect(first).to.equal(8);
      expect(second).to.equal(9);
      expect(third).to.equal('(5 + 5)');
      expect(fourth).to.eql(undefined);
   });
   

});
