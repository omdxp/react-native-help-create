const fs = require("file-system");

/**
 * @function languageChecker
 * @description Checks if the react project is written in javascript or typescript.
 * @returns {string} "js" if the project is written in javascript and "ts" if the project is written in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.languageChecker = () => {
  return fs.fs.existsSync("tsconfig.json") ? "ts" : "js";
};
