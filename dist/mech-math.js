// mech-math.js
// version: 0.1.3
// author: Eric Hosick <erichosick@gmail.com> (http://www.erichosick.com/)
// license: MIT
(function() {
"use strict";
var root = this; // Establish the root object: 'window' in the browser 'exports' on the server
var previous = root.m; // Save the previous m
var m = previous || {}; // New module or merge with previous
m["version-math"] = '0.1.3'; // Current version updated by gulpfile.js build process

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  this.m = m;
}

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
   go: { enumerable: false, get: function() { return this.goNum; } },
   goArr: { enumerable: false, get: function() { return [this.goNum]; } },
   goBool: { enumerable: false, get: function() { return (this.goNum > 0); } }
});
m.dualArg = dualArg;
m.DualArgF = DualArgF;
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
m.AddF = AddF;
function SubF(){};
function sub(left,right) {
   var f = Object.create(SubF.prototype);
   f._l = ((null === left) || (undefined === left)) ? undefined : left;
   f._r = ((null === right) || (undefined === right)) ? undefined : right;
   return f;
};
SubF.prototype = Object.create(DualArgF.prototype, {
   goNum: { enumerable: false, get: function() {
      if (undefined === this._l || undefined === this._r) { return undefined; }
      var lf = this._l.isMech ? this._l.goNum : this._l;
      if (undefined === lf ) { return undefined; }
      var rf = this._r.isMech ? this._r.goNum : this._r;
      if ( undefined === rf ) { return undefined; }
      return lf - rf;
   }},
   goStr: { enumerable: false, get: function() { return "(" + this.ls + " - " + this.rs + ")"; }}
});
m.sub = sub;
m.SubF = SubF;
function MulF(){};
function mul(left,right) {
   var f = Object.create(MulF.prototype);
   f._l = ((null === left) || (undefined === left)) ? undefined : left;
   f._r = ((null === right) || (undefined === right)) ? undefined : right;
   return f;
};
MulF.prototype = Object.create(DualArgF.prototype, {
   goNum: { enumerable: false, get: function() {
      if (undefined === this._l || undefined === this._r) { return undefined; }
      var lf = this._l.isMech ? this._l.goNum : this._l;
      if (undefined === lf ) { return undefined; }
      var rf = this._r.isMech ? this._r.goNum : this._r;
      if ( undefined === rf ) { return undefined; }
      return lf * rf;
   }},
   goStr: { enumerable: false, get: function() { return "(" + this.ls + " * " + this.rs + ")"; }}
});
m.mul = mul;
m.MulF = MulF;
function DivF(){};
function div(left,right) {
   var f = Object.create(DivF.prototype);
   f._l = ((null === left) || (undefined === left)) ? undefined : left;
   f._r = ((null === right) || (undefined === right)) ? undefined : right;
   return f;
};
DivF.prototype = Object.create(DualArgF.prototype, {
   goNum: { enumerable: false, get: function() {
      if (undefined === this._l || undefined === this._r) { return undefined; }
      var lf = this._l.isMech ? this._l.goNum : this._l;
      if (undefined === lf ) { return undefined; }
      var rf = this._r.isMech ? this._r.goNum : this._r;
      if ( undefined === rf ) { return undefined; }
      return lf / rf;
   }},
   goStr: { enumerable: false, get: function() { return "(" + this.ls + " / " + this.rs + ")"; }}
});
m.div = div;
m.DivF = DivF;
function ModulusF(){};
function modulus(left,right) {
   var f = Object.create(ModulusF.prototype);
   f._l = ((null === left) || (undefined === left)) ? undefined : left;
   f._r = ((null === right) || (undefined === right)) ? undefined : right;
   return f;
};
ModulusF.prototype = Object.create(DualArgF.prototype, {
   goNum: { enumerable: false, get: function() {
      if (undefined === this._l || undefined === this._r) { return undefined; }
      var lf = this._l.isMech ? this._l.goNum : this._l;
      if (undefined === lf ) { return undefined; }
      var rf = this._r.isMech ? this._r.goNum : this._r;
      if ( undefined === rf ) { return undefined; }
      return lf % rf;
   }},
   goStr: { enumerable: false, get: function() { return "(" + this.ls + " % " + this.rs + ")"; }}
});
m.modulus = modulus;
m.ModulusF = ModulusF;
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
function MapF(){};
function map(algo,fixed) {
   var f = Object.create(MapF.prototype);
   f._a = algo;
   f._cache = null;
   f._fixed = ((null == fixed) || (undefined == fixed)) ? 1000 : fixed;
   return f;
};
MapF.prototype = Object.create(Object.prototype, {
   isMech: { get: function() { return true; }},
   go: { get: function() {
      if ( null === this._cache) {
         this._cache = [];
         var cur = this._a.go;
         var i = 0;
         while ((undefined !== cur) && ( i < this._fixed)) {
            this._cache[i++] = cur;
            cur = this._a.go;
         }
      }
      return this._cache;
   }},
   goNum: { get: function() { return this.go; }},
   goArr: { get: function() { return this.go; }}
});
m.map = map;
m.MapF = MapF;

}.call(this));