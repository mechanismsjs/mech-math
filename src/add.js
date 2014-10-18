function AddF(){};
function add(left,right) {
   var f = Object.create(AddF.prototype);
   f._l = ((null === left) || (undefined === left)) ? undefined : left;
   f._r = ((null === right) || (undefined === right)) ? undefined : right;
   return f;
};
AddF.prototype = Object.create(DualArgF.prototype, {
   goNum: { enumerable: false, get: function() {
      if (undefined === this._l || undefined === this._r) { return undefined; }
      var lf = this._l.isMech ? this._l.goNum : this._l;
      if (undefined === lf ) { return undefined; }
      var rf = this._r.isMech ? this._r.goNum : this._r;
      if ( undefined === rf ) { return undefined; }
      return lf + rf;
   }},
   goStr: { enumerable: false, get: function() { return "(" + this.ls + " + " + this.rs + ")"; }}
});
m.add = add;
m._.AddF = AddF;