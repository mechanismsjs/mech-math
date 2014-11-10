function MinF() {};

function min() {
	var f = Object.create(MinF.prototype);
	f._args = arguments;
	for (var i = 0; i < f._args.length; i++) {
		var arg = f._args[i];
		if (arg && arg.isMech) {
			arg._parDir = f;
		}
	}
	return f;
};
MinF.prototype = Object.create(Object.prototype, {
	isMech: {
		get: function() {
			return true;
		}
	},
	go: {
		get: function() {
			var curMin = +Infinity;
			var args = this._args;
			for (var i = 0; i < args.length; i++) {
				var arg = args[i];
				if (undefined !== arg && null !== arg) {
					var temp = arg.isMech ? arg.go : arg;
					if (temp < curMin) {
						curMin = temp;
					}
				}
			}
			return curMin;
		}
	},
	goArr: {
		get: function() {
			return this.go;
		}
	}
});
m.min = min;
m._.MinF = MinF;