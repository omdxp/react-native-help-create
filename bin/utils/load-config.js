const fs = require("file-system");
const { config } = require("./configs");

/**
 * @function loadConfig
 * @description Loads the configuration json file for rhc.
 * @returns {Object} The configuration object.
 * @throws {Error} If the configuration file cannot be loaded.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.loadConfig = () => {
  try {
    const {
      withStyles,
      withFunctions,
      withProps,
      withTests,
      defaultExports,
      componentsRoot,
      screensRoot,
      reduxRoot,
      applyReduxThunk,
    } = JSON.parse(fs.readFileSync("./rnhc.config.json"));
    config.withStyles = typeof withStyles === "boolean" ? withStyles : true;
    config.withFunctions =
      typeof withFunctions === "boolean" ? withFunctions : true;
    config.withProps = typeof withProps === "boolean" ? withProps : true;
    config.withTests = typeof withTests === "boolean" ? withTests : true;
    config.defaultExports =
      typeof defaultExports === "boolean" ? defaultExports : true;
    config.componentsRoot =
      typeof componentsRoot === "string" ? componentsRoot : "./src/components";
    config.screensRoot =
      typeof screensRoot === "string" ? screensRoot : "./src/screens";
    config.reduxRoot =
      typeof reduxRoot === "string" ? reduxRoot : "./src/redux";
    config.applyReduxThunk =
      typeof applyReduxThunk === "boolean" ? applyReduxThunk : true;
  } catch (e) {
    throw new Error(
      "The configuration file could not be loaded. Please make sure that the file exists and is valid."
    );
  }
};
