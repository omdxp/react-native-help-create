const fs = require("file-system");
const { defaultConfigTemplate } = require("../templates");

/**
 * @function createConfig
 * @description this function is used to create the config file.
 * @param {boolean} overwrite - to overwrite the existing config file.
 * @param {boolean} silent - do not show log messages.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createConfig = (overwrite, silent) => {
  if (fs.existsSync("./rnhc.config.json") && !overwrite) {
    !silent && console.log("rnhc.config.json already exist");
    return;
  }
  fs.writeFile("./rnhc.config.json", defaultConfigTemplate(), (err) => {
    if (err) {
      !silent && console.log("Unable to create rnhc.config.json");
    } else {
      !silent && console.log("rnhc.config.json created");
    }
  });
};
