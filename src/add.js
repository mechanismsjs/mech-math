function AddF(){};
function add(left,right) {
   var f = Object.create(AddF.prototype);
   f.l = left;
   f.r = right;
   return f;
};
AddF.prototype = Object.create(DualArgF.prototype, {
   goNum: { enumerable: false, get: function() { return (this._l.isMech ? this._l.goNum : this._l) + (this._r.isMech ? this._r.goNum : this._r); } },
   goStr: { enumerable: false, get: function() { return "(" + (this._l.isMech ? this._l.goStr : this._l) + " + " + (this._r.isMech ? this._r.goStr : this._r) + ")"; } },
});
m.add = add;
m.AddF = AddF;