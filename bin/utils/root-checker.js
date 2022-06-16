const fs = require("file-system");

/**
 * @function rootChecker
 * @description Check if the current directory is the root of a react project.
 * @returns {boolean} true if the current directory is the root of a react project.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.rootChecker = () => {
  if (!fs.fs.existsSync("./package.json")) return false;
  const { dependencies } = JSON.parse(fs.fs.readFileSync("./package.json"));
  if (dependencies.react && !dependencies["react-native"]) {
    console.log(
      "It seems you are in a react project. We suggest you to use react-help-create instead."
    );
    return true;
  }
  return dependencies.react && dependencies["react-native"];
};
