describe("powition mechanism - pow", function () {

   it ("should not wipeout Object prototype and be a mechanism", function() {
        var mech = m.pow(1,2);
        expect(mech).to.have.property('toString');
        expect(m._.PowF).to.not.be.undefined;
      });
      
      it ("should have correct properties", function() {
        var mech = m.pow(1,2); // base, exp
        expect(mech.isMech).to.be.true;
          
        expect(mech).to.have.property('l');
        expect(mech).to.have.property('_l'); // imagined privacy
      
        expect(mech).to.have.property('r');
        expect(mech).to.have.property('_r'); // imagined privacy
      
      });
      
      it ("pow() should be undefined", function() {
         var mech = m.pow();
         expect(mech.l).to.eql(undefined);
         expect(mech.r).to.eql(undefined);
            
         expect(mech.go).to.eql(undefined);
         expect(mech.goNum).to.eql(undefined);
         expect(mech.goStr).to.equal("(undefined ^ undefined)");
         expect(mech.goArr[0]).to.eql(undefined);
         expect(mech.goArr).to.have.length(1);
         expect(mech.goBool).to.be.false;
      });
      
      it ("should pow(NaN,NaN) correctly", function() {
         var mech = m.pow(NaN,NaN);
         expect(mech.l).to.eql(NaN);
         expect(mech.r).to.eql(NaN);
      
         expect(mech.go).to.eql(NaN);
         expect(mech.goNum).to.eql(NaN);
         expect(mech.goStr).to.equal("(NaN ^ NaN)");
         expect(mech.goArr[0]).to.eql(NaN);
         expect(mech.goArr).to.have.length(1);
         expect(mech.goBool).to.be.false;
      });
      
      it ("should pow(null,null) correctly", function() {
         var mech = m.pow(null,null);
         expect(mech.l).to.eql(undefined);
         expect(mech.r).to.eql(undefined);
            
         expect(mech.go).to.eql(undefined);
         expect(mech.goNum).to.eql(undefined);
         expect(mech.goStr).to.equal("(undefined ^ undefined)");
         expect(mech.goArr[0]).to.eql(undefined);
         expect(mech.goArr).to.have.length(1);
         expect(mech.goBool).to.be.false;
      });
      
      it ("should pow(undefined,undefined) correctly", function() {
         var mech = m.pow(undefined,undefined);
         expect(mech.l).to.eql(undefined);
         expect(mech.r).to.eql(undefined);
            
         expect(mech.go).to.eql(undefined);
         expect(mech.goNum).to.eql(undefined);
         expect(mech.goStr).to.equal("(undefined ^ undefined)");
         expect(mech.goArr[0]).to.eql(undefined);
         expect(mech.goArr).to.have.length(1);
         expect(mech.goBool).to.be.false;
      });      
    
    it ("should pow(0, 0) correctly", function() {
       var mech = m.pow(0, 0);
       expect(mech.l).to.equal(0);
       expect(mech.r).to.equal(0);
    
       expect(mech.go).to.equal(1);
       expect(mech.goNum).to.equal(1);
       expect(mech.goStr).to.equal("(0 ^ 0)");
       expect(mech.goArr).to.contain(1);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    });
    
    it ("should pow(Infinity, Infinity) correctly", function() {
       var mech = m.pow(Infinity, Infinity);
       expect(mech.l).to.equal(Infinity);
       expect(mech.r).to.equal(Infinity);
          
       expect(mech.go).to.equal(Infinity);
       expect(mech.goNum).to.equal(Infinity);
       expect(mech.goStr).to.equal("(Infinity ^ Infinity)");
       expect(mech.goArr).to.contain(Infinity);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    });
    
    it ("should pow(-Infinity, -Infinity) correctly", function() {
       var mech = m.pow(-Infinity, -Infinity);
       expect(mech.l).to.equal(-Infinity);
       expect(mech.r).to.equal(-Infinity);
          
       expect(mech.go).to.equal(0);
       expect(mech.goNum).to.equal(0);
       expect(mech.goStr).to.equal("(-Infinity ^ -Infinity)");
       expect(mech.goArr).to.contain(0);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
    it ("should pow(-Infinity, Infinity) correctly", function() {
       var mech = m.pow(-Infinity, Infinity);
       expect(mech.l).to.equal(-Infinity);
       expect(mech.r).to.equal(Infinity);
          
       expect(mech.go).to.eql(Infinity);
       expect(mech.goNum).to.eql(Infinity);
       expect(mech.goStr).to.equal("(-Infinity ^ Infinity)");
       expect(mech.goArr).to.contain(Infinity);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    });
    
    it ("should pow(2, 5) correctly", function() {
       var mech = m.pow(2, 5);
       expect(mech.l).to.equal(2);
       expect(mech.r).to.equal(5);
    
       expect(mech.go).to.equal(32);
       expect(mech.goNum).to.equal(32);
       expect(mech.goStr).to.equal("(2 ^ 5)");
       expect(mech.goArr).to.contain(32);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    });
    
    it ("should pow nested operations correctly", function() {
       var mech = m.pow(2, m.pow(3, 4));
       expect(mech.l).to.equal(2);
       expect(mech.r.goNum).to.equal(81);
    
       expect(mech.go).to.equal(2.4178516392292583e+24);
       expect(mech.goNum).to.equal(2.4178516392292583e+24);
       expect(mech.goStr).to.equal("(2 ^ (3 ^ 4))");
       expect(mech.goArr).to.contain(2.4178516392292583e+24);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.true;
    });
    
    it ("should pow('hi','hello') correctly", function() {
       var mech = m.pow("hi","hello");
       expect(mech.l).to.eql("hi");
       expect(mech.r).to.eql("hello");
    
       expect(mech.go).to.eql(NaN);
       expect(mech.goNum).to.eql(NaN);
       expect(mech.goStr).to.equal("(hi ^ hello)");
       expect(mech.goArr[0]).to.eql(NaN);
       expect(mech.goArr).to.have.length(1);
       expect(mech.goBool).to.be.false;
    });
    
   it ("should play nicely with emitters", function() {
      var mech2 = m.pow(3,m.emitFromArr([9,2,8]));
      expect(mech2.goNum).to.equal(19683);
      expect(mech2.goNum).to.equal(9);
      expect(mech2.goNum).to.equal(6561);
      expect(mech2.goNum).to.eql(undefined);
      
      var mech2 = m.pow(5,m.emitFromArr([3,4,5]));
      var first = mech2.go;
      var second = mech2.goNum;
      var third = mech2.goStr;
      var fourth = mech2.go;
      expect(first).to.equal(125);
      expect(second).to.equal(625);
      expect(third).to.equal('(5 ^ 5)');
      expect(fourth).to.eql(undefined);
   });

});
