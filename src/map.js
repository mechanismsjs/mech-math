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
      var algo = this._a;
      var isMechanism = algo.isMech;
      if ( null === this._cache) {
         this._cache = [];
         var cur = isMechanism ? algo.go : algo;
         var i = 0;
         while ((undefined !== cur) && ( i < this._fixed)) {
            this._cache[i++] = cur;
            cur = isMechanism ? algo.go : algo;
         }
      }
      return this._cache;
   }},
   goNum: { get: function() { return this.go; }},
   goArr: { get: function() { return this.go; }}
});
m.map = map;
m._.MapF = MapF;