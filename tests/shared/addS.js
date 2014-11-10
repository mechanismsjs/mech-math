describe("addition string mechanism - addS", function() {

	it("should not wipeout Object prototype and be a mechanism", function() {
		var mech = m.addS();
		expect(mech).to.have.property('toString');
		expect(m._.AddSF).to.not.eql(undefined);
	});

	it("should have correct properties", function() {
		var mech = m.addS(1, 2);
		expect(mech.isMech).to.be.true;

		expect(mech).to.have.property('l');
		expect(mech).to.have.property('_l'); // imagined privacy

		expect(mech).to.have.property('r');
		expect(mech).to.have.property('_r'); // imagined privacy

	});

	it("addS() should have string behavior?", function() {
		var mech = m.addS();
		expect(mech.l).to.equal(undefined);
		expect(mech.r).to.equal(undefined);

		expect(mech.go).to.eql(undefined);
		// expect(mech.goNum).to.eql(""); - NOT SUPPORTED
		expect(mech.goStr).to.eql(undefined);
		expect(mech.goArr[0]).to.eql(undefined);
		expect(mech.goArr).to.have.length(1);
		expect(mech.goBool).to.be.false;
	});

	it("should addS(NaN,NaN) correctly", function() {
		var mech = m.addS(NaN, NaN);
		expect(mech.l).to.eql(NaN);
		expect(mech.r).to.eql(NaN);

		expect(mech.go).to.eql(NaN);
		// expect(mech.goNum).to.eql(""); - NOT SUPPORTED
		expect(mech.goStr).to.eql(NaN);
		expect(mech.goArr[0]).to.eql(NaN);
		expect(mech.goArr).to.have.length(1);
		expect(mech.goBool).to.be.true; // "", "false", 0, undefined are considered false
	});

	it("should addS(null,null) correctly", function() {
		var mech = m.addS(null, null);
		expect(mech.l).to.eql(undefined);
		expect(mech.r).to.eql(undefined);

		expect(mech.go).to.eql(undefined);
		// expect(mech.goNum).to.eql(""); - NOT SUPPORTED
		expect(mech.goStr).to.eql(undefined);
		expect(mech.goArr[0]).to.eql(undefined);
		expect(mech.goArr).to.have.length(1);
		expect(mech.goBool).to.be.false;
	});

	it("should addS(undefined,undefined) correctly", function() {
		var mech = m.addS(undefined, undefined);
		expect(mech.l).to.eql(undefined);
		expect(mech.r).to.eql(undefined);

		expect(mech.go).to.eql(undefined);
		// expect(mech.goNum).to.eql(""); - NOT SUPPORTED
		expect(mech.goStr).to.eql(undefined);
		expect(mech.goArr[0]).to.eql(undefined);
		expect(mech.goArr).to.have.length(1);
		expect(mech.goBool).to.be.false;
	});

	it("should addS(0, 0) correctly", function() {
		var mech = m.addS(0, 0);
		expect(mech.l).to.equal(0);
		expect(mech.r).to.equal(0);

		expect(mech.go).to.equal(0);
		// expect(mech.goNum).to.equal(0); - NOT SUPPORTED
		expect(mech.goStr).to.equal(0);
		expect(mech.goArr).to.contain(0);
		expect(mech.goArr).to.have.length(1);
		expect(mech.goBool).to.be.false; // "", "false", 0 are considered false
	});



	it("should addS('Hay', ' you') correctly", function() {
		var mech = m.addS("Hay", " you");
		expect(mech.l).to.equal("Hay");
		expect(mech.r).to.equal(" you");

		expect(mech.go).to.equal("Hay you");
		expect(mech.goStr).to.equal("Hay you");
		expect(mech.goArr).to.contain("Hay you");
		expect(mech.goArr).to.have.length(1);
		expect(mech.goBool).to.be.true;
	});

	it("should addS nested operations correctly", function() {
		var mech = m.addS("Hay", m.addS(" every", " one."));
		expect(mech.l).to.equal("Hay");
		expect(mech.r.go).to.equal(" every one.");

		expect(mech.go).to.equal("Hay every one.");
		expect(mech.goStr).to.equal("Hay every one.");
		expect(mech.goArr).to.contain("Hay every one.");
		expect(mech.goArr).to.have.length(1);
		expect(mech.goBool).to.be.true;

		var mech2 = m.addS(m.addS("Every", " one"), ", hay!");
		expect(mech2.l.go).to.equal("Every one");
		expect(mech2.r).to.equal(", hay!");

		expect(mech2.go).to.equal("Every one, hay!");
		expect(mech2.goStr).to.equal("Every one, hay!");
		expect(mech2.goArr).to.contain("Every one, hay!");
		expect(mech2.goArr).to.have.length(1);
		expect(mech2.goBool).to.be.true;
	});

	it("should play nicely with emitters", function() {
		var mech = m.addS(m.emitFromArr(["a", "b", "c"]), "e");
		expect(mech.go).to.equal("ae");
		expect(mech.go).to.equal("be");
		expect(mech.go).to.equal("ce");

		var mech = m.addS(m.emitFromArr(["a", "b", "c"]), "e");
		expect(mech.go).to.equal("ae");
		expect(mech.go).to.equal("be");
		expect(mech.go).to.equal("ce");
	});

	it("should set _parDir of child mechanisms to parent", function() {
		var mech = m.num(1);
		var mech2 = m.num(2);
		var mech3 = m.addS(mech, mech2);
		expect(mech._parDir).to.equal(mech3);
		expect(mech2._parDir).to.equal(mech3);
	});

});