const fs = require("file-system");
const {
  componentTemplateJs,
  componentTemplateTs,
  stylesTemplate,
} = require("../templates");
const { config } = require("../../../utils");

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
  let component =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  if (componentName.includes("-")) {
    component = "";
    let words = componentName.split("-");
    words.forEach((w) => {
      component += w.charAt(0).toUpperCase() + w.slice(1);
    });
  }
  if (ts) {
    const path =
      folder === ""
        ? `${componentsRoot}/${componentName.toLowerCase()}/index.tsx`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/index.tsx`;
    const stylesPath =
      folder === ""
        ? `${componentsRoot}/${componentName.toLowerCase()}/styles.ts`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/styles.ts`;

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
        ? `${componentsRoot}/${componentName.toLowerCase()}/index.jsx`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/index.jsx`;
    const stylesPath =
      folder === ""
        ? `${componentsRoot}/${componentName.toLowerCase()}/styles.js`
        : `${componentsRoot}/${folder}/${componentName.toLowerCase()}/styles.js`;
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
