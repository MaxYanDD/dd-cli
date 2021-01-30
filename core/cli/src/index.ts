import * as path from "path";
console.log(path.resolve(__filename));
const version = require("../package.json");
import log from "@dd-cli/log";

export type a = string;

export function checkPkgVersion() {
  log.info("cli版本", version);
}

export function checkNodeVersion() {
  // 1. 获取版本号
  // 2 .比较版本号
}

export function core() {
  console.log("core");
}
