const fs = require("file-system");
const {
  componentTemplateJs,
  componentTemplateTs,
  stylesTemplate,
} = require("../templates");
const { config, getComponentName, getKebabCase } = require("../../../utils");

/**
 * @function createComponent
 * @description this function is used to create a component.
 * @param {string} componentName - name of component.
 * @param {boolean} js - write file in javascript.
 * @param {boolean} ts - write file in typescript.
 * @param {string} folder - folder path to create files within.
 * @param {string} template - template file to create component with.
 * @param {boolean} overwrite - overwrite existed files.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createComponent = (
  componentName,
  js,
  ts,
  folder,
  template,
  overwrite
) => {
  const { withStyles, withProps, defaultExports, componentsRoot } = config;
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

    if (fs.existsSync(path) && !overwrite) {
      console.log(`${path} already exist`);
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
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          path,
          componentTemplateTs(component, withStyles, defaultExports, withProps),
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
    if (fs.existsSync(path) && !overwrite) {
      console.log(`${path} already exist`);
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
        } else {
          console.log(`.template/${template} file does not exist`);
        }
      } else {
        fs.writeFile(
          path,
          componentTemplateJs(component, withStyles, defaultExports),
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
      }
    }
  }
};
