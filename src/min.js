function MinF(){};
function min() {
   var f = Object.create(MinF.prototype);
   f._args = arguments;
   return f;
};
MinF.prototype = Object.create(Object.prototype, {
   isMech: { get: function() { return true; }},
   go: { get: function() {
      var curMin = +Infinity;
      var args = this._args;
      for(var i=0; i < args.length; i++) {
         var temp = args[i].isMech ? args[i].go : args[i];
         if (temp < curMin) {
            curMin = temp;
         }
      }
      return curMin;
   }},
   goArr: { get: function() { return this.go; }}
});
m.min = min;
m._.MinF = MinF;