const fs = require("file-system");
const { config, getCamelCase, getKebabCase } = require("../../utils");

/**
 * @function deleteActions
 * @description this function is used to delete actions that exists.
 * @param {Array<string>} actions - array of actions to be deleted.
 * @param {boolean} ts - if project is written in typescript.
 * @param {boolean} silent - do not show log messages.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.deleteActions = (actions, ts, silent) => {
  if (actions.length === 0) {
    !silent && console.log("You have to provide a reducer name");
    return;
  }
  const { reduxRoot } = config;
  if (!fs.existsSync(reduxRoot)) {
    !silent && console.log(`${reduxRoot} does not exist`);
    return;
  }
  const fileExtension = ts ? "ts" : "js";
  const storeIndexFilePath = `${reduxRoot}/index.${fileExtension}`;
  const storeIndexFileContent = fs.fs.readFileSync(storeIndexFilePath, {
    encoding: "utf8",
  });
  let storeResult = storeIndexFileContent;
  let reducer = getKebabCase(actions[0]);
  const path = `${reduxRoot}/actions/${reducer}/`;
  if (!fs.existsSync(path)) {
    !silent && console.log(`${path} does not exist`);
    return;
  }
  actions.shift();
  if (!fs.existsSync(`${path}index.${fileExtension}`)) {
    !silent && console.log(`${path}index.${fileExtension} does not exist`);
    return;
  }
  const data = fs.readFileSync(`${path}index.${fileExtension}`, {
    encoding: "utf8",
    flag: "r",
  });
  let result = data;
  if (actions.length === 0) {
    let existedActions = fs
      .readdirSync(path)
      .filter((el) => !el.endsWith(`index.${fileExtension}`));
    if (existedActions.length === 0) {
      !silent && console.log("no action found");
      return;
    }
    actions = existedActions;
  }
  actions = actions.map((a) => {
    const actionKebabCase = getKebabCase(a.split(".")[0]);
    return actionKebabCase.endsWith(`.${fileExtension}`)
      ? actionKebabCase
      : `${actionKebabCase}.${fileExtension}`;
  });
  actions.forEach((a) => {
    const _path = `${path}${a}`;
    try {
      fs.fs.unlinkSync(_path);
      a = a.split(".")[0];
      // update index.js that exports actions
      if (
        new RegExp(
          `export[. \t]*{[. \t]*${getCamelCase(
            a
          )}Action[. \t]*}[. \t]*from[. \t]*['"\`]./${a}['"\`]`
        ).test(data)
      ) {
        // delete export statement
        result = result.replace(
          new RegExp(
            `export[. \t]*{[. \t]*${getCamelCase(
              a
            )}Action[. \t]*}[. \t]*from[. \t]*['"\`]./${a}['"\`][.;]`
          ),
          ""
        );
      }
      // if project is written in typescript
      if (ts) {
        // update index file that contains the ActionType
        const actionCase = `${reducer.replace(/-/g, "_").toUpperCase()}_${a
          .replace(/-/g, "_")
          .toUpperCase()}`;
        if (new RegExp(`["'\`]${actionCase}["'\`]`).test(storeResult)) {
          storeResult = storeResult.replace(
            new RegExp(`["'\`]${actionCase}["'\`]`),
            ""
          );
          // replace | | with | if exists
          storeResult = storeResult.replace(/\|\s*\|/g, "|");
          fs.fs.writeFileSync(storeIndexFilePath, storeResult, {
            encoding: "utf8",
            flag: "w",
          });
        }
      }
      !silent && console.log(`${_path} deleted`);
    } catch (err) {
      !silent && console.log(`${_path} does not exist`);
    }
  });
  fs.fs.writeFileSync(
    `${path}/index.${fileExtension}`,
    result.replace(/\n\s*\n/g, "\n").replace(/export/g, "\nexport"),
    {
      encoding: "utf8",
      flag: "w",
    }
  );
};
