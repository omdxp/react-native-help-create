const fs = require("file-system");
const {
  screenTemplateJs,
  screenTemplateTs,
  screenFunctionTemplateJs,
  screenFunctionTemplateTs,
  stylesTemplate,
} = require("../templates");
const { config } = require("../../../utils");

/**
 * @function createScreen
 * @description this function is used to create a screen.
 * @param {string} screenName - name of screen.
 * @param {boolean} js - write file in javascript.
 * @param {boolean} ts - write file in typescript.
 * @param {string} folder - folder path to create files within.
 * @param {string} template - template file to create screen with.
 * @param {boolean} overwrite - overwrite existed files.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createScreen = (screenName, js, ts, folder, template, overwrite) => {
  const { withStyles, withFunctions, withProps, defaultExports, screensRoot } =
    config;
  let screen = screenName.charAt(0).toUpperCase() + screenName.slice(1);
  if (screenName.includes("-")) {
    screen = "";
    let words = screenName.split("-");
    words.forEach((w) => {
      screen += w.charAt(0).toUpperCase() + w.slice(1);
    });
  }
  const path =
    folder === ""
      ? `${screensRoot}/${screenName.toLowerCase()}/`
      : `${screensRoot}/${folder}/${screenName.toLowerCase()}/`;
  if (fs.existsSync(path) && !overwrite) {
    console.log(`${path} already exist`);
  } else {
    if (ts) {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.split(".")[0] === template)[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(
            `${path}index.tsx`,
            file.replace(/__COMPONENT__/g, page),
            (err) => {
              if (err) {
                console.log(`Unable to create ${screen} screen`);
              } else {
                console.log(`${path}index.tsx created`);
              }
            }
          );
        } else {
          fs.writeFile(
            `${path}index.tsx`,
            screenTemplateTs(
              screen,
              withFunctions,
              withStyles,
              defaultExports,
              withProps
            ),
            (err) => {
              if (err) {
                console.log(`Unable to create ${screen} screen`);
              } else {
                console.log(`${path}index.tsx created`);
              }
            }
          );
        }
      } else {
        fs.writeFile(
          `${path}index.tsx`,
          screenTemplateTs(
            screen,
            withFunctions,
            withStyles,
            defaultExports,
            withProps
          ),
          (err) => {
            if (err) {
              console.log(`Unable to create ${screen} screen`);
            } else {
              console.log(`${path}index.tsx created`);
            }
          }
        );
      }
      withFunctions &&
        fs.writeFile(
          `${path}functions/index.ts`,
          screenFunctionTemplateTs(screen),
          (err) => {
            if (err) {
              console.log(`Unable to create ${screen} screen functions`);
            } else {
              console.log(`${path}functions/index.ts created`);
            }
          }
        );
      withStyles &&
        fs.writeFile(`${path}styles.ts`, stylesTemplate(screen), (err) => {
          if (err) {
            console.log(`Unable to create ${screen} screen styles`);
          } else {
            console.log(`${path}styles.ts created`);
          }
        });
    } else {
      // check if template file exist
      if (template !== "") {
        const temp = fs
          .readdirSync(".template")
          .filter((file) => file.split(".")[0] === template)[0];
        if (temp) {
          const file = fs.readFileSync(`.template/${temp}`, {
            encoding: "utf8",
            flag: "r",
          });
          fs.writeFile(
            `${path}index.jsx`,
            file.replace(/__COMPONENT__/g, page),
            (err) => {
              if (err) {
                console.log(`Unable to create ${screen} screen`);
              } else {
                console.log(`${path}index.jsx created`);
              }
            }
          );
        } else {
          fs.writeFile(
            `${path}index.jsx`,
            screenTemplateJs(screen, withFunctions, withStyles, defaultExports),
            (err) => {
              if (err) {
                console.log(`Unable to create ${screen} screen`);
              } else {
                console.log(`${path}index.jsx created`);
              }
            }
          );
        }
      } else {
        fs.writeFile(
          `${path}index.jsx`,
          screenTemplateJs(screen, withFunctions, withStyles, defaultExports),
          (err) => {
            if (err) {
              console.log(`Unable to create ${screen} screen`);
            } else {
              console.log(`${path}index.jsx created`);
            }
          }
        );
      }
      withFunctions &&
        fs.writeFile(
          `${path}functions/index.js`,
          screenFunctionTemplateJs(screen),
          (err) => {
            if (err) {
              console.log(`Unable to create ${screen} screen functions`);
            } else {
              console.log(`${path}functions/index.js created`);
            }
          }
        );
      withStyles &&
        fs.writeFile(`${path}styles.js`, stylesTemplate(screen), (err) => {
          if (err) {
            console.log(`Unable to create ${screen} screen styles`);
          } else {
            console.log(`${path}styles.js created`);
          }
        });
    }
  }
};
