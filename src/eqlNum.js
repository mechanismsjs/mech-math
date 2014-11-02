function EqlNumF(){};
function eqlNum(left,right) {
var f = Object.create(EqlNumF.prototype);
f._l = ((null === left) || (undefined === left)) ? undefined : left;
f._r = ((null === right) || (undefined === right)) ? undefined : right;
return f;
};
EqlNumF.prototype = Object.create(DualArgF.prototype, {
	go: { enumerable: false, get: function() { return this.goBool; }},
	goNum: { enumerable: false, get: function() { return this.goBool ? 1 : 0; }},
	goStr: { enumerable: false, get: function() { return this.goBool ? "true" : "false"; }},
	goArr: { enumerable: false, get: function() { return [this.goBool]; }},
  goBool: { enumerable: false, get: function() {
  	var l = (undefined === this._l) ? undefined : this._l.isMech ? this._l.goNum : this._l;
  	var r = (undefined === this._r) ? undefined : this._r.isMech ? this._r.goNum : this._r;
  	return (l === undefined || r === undefined) ? false : l === r;
  }}
});
m.eqlNum = eqlNum;
m._.EqlNumF = EqlNumF;