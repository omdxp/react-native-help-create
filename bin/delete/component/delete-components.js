const fs = require("file-system");
const { config } = require("../../utils");

/**
 * @function deleteComponents
 * @description this function is used to delete components that exists.
 * @param {Array} components - array of components to be deleted.
 * @param {string} folder - folder path that contains the components.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteComponents = (components, folder) => {
  const { componentsRoot } = config;
  const path =
    folder === "" ? `${componentsRoot}/` : `${componentsRoot}/${folder}/`;
  if (components.length === 0 && folder !== "") {
    try {
      fs.rmdirSync(path);
      console.log(`${path} deleted`);
    } catch (err) {
      console.log(`${path} does not exist`);
    }
    return;
  }
  components.forEach((component) => {
    const _path = `${path}${component}/`;
    try {
      fs.rmdirSync(_path);
      console.log(`${_path} deleted`);
    } catch (err) {
      console.log(`${_path} does not exist`);
    }
  });
};
