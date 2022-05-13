const fs = require("file-system");
const { config } = require("../../utils");

/**
 * @function deleteReduxStore
 * @description this function is used to delete redux store implementation that exists.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteReduxStore = () => {
  const { reduxRoot } = config;
  const path = `${reduxRoot}/`;
  try {
    fs.rmdirSync(path);
    console.log(`${path} deleted`);
  } catch (err) {
    console.log(`${path} does not exist`);
  }
};
