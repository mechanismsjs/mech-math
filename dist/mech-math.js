// mech-math.js
// version: 0.1.1
// author: Eric Hosick <erichosick@gmail.com> (http://www.erichosick.com/)
// license: MIT
(function() {
"use strict";
var root = this; // Establish the root object: 'window' in the browser 'exports' on the server
var previous = root.m; // Save the previous m
var m = previous || {}; // New module or merge with previous
m["version-math"] = '0.1.1'; // Current version updated by gulpfile.js build process

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  this.m = m;
}

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
function AddF(){};
function add(left,right) {
   var f = Object.create(AddF.prototype);
   f.l = left;
   f.r = right;
   return f;
};
AddF.prototype = Object.create(DualArgF.prototype, {
   goNum: { get: function() { return (this._l.isMech ? this._l.goNum : this._l) + (this._r.isMech ? this._r.goNum : this._r); } },
   goStr: { get: function() { return "(" + (this._l.isMech ? this._l.goStr : this._l) + " + " + (this._r.isMech ? this._r.goStr : this._r) + ")"; } },
});
m.add = add;
m.AddF = AddF;
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
function MulF(){};
function mul(left,right) {
   var f = Object.create(MulF.prototype);
   f.l = left;
   f.r = right;
   return f;
};
MulF.prototype = Object.create(DualArgF.prototype, {
   goNum: { get: function() { return (this._l.isMech ? this._l.goNum : this._l) * (this._r.isMech ? this._r.goNum : this._r); } },
   goStr: { get: function() { return "(" + (this._l.isMech ? this._l.goStr : this._l) + " * " + (this._r.isMech ? this._r.goStr : this._r) + ")"; } },
});
m.mul = mul;
m.MulF = MulF;
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

}.call(this));