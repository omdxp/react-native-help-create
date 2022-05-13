const fs = require("file-system");

/**
 * @function deleteConfig
 * @description this function is used to delete the config file.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteConfig = () => {
  if (fs.existsSync("./rnhc.config.json")) {
    fs.unlinkSync("./rnhc.config.json");
    console.log("rnhc.config.json deleted");
  } else {
    console.log("nrhc.config.json does not exist");
  }
};
