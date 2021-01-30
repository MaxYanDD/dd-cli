const { version } = require("../package.json");
import log from "@dd-cli/log";
import { lt } from "semver";

export function checkPkgVersion() {
  log.info("cli版本", version);
}

export function checkNodeVersion() {
  // 1. 获取版本号
  const currentVersion = process.version;
  // 2 .比较版本号
  if (lt(currentVersion, version)) {
    log.warn("node版本太低了", `${version}以上`);
  }
}

export function core() {
  checkPkgVersion();
  checkNodeVersion();
  console.log("core4");
}
