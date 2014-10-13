function DualArgF(){};
function dualArg(left,right) {
   var f = Object.create(DualArgF.prototype);
   f.l = left;
   f.r = right;
   return f;
};
DualArgF.prototype = Object.create(Object.prototype, {
   isMech: { get: function() { return true; }},
   isNull: { get: function() { return false; }},
   isPrim: { get: function() { return false; }},
   l: {
      get: function() { return this._l; },
      set: function(d) { this._l = ((null === d) || (undefined === d)) ? NaN : d; }
   },
   r: {
      get: function() { return this._r; },
      set: function(d) { this._r = ((null === d) || (undefined === d)) ? NaN : d; }
   },
   go: { enumerable: false, get: function() { return this.goNum; } },
   goArr: { enumerable: false, get: function() { return [this.goNum]; } },
   goBool: { enumerable: false, get: function() { return (this.goNum > 0); } }
});
m.dualArg = dualArg;
m.DualArgF = DualArgF;