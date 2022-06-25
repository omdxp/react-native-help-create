const fs = require("file-system");
const { config, getCamelCase, getKebabCase } = require("../../../utils");
const {
  customReducerTemplateTs,
  customReducerTemplateJs,
} = require("../templates");
/**
 * @function createReducer
 * @description this function is used to create reducer file.
 * @param {string} reducerName - name of reducer.
 * @param {boolean} js - write file in javascript.
 * @param {boolean} ts - write file in typescript.
 * @param {boolean} overwrite - overwrite existed files.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.createReducer = (reducerName, js, ts, overwrite) => {
  const { reduxRoot } = config;
  if (!fs.existsSync(reduxRoot)) {
    console.log("Redux implementation does not exist");
    return;
  }
  reducerName = getKebabCase(reducerName);
  const path = `${reduxRoot}/reducers/${reducerName}/`;
  let reducer = getCamelCase(reducerName);
  if (fs.existsSync(path) && !overwrite) {
    console.log(`${reducer} reducer already exists`);
  } else {
    if (ts) {
      if (!fs.fs.existsSync(path)) {
        fs.fs.mkdirSync(path);
      }
      fs.fs.writeFileSync(`${path}index.ts`, customReducerTemplateTs(reducer), {
        encoding: "utf8",
        flag: "w",
      });
      // update index.js that imports reducer and exports combineReducers
      const data = fs.fs.readFileSync(`${reduxRoot}/reducers/index.ts`, {
        encoding: "utf8",
        flag: "r",
      });
      if (
        !new RegExp(
          `import[. \t]*{[. \t]*${reducer}[. \t]*}[. \t]*from[. \t]*['"\`]./${reducerName}['"\`]`
        ).test(data)
      ) {
        let result = data.replace(
          /import { combineReducers } from "redux";/g,
          `import { combineReducers } from "redux";\nimport { ${reducer} } from "./${reducerName}";`
        );
        // update combineReducers in indx.ts
        result = result.replace(
          /combineReducers\({/g,
          `combineReducers({\n  ${reducer},`
        );
        fs.fs.writeFileSync(`${reduxRoot}/reducers/index.ts`, result, {
          encoding: "utf8",
          flag: "w",
        });
      }
      console.log(`${reducer} reducer created`);
    } else {
      if (!fs.fs.existsSync(path)) {
        fs.fs.mkdirSync(path);
      }
      fs.fs.writeFileSync(`${path}index.js`, customReducerTemplateJs(reducer), {
        encoding: "utf8",
        flag: "w",
      });
      // update index.js that imports reducer and exports combineReducers
      const data = fs.fs.readFileSync(`${reduxRoot}/reducers/index.js`, {
        encoding: "utf8",
        flag: "r",
      });
      if (
        !new RegExp(
          `import[. \t]*{[. \t]*${reducer}[. \t]*}[. \t]*from[. \t]*['"\`]./${reducerName}['"\`]`
        ).test(data)
      ) {
        let result = data.replace(
          /import { combineReducers } from "redux";/g,
          `import { combineReducers } from "redux";\nimport { ${reducer} } from "./${reducerName}";`
        );
        // update combineReducers in indx.js
        result = result.replace(
          /combineReducers\({/g,
          `combineReducers({\n  ${reducer},`
        );
        fs.fs.writeFileSync(`${reduxRoot}/reducers/index.js`, result, {
          encoding: "utf8",
          flag: "w",
        });
      }
      console.log(`${reducer} reducer created`);
    }
  }
};
