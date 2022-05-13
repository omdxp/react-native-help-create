const fs = require("file-system");

/**
 * @function rootChecker
 * @description Check if the current directory is the root of a react project.
 * @returns {boolean} true if the current directory is the root of a react project.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.rootChecker = () => {
  return fs.existsSync("package.json");
};
