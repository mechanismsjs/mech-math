function AddSF(){};
function addS(left,right) {
   var f = Object.create(AddSF.prototype);
   f._l = ((null === left) || (undefined === left)) ? undefined : left;
   f._r = ((null === right) || (undefined === right)) ? undefined : right;
   return f;
};
AddSF.prototype = Object.create(DualArgF.prototype, {
   isMech: { get: function() { return true; }},
   l: { get: function() { return this._l; } },
   r: { get: function() { return this._r; } },
   go: { enumerable: false, get: function() { return this.goStr; } },
   goStr: { enumerable: false, get: function() {
      if (undefined === this._l || undefined === this._r) { return undefined; }
      var lf = this._l.isMech ? this._l.goStr : this._l;
      if (undefined === lf ) { return undefined; }
      var rf = this._r.isMech ? this._r.goStr : this._r;
      if ( undefined === rf ) { return undefined; }
      return lf + rf;
   }},
   goArr: { enumerable: false, get: function() { return [this.goStr]; } },
   goBool: { enumerable: false, get: function() {
      var r = this.goStr;
      return (("" !== r) && (0 !== r) && (undefined !== r)); }
   }

});
m.addS = addS;
m.AddSF = AddSF;