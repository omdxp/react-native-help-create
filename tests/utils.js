const fs = require("file-system");

function fail(reason = "fail was called in a test.") {
  throw new Error(reason);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clear() {
  fs.existsSync("src/redux/") && fs.rmdirSync("src/redux/");
  fs.existsSync("src/screens/") && fs.rmdirSync("src/screens/");
  fs.existsSync("src/components/") && fs.rmdirSync("src/components/");
  fs.existsSync("src") && fs.rmdirSync("src");
}

exports.fail = fail;
exports.sleep = sleep;
exports.clear = clear;
