const fs = require("file-system");
const { config, getKebabCase } = require("../../utils");

/**
 * @function deleteComponents
 * @description this function is used to delete components that exists.
 * @param {Array} components - array of components to be deleted.
 * @param {string} folder - folder path that contains the components.
 * @param {boolean} silent - do not show log messages.
 * @param {boolean} atom - delete atom components.
 * @param {boolean} molecule - delete molecule components.
 * @param {boolean} organism - delete organism components.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.deleteComponents = (
  components,
  folder,
  silent,
  atom,
  molecule,
  organism
) => {
  if (
    (atom && molecule && organism) ||
    (atom && molecule) ||
    (atom && organism) ||
    (molecule && organism)
  ) {
    console.log("You can only choose one type of component");
    process.exit(1);
  }
  if (atom) {
    folder = `${folder}/atoms`;
  }
  if (molecule) {
    folder = `${folder}/molecules`;
  }
  if (organism) {
    folder = `${folder}/organisms`;
  }
  const { componentsRoot } = config;
  components = components.map((component) => getKebabCase(component));
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  const path =
    folder === ""
      ? `${componentsRoot}/`.replace("//", "/")
      : `${componentsRoot}/${folder}/`.replace("//", "/");
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
