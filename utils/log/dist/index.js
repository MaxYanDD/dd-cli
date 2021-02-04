"use strict";
exports.__esModule = true;
exports.changeLogLevel = void 0;
var log = require("npmlog");
// 自定义log样式
// log.heading = "dd-cli";
// log.headingStyle = { fg: "red", bg: "white" };
log.addLevel("sucess", 2000, { fg: "yellow" });
function changeLogLevel(level) {
    log.level = level;
    console.log("log level配置更新为" + level);
}
exports.changeLogLevel = changeLogLevel;
exports["default"] = log;
