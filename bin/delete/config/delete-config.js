const fs = require("file-system");

/**
 * @function deleteConfig
 * @description this function is used to delete the config file.
 * @param {boolean} silent - do not show log messages.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteConfig = (silent) => {
  if (fs.existsSync("./rnhc.config.json")) {
    fs.unlinkSync("./rnhc.config.json");
    !silent && console.log("rnhc.config.json deleted");
  } else {
    !silent && console.log("nrhc.config.json does not exist");
  }
};
