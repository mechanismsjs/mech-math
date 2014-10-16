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