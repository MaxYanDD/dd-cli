"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = require("npmlog");
// 配置loginfo等级
// log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : "info";
// 自定义log样式
// log.heading = "dd-cli";
// log.headingStyle = { fg: "red", bg: "white" };
log.addLevel("sucess", 2000, { fg: "green" });
exports.default = log;
