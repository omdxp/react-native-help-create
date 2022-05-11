const fs = require("file-system");
const { navigationTemplateJs, navigationTemplateTs } = require("../templates");

/**
 * @function createNavigation
 * @description this function is used to create navigation file.
 * @param {Array} navigation - array of screens starting with the navigation type.
 * @param {boolean} js - write file in javascript.
 * @param {boolean} ts - write file in typescript.
 * @param {string} folder - folder path to create navigation with.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createNavigation = (navigation, js, ts, folder) => {
  const path = folder === "" ? "src/screens/" : `src/screens/${folder}/`;
  switch (navigation[0].toLowerCase()) {
    case "stack":
    case "drawer":
    case "tab": {
      if (ts) {
        if (fs.existsSync(`${path}navigation.tsx`)) {
          console.log(`${path}navigation.tsx already exist`);
          break;
        }
        // get existed screens
        let existedScreens = [];
        for (let i = 1; i < navigation.length; i++) {
          const screen = navigation[i];
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
                    ? `./${_path}navigation`.replace("src/screens/", "")
                    : `./${_path}navigation`.replace(
                        `src/screens/${folder}/`,
                        ""
                      ),
                importAs: true,
              });
            } else {
              // folders and files
              let faf = fs.readdirSync(`${_path}`);
              let importableAs = faf.some((el) => el === "navigation.tsx");
              const __path = `./${_path}`.replace("src/screens/", "");
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
                  console.log(`${_path}navigation.tsx does not exist`);
                }
              }
            }
          } else {
            console.log(`${_path} does not exist`);
          }
        }
        // for all existed screens
        if (existedScreens.length === 0) {
          console.log("None of these screens exist");
          break;
        } else {
          fs.writeFile(
            `${path}navigation.tsx`,
            navigationTemplateTs(navigation[0].toLowerCase(), existedScreens),
            (err) => {
              if (err) {
                console.log(`Unable to create ${path}navigation.tsx`);
              } else {
                console.log(`${path}navigation.tsx created`);
              }
            }
          );
        }
      } else {
        if (fs.existsSync(`${path}navigation.jsx`)) {
          console.log(`${path}navigation.jsx already exist`);
          break;
        }
        // get existed screens
        let existedScreens = [];
        for (let i = 1; i < navigation.length; i++) {
          const screen = navigation[i];
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
                    ? `./${_path}navigation`.replace("src/screens/", "")
                    : `./${_path}navigation`.replace(
                        `src/screens/${folder}/`,
                        ""
                      ),
                importAs: true,
              });
            } else {
              // folders and files
              let faf = fs.readdirSync(`${_path}`);
              let importableAs = faf.some((el) => el === "navigation.jsx");
              const __path = `./${_path}`.replace("src/screens/", "");
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
                  console.log(`${_path}navigation.jsx does not exist`);
                }
              }
            }
          } else {
            console.log(`${_path} does not exist`);
          }
        }
        // for all existed screens
        if (existedScreens.length === 0) {
          console.log("None of these screens exist");
          break;
        } else {
          fs.writeFile(
            `${path}navigation.jsx`,
            navigationTemplateJs(navigation[0].toLowerCase(), existedScreens),
            (err) => {
              if (err) {
                console.log(`Unable to create ${path}navigation.jsx`);
              } else {
                console.log(`${path}navigation.jsx created`);
              }
            }
          );
        }
      }
      break;
    }

    default:
      console.log(
        "Only the following navigations are supported: stack, drawer or tab"
      );
      break;
  }
};
