const fs = require("file-system");
const { config, getKebabCase } = require("../../utils");

/**
 * @function deleteScreens
 * @description this function is used to delete screens that exists.
 * @param {Array} screens - array of screens to be deleted.
 * @param {string} folder - folder path that contains the screens.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteScreens = (screens, folder) => {
  const { screensRoot } = config;
  screens = screens.map((screen) => getKebabCase(screen));
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  const path = folder === "" ? `${screensRoot}/` : `${screensRoot}/${folder}/`;
  if (screens.length === 0 && folder !== "") {
    try {
      fs.rmdirSync(path);
      console.log(`${path} deleted`);
    } catch (err) {
      console.log(`${path} does not exist`);
    }
    return;
  }
  screens.forEach((screen) => {
    const _path = `${path}${screen}`;
    try {
      fs.rmdirSync(_path);
      console.log(`${_path} deleted`);
    } catch (err) {
      console.log(`${_path} does not exist`);
    }
  });
};
