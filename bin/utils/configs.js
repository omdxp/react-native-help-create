let config = {
  withStyles: true, // if true, create styles file for components and pages, if false, don't create styles file
  withFunctions: true, // if true, create functions folder for pages, if false, don't create functions folder
  withProps: true, // if true, create props interface for components and pages (in TS only), if false, don't create props interface
  withTest: true, // if true, create test file for components and pages, if false, don't create test file
  defaultExports: true, // if true, create default export for components and pages, if false, create named export for components and pages
  componentsRoot: "./src/components", // path to components folder
  screensRoot: "./src/screens", // path to screens folder
  reduxRoot: "./src/redux", // path to redux folder
  applyReduxThunk: true, // if true, apply redux thunk middleware to store
};

exports.config = config;
