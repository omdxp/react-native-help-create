const fs = require("file-system");
const { config, getKebabCase } = require("../../utils");

/**
 * @function combineScreens
 * @description this function is used to combine existed screens to a folder.
 * @param {Array} screens - array of screens to be combined.
 * @param {string} folder - folder path to contain the combined screens.
 * @param {boolean} silent - do not show log messages.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.combineScreens = (screens, folder, silent) => {
  const { screensRoot } = config;
  screens = screens.map((screen) => getKebabCase(screen));
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  const path = `${screensRoot}/`;
  const _path = `${path}${folder}/`;
  let folders = [];
  screens.forEach((screen) => {
    fs.readdirSync(path)
      .filter((f) => f === screen)
      .forEach((f) => folders.push(f));
  });
  if (folders.length < screens.length) {
    !silent && console.log("Check if all of these screens exist");
    return;
  }
  if (!fs.existsSync(_path)) {
    fs.mkdirSync(_path);
  } else {
    !silent &&
      (() => {
        console.log(`${_path} already exist`);
        console.log("Writing new files...");
      })();
  }
  folders.forEach((f) => {
    if (fs.existsSync(`${_path}${f}`)) {
      !silent && console.log(`${_path}${f}/ already exist`);
    } else {
      fs.rename(`${path}${f}/`, `${_path}${f}`, (err) => {
        if (err) {
          !silent && console.log(`Cannot move ${f} screen`);
        } else {
          !silent && console.log(`${f} screen moved to ${_path}`);
        }
      });
    }
  });
};
