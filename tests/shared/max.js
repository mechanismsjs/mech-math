describe("maximum mechanism - max", function() {

	it("should not wipeout Object prototype and be a mechanism", function() {
		var mech = m.max([]);
		expect(mech).to.have.property('toString');
		expect(m._.MaxF).to.not.eql(undefined);
	});

	it("should have correct properties", function() {
		var mech = m.max([]);
		expect(mech.isMech).to.be.true;
	});

	it("should return a maximum value of a list", function() {
		var mech = m.max(4, 2, 8, 4);
		expect(mech.go).to.equal(8);

		var mech2 = m.max(-4, 2, 8, 12);
		expect(mech2.go).to.equal(12);

		var mech2 = m.max(-11, -2, -8, -12, null, undefined);
		expect(mech2.go).to.equal(-2);

		var mech3 = m.max(22);
		expect(mech3.go).to.equal(22);

	});

	it("should return a maximum value of a list", function() {
		var mech = m.max();
		expect(mech.go).to.equal(-Infinity);
	});

	it("should return a maximum value of a list that has mechanisms and ignore null or undefined", function() {
		var mech = m.max(m.num(8), 4, 12, m.num(20), null, undefined);
		expect(mech.go).to.equal(20);
	});

	it("should set _parDir of any child mechanisms to parent", function() {
		var mech = m.num(1);
		var mech2 = m.num(2);
		var mech3 = m.max(mech, 3, 5, mech2);
		expect(mech._parDir).to.equal(mech3);
		expect(mech2._parDir).to.equal(mech3);
	});

});