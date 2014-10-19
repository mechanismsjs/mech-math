function DualArgF(){};
function dualArg(left,right) {
   var f = Object.create(DualArgF.prototype);
   f._l = ((null === left) || (undefined === left)) ? undefined : left;
   f._r = ((null === right) || (undefined === right)) ? undefined : right;
   return f;
};
DualArgF.prototype = Object.create(Object.prototype, {
   isMech: { get: function() { return true; }},
   l: { get: function() { return this._l; }},
   lv: { get: function() { return undefined === this._l ? undefined : this._l.isMech ? this._l.go : this._l; }},
   ls: { get: function() {
      if (undefined === this._l) {
         return 'undefined';
      } else {
         return this._l.isMech ? this._l.goStr : this._l.toString();
      }
   }},
   r: { get: function() { return this._r; } },
   rs: { get: function() {
      if (undefined === this._r) {
         return 'undefined';
      } else {
         return this._r.isMech ? this._r.goStr : this._r.toString();
      }
   }},
   rv: { get: function() { return undefined === this._r ? undefined : this._r.isMech ? this._r.go : this._r; }},
   go: { enumerable: false, get: function() { return this.goNum; } },
   goArr: { enumerable: false, get: function() { return [this.goNum]; } },
   goBool: { enumerable: false, get: function() { return (this.goNum > 0); } }
});
m.dualArg = dualArg;
m._.DualArgF = DualArgF;