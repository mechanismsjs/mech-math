function AddSF(){};
function addS(left,right) {
   var f = Object.create(AddSF.prototype);
   f.l = left;
   f.r = right;
   return f;
};
AddSF.prototype = Object.create(DualArgF.prototype, {
   isMech: { get: function() { return true; }},
   isNull: { get: function() { return false; }},
   isPrim: { get: function() { return false; }},
   l: {
      get: function() { return this._l; },
      set: function(d) { this._l = ((null === d) || (undefined === d)) ? "" : d; }
   },
   r: {
      get: function() { return this._r; },
      set: function(d) { this._r = ((null === d) || (undefined === d)) ? "" : d; }
   },
   go: { enumerable: false, get: function() { return this.goStr; } },
   goStr: { enumerable: false, get: function() { return (this._l.isMech ? this._l.goStr : this._l) + (this._r.isMech ? this._r.goStr : this._r); } },
   goArr: { enumerable: false, get: function() { return [this.goStr]; } },
   goBool: { enumerable: false, get: function() {
      var r = this.goStr;
      return (("" !== r) && (0 !== r)); }
   }

});
m.addS = addS;
m.AddSF = AddSF;