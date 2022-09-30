const fs = require("file-system");

/**
 * @function languageChecker
 * @description Checks if the react project is written in javascript or typescript.
 * @returns {string} "js" if the project is written in javascript and "ts" if the project is written in typescript.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.languageChecker = () => {
  return fs.fs.existsSync("tsconfig.json") ? "ts" : "js";
};
