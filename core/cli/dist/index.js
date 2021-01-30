"use strict";
exports.__esModule = true;
exports.core = exports.checkNodeVersion = exports.checkPkgVersion = void 0;
var path = require("path");
console.log(path.resolve(__filename));
var version = require("../package.json");
var log_1 = require("@dd-cli/log");
function checkPkgVersion() {
    log_1["default"].info("cli版本", version);
}
exports.checkPkgVersion = checkPkgVersion;
function checkNodeVersion() {
    // 1. 获取版本号
    // 2 .比较版本号
}
exports.checkNodeVersion = checkNodeVersion;
function core() {
    console.log("core");
}
exports.core = core;
