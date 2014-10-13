(function() {
"use strict";
var root = this; // Establish the root object: 'window' in the browser 'exports' on the server
var previous = root.m; // Save the previous m
var m = previous || {}; // New module or merge with previous
m["version-math"] = '{{VERSION}}'; // Current version updated by gulpfile.js build process

// Export module for Node and the browser.
if(typeof module !== 'undefined' && module.exports) {
  module.exports = m;
} else {
  this.m = m;
}
