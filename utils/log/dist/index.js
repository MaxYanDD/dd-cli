"use strict";
exports.__esModule = true;
var log = require("npmlog");
// 配置loginfo等级
// log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : "info";
// 自定义log样式
// log.heading = "dd-cli";
// log.headingStyle = { fg: "red", bg: "white" };
log.addLevel("sucess", 2001, { fg: "green" });
exports["default"] = log;
