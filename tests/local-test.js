var merge = require("merge");
m=require("../node_modules/mech-core/dist/mech-core.js");
merge(m,require("../node_modules/mech-emit/dist/mech-emit.js")); // yep! cause this is also coreish
merge(m,require("../dist/mech-math.js")); // yep! cause our math library becomes part of the core mechanisms.
expect = require("chai").expect;
require("./run-all.js");