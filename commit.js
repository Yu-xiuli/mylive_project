const msg = require("fs").readFileSync(process.argv[2], "utf-8").trim();

const chalk = require("chalk");

const commitReg = /^(feat|fix|docs|style)(\(.+\))?: .{1,50}/;

if (!commitReg.test(msg)) {
  // eslint-disable-next-line no-console
  console.error(
    `\n${chalk.bgRed.white(" ERROR ")} ${chalk.red(`提交格式错误！`)}\n\n` +
      chalk.red(`  请确认提交格式是否正确。 期望的格式如下示例:\n\n`) +
      `  ${chalk.green(`fix: 修复xxx问题`)}\n` +
      `  ${chalk.green(`feat: 添加xxx模块`)}\n`
  );
  process.exit(1);
}
