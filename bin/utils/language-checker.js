const fs = require("file-system");

/**
 * @function languageChecker
 * @description Checks if the react project is written in javascript or typescript.
 * @returns {string} "js" if the project is written in javascript and "ts" if the project is written in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.languageChecker = () => {
  let faf = fs.readdirSync("."); // folders and files
  for (let i = 0; i < faf.length; i++) {
    if (faf[i].endsWith("tsx")) {
      return "ts";
    }
  }
  return "js";
};
