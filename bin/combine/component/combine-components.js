const fs = require("file-system");
const { config, getKebabCase } = require("../../utils");

/**
 * @function combineComponents
 * @description this function is used to combine existed componets to a folder.
 * @param {Array} components - array of components to be combined.
 * @param {string} folder - folder path to contain the combined components.
 * @param {boolean} silent - do not show log messages.
 * @param {boolean} atom - combine atom components.
 * @param {boolean} molecule - combine molecule components.
 * @param {boolean} organism - combine organism components.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.combineComponents = (
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

  const { componentsRoot } = config;
  components = components.map((component) => getKebabCase(component));
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  let path = `${componentsRoot}/`;
  if (atom) {
    path = `${path}/atoms/`;
  }
  if (molecule) {
    path = `${path}/molecules/`;
  }
  if (organism) {
    path = `${path}/organisms/`;
  }
  path = path.replace("//", "/");
  const _path = `${path}${folder}/`.replace("//", "/");
  let folders = [];
  components.forEach((component) => {
    fs.readdirSync(path)
      .filter((f) => f === component)
      .forEach((f) => folders.push(f));
  });
  if (folders.length < components.length) {
    !silent && console.log("Check if all of these components exist");
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
    if (fs.existsSync(`${_path}${f}/`)) {
      !silent && console.log(`${_path}${f}/ already exist`);
    } else {
      fs.rename(`${path}${f}/`, `${_path}${f}`, (err) => {
        if (err) {
          !silent && console.log(`Cannot move ${f} component`);
        } else {
          !silent && console.log(`${f} component moved to ${_path}`);
        }
      });
    }
  });
};
