function PowF(){};
function pow(base, exp) {
   var f = Object.create(PowF.prototype);
   f._l = ((null === base) || (undefined === base)) ? undefined : base;
   f._r = ((null === exp) || (undefined === exp)) ? undefined : exp;
   return f;
};
PowF.prototype = Object.create(DualArgF.prototype, {
   isMech: { get: function() { return true; }},   
   goNum: { enumerable: false, get: function() {
      var lres = this.lv;
      var rres = this.rv;
      return (lres === undefined) || (rres === undefined) ? undefined : Math.pow(lres,rres);
   }},
   goStr: { enumerable: false, get: function() { return "(" + this.ls + " ^ " + this.rs + ")"; }}
});
m.pow = pow;
m._.PowF = PowF;