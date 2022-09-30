const fs = require("file-system");
const { config } = require("../../utils");

/**
 * @function deleteReduxStore
 * @description this function is used to delete redux store implementation that exists.
 * @param {boolean} silent - do not show log messages.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.deleteReduxStore = (silent) => {
  const { reduxRoot } = config;
  const path = `${reduxRoot}/`;
  try {
    fs.rmdirSync(path);
    !silent && console.log(`${path} deleted`);
  } catch (err) {
    !silent && console.log(`${path} does not exist`);
  }
};
