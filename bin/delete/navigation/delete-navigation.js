const fs = require("file-system");
const { config, getKebabCase } = require("../../utils");

/**
 * @function deleteNavigation
 * @description this function is used to delete navigation file that exists.
 * @param {string} folder - folder path that contains the navigation file.
 * @param {boolean} silent - do not show log messages.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.deleteNavigation = (folder, silent) => {
  const { screensRoot } = config;
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  const path = folder === "" ? `${screensRoot}/` : `${screensRoot}/${folder}/`;
  if (fs.existsSync(`${path}navigation.tsx`)) {
    fs.unlink(`${path}navigation.tsx`, (err) => {
      if (err) {
        !silent && console.log(`Unable to delete ${path}navigation.tsx`);
      } else {
        !silent && console.log(`${path}navigation.tsx deleted`);
      }
    });
  } else if (fs.existsSync(`${path}navigation.jsx`)) {
    fs.unlink(`${path}navigation.jsx`, (err) => {
      if (err) {
        !silent && console.log(`Unable to delete ${path}navigation.jsx`);
      } else {
        !silent && console.log(`${path}navigation.jsx deleted`);
      }
    });
  } else {
    !silent && console.log(`It seems there is no navigation file in ${path}`);
  }
};
