const fs = require("file-system");
const { config, getCamelCase, getKebabCase } = require("../../../utils");
const {
  customActionTemplateJs,
  customActionTemplateTs,
} = require("../templates");
/**
 * @function createAction
 * @description this function is used to create action file.
 * @param {Array<String>} actions - array of actions starting with the name of the reducer.
 * @param {boolean} ts - write file in typescript.
 * @param {boolean} overwrite - overwrite existed files.
 * @param {boolean} silent - do not show log messages.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.createAction = (actionName, ts, overwrite, silent) => {
  if (actionName.length <= 1) {
    !silent &&
      (() => {
        console.log("At least provide one action for a reducer");
        console.log("Usage: rnhc create --action <reducer-name> <action-name>");
      })();
    return;
  }
  const { reduxRoot, applyReduxThunk } = config;
  if (!fs.existsSync(reduxRoot)) {
    !silent && console.log(`${reduxRoot} does not exist`);
    return;
  }
  const reducer = getKebabCase(actionName[0]);
  const reducerPath = `${reduxRoot}/reducers/${reducer}`;
  if (!fs.existsSync(reducerPath)) {
    !silent && console.log(`${reducerPath} does not exist`);
    return;
  }
  const actionsPath = `${reduxRoot}/actions/${reducer}`;
  const customActionTemplate = ts
    ? customActionTemplateTs
    : customActionTemplateJs;
  const fileExtension = ts ? "ts" : "js";
  actionName.shift();
  const actions = actionName;
  if (!fs.fs.existsSync(actionsPath)) {
    fs.fs.mkdirSync(actionsPath);
  }
  for (let i = 0; i < actions.length; i++) {
    const action = getKebabCase(actions[i]);
    const actionFilePath = `${actionsPath}/${action}.${fileExtension}`;
    // create action
    if (fs.existsSync(actionFilePath) && !overwrite) {
      !silent && console.log(`${action} action already exists`);
    } else {
      fs.fs.writeFileSync(
        actionFilePath,
        customActionTemplate(reducer, action, applyReduxThunk),
        {
          encoding: "utf8",
          flag: "w",
        }
      );
      // update index
      const indexFilePath = `${actionsPath}/index.${fileExtension}`;
      if (!fs.existsSync(indexFilePath)) {
        fs.fs.writeFileSync(indexFilePath, ``, {
          encoding: "utf8",
          flag: "w",
        });
      }
      const indexFileContent = fs.fs.readFileSync(indexFilePath, {
        encoding: "utf8",
      });
      const exportActionTemplate = `export { ${getCamelCase(
        action
      )}Action } from "./${action}";\n`;

      if (
        !new RegExp(
          `export[. \t]*{[. \t]*${getCamelCase(
            action
          )}Action[. \t]*}[. \t]*from[. \t]*['"\`]./${action}['"\`]`
        ).test(indexFileContent)
      ) {
        // export action at the top of the file
        fs.fs.writeFileSync(
          indexFilePath,
          exportActionTemplate + indexFileContent,
          {
            encoding: "utf8",
            flag: "w",
          }
        );
      }
      // update reducer
      const reducerFilePath = `${reducerPath}/index.${fileExtension}`;
      const reducerFileContent = fs.fs.readFileSync(reducerFilePath, {
        encoding: "utf8",
      });
      // check if case of action already exists
      const actionCase = `${reducer.replace(/-/g, "_").toUpperCase()}_${action
        .replace(/-/g, "_")
        .toUpperCase()}`;
      if (
        !new RegExp(`case[. \t]*['"\`]${actionCase}['"\`][. \t]*:[. \t]*`).test(
          reducerFileContent
        )
      ) {
        // add action to reducer
        const reducerActionTemplate = `case "${actionCase}":\n      return { ...state, ...action.payload };\n`;
        const result = reducerFileContent.replace(
          /switch[. \t]*\([. \t]*action.type[. \t]*\)[. \t]*{/g,
          `switch (action.type) {\n    ${reducerActionTemplate}`
        );
        fs.fs.writeFileSync(reducerFilePath, result, {
          encoding: "utf8",
          flag: "w",
        });
      }
      if (ts) {
        // update store index to add action type
        const storeIndexFilePath = `${reduxRoot}/index.ts`;
        const storeIndexFileContent = fs.fs.readFileSync(storeIndexFilePath, {
          encoding: "utf8",
        });
        if (
          !new RegExp(`["'\`]${actionCase}["'\`]`).test(storeIndexFileContent)
        ) {
          let result = storeIndexFileContent.replace(
            /export[. \t]*type[. \t]*ActionType[. \t]*=/g,
            `export type ActionType = \n  | "${actionCase}" \n  |`
          );
          // replace | | with | if exists
          result = result.replace(/\|\s*\|/g, "|");
          fs.fs.writeFileSync(storeIndexFilePath, result, {
            encoding: "utf8",
            flag: "w",
          });
        }
      }
      !silent && console.log(`${action} action created`);
    }
  }
};
