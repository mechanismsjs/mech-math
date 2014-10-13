function DivF(){};
function div(left,right) {
   var f = Object.create(DivF.prototype);
   f.l = left;
   f.r = right;
   return f;
};
DivF.prototype = Object.create(DualArgF.prototype, {
   goNum: { get: function() { return (this._l.isMech ? this._l.goNum : this._l) / (this._r.isMech ? this._r.goNum : this._r); } },
   goStr: { get: function() { return "(" + (this._l.isMech ? this._l.goStr : this._l) + " / " + (this._r.isMech ? this._r.goStr : this._r) + ")"; } },
});
m.div = div;
m.DivF = DivF;