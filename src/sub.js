function SubF(){};
function sub(left,right) {
   var f = Object.create(SubF.prototype);
   f.l = left;
   f.r = right;
   return f;
};
SubF.prototype = Object.create(DualArgF.prototype, {
   goNum: { get: function() { return (this._l.isMech ? this._l.goNum : this._l) - (this._r.isMech ? this._r.goNum : this._r); } },
   goStr: { get: function() { return "(" + (this._l.isMech ? this._l.goStr : this._l) + " - " + (this._r.isMech ? this._r.goStr : this._r) + ")"; } },
});
m.sub = sub;
m.SubF = SubF;