// TODO: Remove RangeErrors.
// TODO: Tokens can be mechanisms
function JoinF() {};

function join(array, token) {
	var f = Object.create(JoinF.prototype);
	if (null === array || undefined === array) {
		throw new RangeError("array must be defined.");
	}
	if (!(array instanceof Array) && !array.isMech) {
		throw new RangeError("array must be an array type.");
	}
	f._arr = array;
	if (f._arr && f._arr.isMech) {
		f._arr._parDir = f;
	}
	f._token = token;
	if (f._token && f._token.isMech) {
		f._token._parDir = f;
	}
	return f;
};
JoinF.prototype = Object.create(Object.prototype, {
	isMech: {
		get: function() {
			return true;
		}
	},
	go: {
		get: function() {
			if (this._arr.isMech) {
				var result = this._arr.go;
				if (result instanceof Array) {
					return result.join(this._token);
				} else {
					throw new RangeError("array must be an array type.");
				}
			} else {
				return this._arr.join(this._token);
			}
		}
	},
	goArr: {
		get: function() {
			return this.go;
		}
	}
});
m.join = join;
m._.JoinF = JoinF;