/**
 * @function defaultConfigTemplate
 * @description this function returns the default config template.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.defaultConfigTemplate = () => {
  return `{
  "withStyles": true,
  "withFunctions": true,
  "withProps": true,
  "withTests": true,
  "defaultExports": true,
  "componentsRoot": "./src/components",
  "screensRoot": "./src/screens",
  "reduxRoot": "./src/redux",
  "applyReduxThunk": true
}`;
};
