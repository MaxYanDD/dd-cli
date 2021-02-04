const { version } = require("../package.json");
import log, { changeLogLevel } from "@dd-cli/log";
import { lt } from "semver";
import { LOWEST_NODE_VERSION } from "./constant";
import * as colors from "colors/safe";
import * as rootCheck from "root-check";
import * as userHome from "user-home";
import pathExists = require("path-exists");
import * as minimist from "minimist";
import * as path from "path";
import * as os from "os";

export function core(e) {
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
  } catch (error) {
    log.error("err", error.message);
  }
}

export function checkUpdate() {
  // 1. 获取当前版本号
  // 2. 调用npm api,拿到最新的版本号 比较
}

export function checkEnv() {
  const config = require(path.resolve(userHome, ".dd-cli.config.json"));
  log.verbose("读取用户配置", config);
}

export function checkInputArgs(e) {
  const args = minimist(e);
  if (args.debug) {
    changeLogLevel("verbose");
  }
}

export function checkPkgVersion() {
  log.info("CLI版本", version);
}

export function checkNodeVersion() {
  // 1. 获取版本号
  const currentVersion = process.version;
  // 2 .比较版本号
  if (lt(currentVersion, LOWEST_NODE_VERSION)) {
    throw new Error(
      colors.red(`dd-cli需要安装${LOWEST_NODE_VERSION}以上版本的Node.js`)
    );
  }
}

export function checkRootAuth() {
  rootCheck();
  const sysUerInfo = os.userInfo();
  // bug   process.geteuid is not a function
  console.log(sysUerInfo, process.platform);
}

export function checkUserHome() {
  console.log(userHome);
  if (!userHome || !pathExists(userHome)) {
    throw new Error(colors.red(`当前登录用户主目录不存在`));
  }
}
