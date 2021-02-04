"use strict";
exports.__esModule = true;
exports.checkUserHome = exports.checkRootAuth = exports.checkNodeVersion = exports.checkPkgVersion = exports.checkInputArgs = exports.checkEnv = exports.checkUpdate = exports.core = void 0;
var version = require("../package.json").version;
var log_1 = require("@dd-cli/log");
var semver_1 = require("semver");
var constant_1 = require("./constant");
var colors = require("colors/safe");
var rootCheck = require("root-check");
var userHome = require("user-home");
var pathExists = require("path-exists");
var minimist = require("minimist");
var path = require("path");
var os = require("os");
function core(e) {
    try {
        // cli程序启动函数
        // 1. 版本检查，node检测，更新检查
        checkPkgVersion();
        checkNodeVersion();
        checkRootAuth();
        // 2. cli配置，根据入参
        checkInputArgs(e);
        checkUserHome();
        //3. 环境本地开发环境检测
        checkEnv();
        // 4. 检查更新
        checkUpdate();
    }
    catch (error) {
        log_1["default"].error("err", error.message);
    }
}
exports.core = core;
function checkUpdate() {
    // 1. 获取当前版本号
    // 2. 调用npm api,拿到最新的版本号 比较
}
exports.checkUpdate = checkUpdate;
function checkEnv() {
    var config = require(path.resolve(userHome, ".dd-cli.config.json"));
    log_1["default"].verbose("读取用户配置", config);
}
exports.checkEnv = checkEnv;
function checkInputArgs(e) {
    var args = minimist(e);
    if (args.debug) {
        log_1.changeLogLevel("verbose");
    }
}
exports.checkInputArgs = checkInputArgs;
function checkPkgVersion() {
    log_1["default"].info("CLI版本", version);
}
exports.checkPkgVersion = checkPkgVersion;
function checkNodeVersion() {
    // 1. 获取版本号
    var currentVersion = process.version;
    // 2 .比较版本号
    if (semver_1.lt(currentVersion, constant_1.LOWEST_NODE_VERSION)) {
        throw new Error(colors.red("dd-cli\u9700\u8981\u5B89\u88C5" + constant_1.LOWEST_NODE_VERSION + "\u4EE5\u4E0A\u7248\u672C\u7684Node.js"));
    }
}
exports.checkNodeVersion = checkNodeVersion;
function checkRootAuth() {
    rootCheck();
    var sysUerInfo = os.userInfo();
    // bug   process.geteuid is not a function
    console.log(sysUerInfo, process.platform);
}
exports.checkRootAuth = checkRootAuth;
function checkUserHome() {
    console.log(userHome);
    if (!userHome || !pathExists(userHome)) {
        throw new Error(colors.red("\u5F53\u524D\u767B\u5F55\u7528\u6237\u4E3B\u76EE\u5F55\u4E0D\u5B58\u5728"));
    }
}
exports.checkUserHome = checkUserHome;
