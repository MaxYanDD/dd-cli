#! /usr/bin/env node

const importLocal = require("import-local");
const { core } = require("../dist");
// 优先本地仓库命令,如果没有才使用全局
if (importLocal(__filename)) {
  require("npmlog").info("cli", "正在使用dd-cli本地版本");
} else {
  core(process.argv.slice(2));
}
