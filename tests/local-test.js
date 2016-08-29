var merge = require("merge");
m = require("../node_modules/mech-core/dist/mech-core.js");
var m2 = require("../node_modules/mech-emit/dist/mech-emit.js"); // yep! cause this is also coreish
var m3 = require(".."); // yep! cause our math library becomes part of the core mechanisms.
merge.recursive(m, m2); // mech-core is a core mechanism
merge.recursive(m, m3); // mech-emit is a core mechanism
expect = require("chai").expect;
require("./run-all.js");
