function MaxF() {};

function max() {
	var f = Object.create(MaxF.prototype);
	f._args = arguments;
	for (var i = 0; i < f._args.length; i++) {
		var arg = f._args[i];
		if (arg && arg.isMech) {
			arg._parDir = f;
		}
	}
	return f;
};
MaxF.prototype = Object.create(Object.prototype, {
	isMech: {
		get: function() {
			return true;
		}
	},
	go: {
		get: function() {
			var curMin = -Infinity;
			var args = this._args;
			for (var i = 0; i < args.length; i++) {
				var arg = args[i];
				if (undefined !== arg && null !== arg) {
					var temp = arg.isMech ? arg.go : arg;
					if (temp > curMin) {
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
m.max = max;
m._.MaxF = MaxF;