function PowF() {}

function pow(base, exp) {
  var f = Object.create(PowF.prototype);
  f._l = ((null === base) || (undefined === base)) ? undefined : base;
  if (f._l && f._l.isMech) {
    f._l._parDir = f;
  }
  f._r = ((null === exp) || (undefined === exp)) ? undefined : exp;
  if (f._r && f._r.isMech) {
    f._r._parDir = f;
  }
  return f;
}
PowF.prototype = Object.create(DualArgF.prototype, {
  isMech: {
    get: function() {
      return true;
    }
  },
  goNum: {
    enumerable: false,
    get: function() {
      var lres = this.lv;
      var rres = this.rv;
      return (lres === undefined) || (rres === undefined) ? undefined : Math.pow(lres, rres);
    }
  },
  goStr: {
    enumerable: false,
    get: function() {
      return "(" + this.ls + " ^ " + this.rs + ")";
    }
  }
});
m.pow = pow;
m._.PowF = PowF;
