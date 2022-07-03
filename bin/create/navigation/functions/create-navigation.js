const fs = require("file-system");
const { navigationTemplateJs, navigationTemplateTs } = require("../templates");
const { config, getKebabCase } = require("../../../utils");

/**
 * @function createNavigation
 * @description this function is used to create navigation file.
 * @param {Array} navigation - array of screens starting with the navigation type.
 * @param {boolean} ts - write file in typescript.
 * @param {string} folder - folder path to create navigation with.
 * @param {boolean} overwrite - overwrite existed files.
 * @param {boolean} silent - do not show log messages.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createNavigation = (navigation, ts, folder, overwrite, silent) => {
  const { defaultExports, screensRoot } = config;
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  const path = folder === "" ? `${screensRoot}/` : `${screensRoot}/${folder}/`;
  if (!fs.existsSync(path)) {
    !silent && console.log(`${path} does not exist`);
    return;
  }
  if (!navigation.length) {
    !silent &&
      (() => {
        console.log("Please provide at least a navigation type");
        console.log(
          "Only the following navigations are supported: stack, drawer or tab"
        );
      })();
    return;
  }
  const navigationType = navigation[0].toLowerCase();
  switch (navigationType) {
    case "stack":
    case "native-stack":
    case "drawer":
    case "bottom-tabs":
    case "material-bottom-tabs":
    case "material-top-tabs": {
      if (ts) {
        if (fs.existsSync(`${path}navigation.tsx`) && !overwrite) {
          !silent && console.log(`${path}navigation.tsx already exist`);
          break;
        }
        // get existed screens
        navigation.shift();
        let screens = navigation;
        screens = screens.map((screen) => getKebabCase(screen));
        let existedScreens = [];
        if (screens.length === 0) {
          // folders and files
          screens = fs.readdirSync(path).filter((el) => !el.endsWith("sx"));
        }
        for (let i = 0; i < screens.length; i++) {
          const screen = screens[i];
          let componentName = screen.charAt(0).toUpperCase() + screen.slice(1);
          if (screen.includes("-")) {
            componentName = "";
            let words = screen.split("-");
            words.forEach((w) => {
              componentName += w.charAt(0).toUpperCase() + w.slice(1);
            });
          }
          const _path = `${path}${screen}/`;
          if (fs.existsSync(_path)) {
            if (fs.existsSync(`${_path}navigation.tsx`)) {
              existedScreens.push({
                folderName: screen,
                componentName,
                path:
                  folder === ""
                    ? `./${_path}navigation`.replace(`${screensRoot}/`, "")
                    : `./${_path}navigation`.replace(
                        `src/screens/${folder}/`,
                        ""
                      ),
                importAs: true,
              });
            } else {
              // folders and files
              let faf = fs.readdirSync(_path);
              let importableAs = faf.some((el) => el === "navigation.tsx");
              const __path = `./${_path}`.replace(`${screensRoot}/`, "");
              if (importableAs) {
                existedScreens.push({
                  folderName: screen,
                  componentName: `${componentName}Screen`,
                  path:
                    folder === ""
                      ? __path.slice(0, __path.length - 1)
                      : __path
                          .slice(0, __path.length - 1)
                          .replace(`${folder}/`, ""),
                  importAs: importableAs,
                });
              } else {
                let importable = faf.some((el) => el === "index.tsx");
                if (importable) {
                  existedScreens.push({
                    folderName: screen,
                    componentName: `${componentName}Screen`,
                    path:
                      folder === ""
                        ? __path.slice(0, __path.length - 1)
                        : __path
                            .slice(0, __path.length - 1)
                            .replace(`${folder}/`, ""),
                    importAs: importableAs,
                  });
                } else {
                  !silent &&
                    console.log(`${_path}navigation.tsx does not exist`);
                }
              }
            }
          } else {
            !silent && console.log(`${_path} does not exist`);
          }
        }
        // for all existed screens
        if (existedScreens.length === 0) {
          !silent && console.log("None of these screens exist");
          break;
        } else {
          fs.writeFile(
            `${path}navigation.tsx`,
            navigationTemplateTs(
              navigationType,
              existedScreens,
              defaultExports
            ),
            (err) => {
              if (err) {
                !silent &&
                  console.log(`Unable to create ${path}navigation.tsx`);
              } else {
                !silent && console.log(`${path}navigation.tsx created`);
              }
            }
          );
        }
      } else {
        if (fs.existsSync(`${path}navigation.jsx`) && !overwrite) {
          !silent && console.log(`${path}navigation.jsx already exist`);
          break;
        }
        // get existed screens
        navigation.shift();
        let screens = navigation;
        let existedScreens = [];
        if (screens.length === 0) {
          // folders and files
          screens = fs.readdirSync(path).filter((el) => !el.endsWith("sx"));
        }
        for (let i = 0; i < screens.length; i++) {
          const screen = screens[i];
          let componentName = screen.charAt(0).toUpperCase() + screen.slice(1);
          if (screen.includes("-")) {
            componentName = "";
            let words = screen.split("-");
            words.forEach((w) => {
              componentName += w.charAt(0).toUpperCase() + w.slice(1);
            });
          }
          const _path = `${path}${screen}/`;
          if (fs.existsSync(_path)) {
            if (fs.existsSync(`${_path}navigation.jsx`)) {
              existedScreens.push({
                folderName: screen,
                componentName,
                path:
                  folder === ""
                    ? `./${_path}navigation`.replace(`${screensRoot}/`, "")
                    : `./${_path}navigation`.replace(
                        `${screensRoot}/${folder}/`,
                        ""
                      ),
                importAs: true,
              });
            } else {
              // folders and files
              let faf = fs.readdirSync(`${_path}`);
              let importableAs = faf.some((el) => el === "navigation.jsx");
              const __path = `./${_path}`.replace(`${screensRoot}/`, "");
              if (importableAs) {
                existedScreens.push({
                  folderName: screen,
                  componentName,
                  path:
                    folder === ""
                      ? __path.slice(0, __path.length - 1)
                      : __path
                          .slice(0, __path.length - 1)
                          .replace(`${folder}/`, ""),
                  importAs: importableAs,
                });
              } else {
                let importable = faf.some((el) => el === "index.jsx");
                if (importable) {
                  existedScreens.push({
                    folderName: screen,
                    componentName: `${componentName}Screen`,
                    path:
                      folder === ""
                        ? __path.slice(0, __path.length - 1)
                        : __path
                            .slice(0, __path.length - 1)
                            .replace(`${folder}/`, ""),
                    importAs: importableAs,
                  });
                } else {
                  !silent &&
                    console.log(`${_path}navigation.jsx does not exist`);
                }
              }
            }
          } else {
            !silent && console.log(`${_path} does not exist`);
          }
        }
        // for all existed screens
        if (existedScreens.length === 0) {
          !silent && console.log("None of these screens exist");
          break;
        } else {
          fs.writeFile(
            `${path}navigation.jsx`,
            navigationTemplateJs(
              navigationType,
              existedScreens,
              defaultExports
            ),
            (err) => {
              if (err) {
                !silent &&
                  console.log(`Unable to create ${path}navigation.jsx`);
              } else {
                !silent && console.log(`${path}navigation.jsx created`);
              }
            }
          );
        }
      }
      break;
    }

    default:
      !silent &&
        console.log(
          "Only the following navigations are supported: stack, native-stack, drawer, bottom-tabs, material-bottom-tabs or material-top-tabs"
        );
      break;
  }
};
