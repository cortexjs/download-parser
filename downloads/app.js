var ddoc = module.exports =
  { _id:'_design/app'
  , views: require("./views.js")
  , language: "javascript"
  }

var modules = require("./modules.js")
for (var i in modules) ddoc[i] = modules[i]
