const { builtinModules } = require("module");

const data = function (a, b) {
    return a + b;
}

exports.module = data;