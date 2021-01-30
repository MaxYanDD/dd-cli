"use strict";
exports.__esModule = true;
exports.core = exports.checkNodeVersion = exports.checkPkgVersion = void 0;
var version = require("../package.json").version;
var log_1 = require("@dd-cli/log");
var semver_1 = require("semver");
function checkPkgVersion() {
    log_1["default"].info("cli版本", version);
}
exports.checkPkgVersion = checkPkgVersion;
function checkNodeVersion() {
    // 1. 获取版本号
    var currentVersion = process.version;
    // 2 .比较版本号
    if (semver_1.lt(currentVersion, version)) {
        log_1["default"].warn("node版本太低了", version + "\u4EE5\u4E0A");
    }
}
exports.checkNodeVersion = checkNodeVersion;
function core() {
    checkPkgVersion();
    checkNodeVersion();
    console.log("core4");
}
exports.core = core;
