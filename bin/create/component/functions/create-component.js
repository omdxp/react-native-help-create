const fs = require("file-system");
const {
  componentTemplateJs,
  componentTemplateTs,
  stylesTemplate,
  testTemplate,
} = require("../templates");
const { config, getComponentName, getKebabCase } = require("../../../utils");

/**
 * @function createComponent
 * @description this function is used to create a component.
 * @param {string} componentName - name of component.
 * @param {boolean} ts - write file in typescript.
 * @param {string} folder - folder path to create files within.
 * @param {string} template - template file to create component with.
 * @param {boolean} overwrite - overwrite existed files.
 * @param {boolean} silent - do not show log messages.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.createComponent = (
  componentName,
  ts,
  folder,
  template,
  overwrite,
  silent
) => {
  const { withStyles, withProps, withTests, defaultExports, componentsRoot } =
    config;
  componentName = getKebabCase(componentName);
  folder = folder.includes("/")
    ? folder
        .split("/")
        .map((folder) => getKebabCase(folder))
        .join("/")
    : getKebabCase(folder);
  let component = getComponentName(componentName);
  if (ts) {
    const path =
      folder === ""
        ? `${componentsRoot}/${componentName}/index.tsx`
        : `${componentsRoot}/${folder}/${componentName}/index.tsx`;
    const stylesPath =
      folder === ""
        ? `${componentsRoot}/${componentName}/styles.ts`
        : `${componentsRoot}/${folder}/${componentName}/styles.ts`;
    const testsPath =
      folder === ""
        ? `${componentsRoot}/${componentName}/__tests__/index.spec.tsx`
        : `${componentsRoot}/${folder}/${componentName}/__tests__/index.spec.tsx`;

    if (fs.existsSync(path) && !overwrite) {
      !silent && console.log(`${path} already exist`);
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
            path,
            file.replace(/__COMPONENT__/g, component),
            (err) => {
              if (err) {
                console.log(`Unable to create ${component} component`);
              } else {
                console.log(`${path} created`);
              }
            }
          );
          withStyles &&
            fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
              if (err) {
                console.log(`Unable to create ${component} component styles`);
              } else {
                console.log(`${stylesPath} created`);
              }
            });
          withTests &&
            fs.writeFile(
              testsPath,
              testTemplate(component, defaultExports),
              (err) => {
                if (err) {
                  console.log(`Unable to create ${component} component tests`);
                } else {
                  console.log(`${testsPath} created`);
                }
              }
            );
        } else {
          !silent && console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          path,
          componentTemplateTs(component, withStyles, defaultExports, withProps),
          (err) => {
            if (err) {
              !silent && console.log(`Unable to create ${component} component`);
            } else {
              !silent && console.log(`${path} created`);
            }
          }
        );
        withStyles &&
          fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
            if (err) {
              !silent &&
                console.log(`Unable to create ${component} component styles`);
            } else {
              !silent && console.log(`${stylesPath} created`);
            }
          });
        withTests &&
          fs.writeFile(
            testsPath,
            testTemplate(component, defaultExports),
            (err) => {
              if (err) {
                !silent &&
                  console.log(`Unable to create ${component} component tests`);
              } else {
                !silent && console.log(`${testsPath} created`);
              }
            }
          );
      }
    }
  } else {
    const path =
      folder === ""
        ? `${componentsRoot}/${componentName}/index.jsx`
        : `${componentsRoot}/${folder}/${componentName}/index.jsx`;
    const stylesPath =
      folder === ""
        ? `${componentsRoot}/${componentName}/styles.js`
        : `${componentsRoot}/${folder}/${componentName}/styles.js`;
    const testsPath =
      folder === ""
        ? `${componentsRoot}/${componentName}/__tests__/index.spec.jsx`
        : `${componentsRoot}/${folder}/${componentName}/__tests__/index.spec.jsx`;
    if (fs.existsSync(path) && !overwrite) {
      !silent && console.log(`${path} already exist`);
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
            path,
            file.replace(/__COMPONENT__/g, component),
            (err) => {
              if (err) {
                !silent &&
                  console.log(`Unable to create ${component} component`);
              } else {
                !silent && console.log(`${path} created`);
              }
            }
          );
          withStyles &&
            fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
              if (err) {
                !silent &&
                  console.log(`Unable to create ${component} component styles`);
              } else {
                !silent && console.log(`${stylesPath} created`);
              }
            });
          withTests &&
            fs.writeFile(
              testsPath,
              testTemplate(component, defaultExports),
              (err) => {
                if (err) {
                  !silent &&
                    console.log(
                      `Unable to create ${component} component tests`
                    );
                } else {
                  !silent && console.log(`${testsPath} created`);
                }
              }
            );
        } else {
          !silent && console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          path,
          componentTemplateJs(component, withStyles, defaultExports),
          (err) => {
            if (err) {
              !silent && console.log(`Unable to create ${component} component`);
            } else {
              !silent && console.log(`${path} created`);
            }
          }
        );
        withStyles &&
          fs.writeFile(stylesPath, stylesTemplate(component), (err) => {
            if (err) {
              !silent &&
                console.log(`Unable to create ${component} component styles`);
            } else {
              !silent && console.log(`${stylesPath} created`);
            }
          });
        withTests &&
          fs.writeFile(
            testsPath,
            testTemplate(component, defaultExports),
            (err) => {
              if (err) {
                !silent &&
                  console.log(`Unable to create ${component} component tests`);
              } else {
                !silent && console.log(`${testsPath} created`);
              }
            }
          );
      }
    }
  }
};
