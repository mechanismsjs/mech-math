function MaxF(){};
function max() {
   var f = Object.create(MaxF.prototype);
   f._args = arguments;
   return f;
};
MaxF.prototype = Object.create(Object.prototype, {
   isMech: { get: function() { return true; }},
   go: { get: function() {
      var curMin = -Infinity;
      var args = this._args;
      for(var i=0; i < args.length; i++) {
         var temp = args[i].isMech ? args[i].go : args[i];
         if (temp > curMin) {
            curMin = temp;
         }
      }
      return curMin;
   }},
   goArr: { get: function() { return this.go; }}
});
m.max = max;
m._.MaxF = MaxF;