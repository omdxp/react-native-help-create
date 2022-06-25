/**
 * @function defaultConfigTemplate
 * @description this function returns the default config template.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.defaultConfigTemplate = () => {
  return `{
  "withStyles": true,
  "withFunctions": true,
  "withProps": true,
  "withTest": true,
  "defaultExports": true,
  "componentsRoot": "./src/components",
  "screensRoot": "./src/screens",
  "reduxRoot": "./src/redux",
  "applyReduxThunk": true
}`;
};
