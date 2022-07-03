---
sidebar_position: 7
---

# Using Configuration

With the above steps, you can now create a configuration file which will be used by `rnhc` to create your files with your custom config.

- To create a default configuration file run:

```sh
rnhc create --config
```

- This will create a `rnhc.config.json` file at the root of your project. The file will contain the following:

```json
{
  "withStyles": true,
  "withFunctions": true,
  "withProps": true,
  "withTests": true,
  "defaultExports": true,
  "componentsRoot": "./src/components",
  "screensRoot": "./src/screens",
  "reduxRoot": "./src/redux",
  "applyReduxThunk": true
}
```

1. `withStyles`: if true, create `styles.js` (or `styles.ts`) file for components and screens, if false, don't create `styles.js` (or `styles.ts`) file, default is true.
2. `withFunctions`: if true, create `functions` folder for screens, if false, don't create `functions` folder, default is true.
3. `withProps`: if true, create props `interface` for components and screens (in TS only), if false, don't create props `interface`, default is true.
4. `withTests`: if true, create `__tests__` folder for components and screens, if false, don't create `__tests__` folder, default is true.
5. `defaultExports`: if true, create default export for components and pages, if false, create named export for components and pages, default is true.
6. `componentsRoot`: the root folder for components, default is `./src/components`.
7. `screensRoot`: the root folder for screens, default is `./src/screens`.
8. `reduxRoot`: the root folder for redux, default is `./src/redux`.
9. `applyReduxThunk`: if true, apply `redux-thunk` middleware to the store, if false, don't apply `redux-thunk` middleware, default is true.

- If no configuration file is found or you don't specify some of the configuration, the default configuration will be used.
