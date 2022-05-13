const fs = require("file-system");
const { config } = require("../../utils");

/**
 * @function combineScreens
 * @description this function is used to combine existed screens to a folder.
 * @param {Array} screens - array of screens to be combined.
 * @param {string} folder - folder path to contain the combined screens.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.combineScreens = (screens, folder) => {
  const { screensRoot } = config;
  const path = `${screensRoot}/`;
  const _path = `${path}${folder}/`;
  let folders = [];
  screens.forEach((screen) => {
    fs.readdirSync(path)
      .filter((f) => f === screen)
      .forEach((f) => folders.push(f));
  });
  if (folders.length < screens.length) {
    console.log("Check if all of these screens exist");
    return;
  }
  if (!fs.existsSync(_path)) {
    fs.mkdirSync(_path);
  } else {
    console.log(`${_path} already exist`);
    console.log("Writing new files...");
  }
  folders.forEach((f) => {
    if (fs.existsSync(`${_path}${f}`)) {
      console.log(`${_path}${f}/ already exist`);
    } else {
      fs.rename(`${path}${f}/`, `${_path}${f}`, (err) => {
        if (err) {
          console.log(`Cannot move ${f} screen`);
        } else {
          console.log(`${f} screen moved to ${_path}`);
        }
      });
    }
  });
};
