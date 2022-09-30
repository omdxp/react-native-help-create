const fs = require("file-system");
const { config, getKebabCase } = require("../../utils");

/**
 * @function deleteComponents
 * @description this function is used to delete components that exists.
 * @param {Array} components - array of components to be deleted.
 * @param {string} folder - folder path that contains the components.
 * @param {boolean} silent - do not show log messages.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.deleteComponents = (components, folder, silent) => {
  const { componentsRoot } = config;
  components = components.map((component) => getKebabCase(component));
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  const path =
    folder === "" ? `${componentsRoot}/` : `${componentsRoot}/${folder}/`;
  if (components.length === 0 && folder !== "") {
    try {
      fs.rmdirSync(path);
      !silent && console.log(`${path} deleted`);
    } catch (err) {
      !silent && console.log(`${path} does not exist`);
    }
    return;
  }
  components.forEach((component) => {
    const _path = `${path}${component}/`;
    try {
      fs.rmdirSync(_path);
      !silent && console.log(`${_path} deleted`);
    } catch (err) {
      !silent && console.log(`${_path} does not exist`);
    }
  });
};
