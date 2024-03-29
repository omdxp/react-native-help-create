const fs = require("file-system");
const {
  storeTemplateJs,
  storeTemplateTs,
  reducerTemplateJs,
  reducerTemplateTs,
  actionTemplateJs,
  actionTemplateTs,
  mainReducerTemplate,
} = require("../templates");
const { config } = require("../../../utils");

/**
 * @function createReduxStore
 * @description this function is used to create redux store file.
 * @param {boolean} ts - write file in typescript.
 * @param {boolean} overwrite - overwrite existed files.
 * @param {boolean} silent - do not show log messages.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.createReduxStore = (ts, overwrite, silent) => {
  const { reduxRoot, applyReduxThunk } = config;
  const path = `${reduxRoot}/`;
  if (fs.existsSync(path) && !overwrite) {
    !silent && console.log("Redux implementation already exists");
  } else {
    if (ts) {
      fs.writeFile(
        `${path}index.ts`,
        storeTemplateTs(applyReduxThunk),
        (err) => {
          if (err) {
            !silent && console.log("Unable to create redux store");
          } else {
            !silent && console.log(`${path}index.ts created`);
          }
        }
      );
      fs.writeFile(
        `${path}reducers/general/index.ts`,
        reducerTemplateTs(),
        (err) => {
          if (err) {
            !silent && console.log("Unable to create redux general reducer");
          } else {
            !silent && console.log(`${path}reducers/general/index.ts created`);
          }
        }
      );
      fs.writeFile(`${path}reducers/index.ts`, mainReducerTemplate(), (err) => {
        if (err) {
          !silent && console.log("Unable to create redux main reducer");
        } else {
          !silent && console.log(`${path}reducers/index.ts created`);
        }
      });
      fs.writeFile(
        `${path}actions/general/index.ts`,
        actionTemplateTs(applyReduxThunk),
        (err) => {
          if (err) {
            !silent && console.log("Unable to create redux general actions");
          } else {
            !silent && console.log(`${path}actions/general/index.ts created`);
          }
        }
      );
    } else {
      fs.writeFile(
        `${path}index.js`,
        storeTemplateJs(applyReduxThunk),
        (err) => {
          if (err) {
            !silent && console.log("Unable to create redux store");
          } else {
            !silent && console.log(`${path}index.js created`);
          }
        }
      );
      fs.writeFile(
        `${path}reducers/general/index.js`,
        reducerTemplateJs(),
        (err) => {
          if (err) {
            !silent && console.log("Unable to create redux general reducer");
          } else {
            !silent && console.log(`${path}reducers/general/index.js created`);
          }
        }
      );
      fs.writeFile(`${path}reducers/index.js`, mainReducerTemplate(), (err) => {
        if (err) {
          !silent && console.log("Unable to create redux main reducer");
        } else {
          !silent && console.log(`${path}reducers/index.js created`);
        }
      });
      fs.writeFile(
        `${path}actions/general/index.js`,
        actionTemplateJs(applyReduxThunk),
        (err) => {
          if (err) {
            !silent && console.log("Unable to create redux general actions");
          } else {
            !silent && console.log(`${path}actions/general/index.js created`);
          }
        }
      );
    }
  }
};
