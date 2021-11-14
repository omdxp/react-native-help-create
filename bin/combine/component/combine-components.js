const fs = require("file-system");

/**
 * @function combineComponents
 * @description this function is used to combine existed componets to a folder.
 * @param {Array} components - array of components to be combined.
 * @param {string} folder - folder path to contain the combined components.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.combineComponents = (components, folder) => {
  const path = "src/components/";
  const _path = `${path}${folder}/`;
  let folders = [];
  components.forEach((component) => {
    fs.fs
      .readdirSync(path)
      .filter((f) => f === component)
      .forEach((f) => folders.push(f));
  });
  if (folders.length < components.length) {
    console.log("Check if all of these components do exist");
    return;
  }
  if (!fs.existsSync(_path)) {
    fs.mkdirSync(_path);
  } else {
    console.log(`${_path} already exist`);
    console.log("Writing new files...");
  }
  folders.forEach((f) => {
    if (fs.existsSync(`${_path}${f}/`)) {
      console.log(`${_path}${f}/ already exist`);
    } else {
      fs.rename(`${path}${f}/`, `${_path}${f}`, (err) => {
        if (err) {
          console.log(`Cannot move ${f} component`);
        } else {
          console.log(`${f} component moved to ${path}${folder}/`);
        }
      });
    }
  });
};
