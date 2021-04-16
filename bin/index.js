#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("file-system");

/**
 * componentTemplateTS
 * @param {string} component component to be created in typescript.
 * @returns typescript implementation for the component.
 */
const componentTemplateTS = (component) => `
// import react native
import React, {FC} from 'react';
import {Text, View} from 'react-native';

// define ${component} props interface
interface ${component}Props {}

// export ${component} component
const ${component}: FC<${component}Props> = ({}): JSX.Element => {
  return (
    <View>
      <Text>${component} component created!</Text>
    </View>
  );
};
export default ${component};
`;

/**
 * componentTemplate
 * @param {string} component component to be created in javascript.
 * @returns javascript implementation for the component.
 */
const componentTemplate = (component) => `
// import react native
import React from 'react';
import {Text, View} from 'react-native';

// export ${component} component
export default function ${component}() {
  return (
    <View>
      <Text>${component} component created!</Text>
    </View>
  );
}

`;

/**
 * screenUITemplateTS
 * @param {string} screen screen to be created in typescript.
 * @returns typescript implementation for the screen ui.
 */
const screenUITemplateTS = (screen) => `
// import react native
import React, {FC} from 'react';
import {Text, View} from 'react-native';

// import ${screen} functions
import {} from '../functions';

// define ${screen}UI props interface
interface ${screen}UIProps {}

// export ${screen} UI
const ${screen}UI: FC<${screen}UIProps> = ({}): JSX.Element => {
  return (
    <View>
      <Text>${screen} UI created!</Text>
    </View>
  );
};
export default ${screen}UI;
`;

/**
 * screenUITemplate
 * @param {string} screen screen to be created in javascript.
 * @returns javascript implementation for the screen ui.
 */
const screenUITemplate = (screen) => `
// import react native
import React from 'react';
import {Text, View} from 'react-native';

// import ${screen} functions
import {} from '../functions';

// export ${screen} UI
export default function ${screen}UI() {
  return (
    <View>
      <Text>${screen} UI created!</Text>
    </View>
  );
}
`;

/**
 * screenFunctionsTemplateTS
 * @param {string} screen screen to be created in typescript.
 * @returns typescript implementation for the screen functions.
 */
const screenFunctionsTemplateTS = (screen) => `
// write your ${screen} functions here
export {};
`;

/**
 * screenFunctionsTemplate
 * @param {string} screen screen to be created javascript.
 * @returns javascript implementation for the screen functions.
 */
const screenFunctionsTemplate = (screen) => `
// write your ${screen} functions here
`;

/**
 * actionsTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns typescript implementation for redux actions.
 */
const actionsTemplateTS = (redux) => `
// write your ${redux} action creators here
export {};
`;

/**
 * actionsTemplate
 * @param {string} redux redux to be created in javascript
 * @returns javascript implementation for redux actions.
 */
const actionsTemplate = (redux) => `
// write your ${redux} action creators here
`;

/**
 * constantsTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns typescript implementation for redux constants.
 */
const constantsTemplateTS = (redux) => `
// write your ${redux} action types here
export {};
`;

/**
 * constantsTemplate
 * @param {string} redux redux to be created in javascript.
 * @returns javascript implementation for redux constants.
 */
const constantsTemplate = (redux) => `
// write your ${redux} action types here
`;

/**
 * reducersTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns tpyescript implementation for redux reducers.
 */
const reducersTemplateTS = (redux) => `
// write your ${redux} reducers here
export {};
`;

/**
 * reducersTemplate
 * @param {string} redux redux to be created in javascript.
 * @returns javascript implementation for redux reducers.
 */
const reducersTemplate = (redux) => `
// write your ${redux} reducers here
`;

/**
 * storeTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns typescript implementation for redux store.
 */
const storeTemplateTS = (redux) => `
// import redux
import {createStore, combineReducers} from 'redux';

// import ${redux} reducers
import {} from '../reducers';

// define app reducers
const appReducers = combineReducers({
  // you need to add your reducers here
});

// export store
export const store = createStore(appReducers);
`;

/**
 * storeTemplate
 * @param {string} redux redux to be created in javascript.
 * @returns javascript implementation for redux store.
 */
const storeTemplate = (redux) => `
// import redux
import {createStore, combineReducers} from 'redux';

// import ${redux} reducers
import {} from '../reducers';

// define app reducers
const appReducers = combineReducers({
  // you need to add your reducers here
});

// export store
export const store = createStore(appReducers);
`;

yargs
  .scriptName("rnhc")
  .usage("$0 <cmd> [args]")
  .command(
    "create [name]",
    "this command helps you create your files",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "to create a react-native component",
        })
        .positional("-s", {
          alias: "--screen",
          type: "string",
          describe: "to create a react-native screen",
        })
        .positional("-r", {
          alias: "--redux",
          type: "string",
          describe: "to create basic redux implementation structure",
        });
    },
    function (argv) {
      if (fs.existsSync("index.js") && fs.existsSync("app.json")) {
        if (argv.component) {
          fs.writeFile(
            `app/components/${argv.component}.js`,
            componentTemplate(argv.component),
            function (err) {
              if (err) {
                console.log(`Unable to create ${argv.component} component`);
              } else {
                console.log(`app/components/${argv.component}.js created`);
              }
            }
          );
        } else if (argv.screen) {
          fs.writeFile(
            `app/screens/${argv.screen}/ui/${argv.screen}UI.js`,
            screenUITemplate(argv.screen),
            function (err) {
              if (err) {
                console.log(`Unable to create ${argv.screen} screen UI`);
              } else {
                console.log(
                  `app/screens/${argv.screen}/ui/${argv.screen}UI.js created`
                );
              }
            }
          );
          fs.writeFile(
            `app/screens/${argv.screen}/functions/index.js`,
            screenFunctionsTemplate(argv.screen),
            function (err) {
              if (err) {
                console.log(`Unable to create ${argv.screen} screen functions`);
              } else {
                console.log(
                  `app/screens/${argv.screen}/functions/index.js created`
                );
              }
            }
          );
        } else if (argv.redux) {
          fs.writeFile(
            `app/${argv.redux}/actions/index.js`,
            actionsTemplate(argv.redux),
            function (err) {
              if (err) {
                console.log(`Unable to create ${argv.redux} redux actions`);
              } else {
                console.log(`app/${argv.redux}/actions/index.js created`);
              }
            }
          );
          fs.writeFile(
            `app/${argv.redux}/constants/index.js`,
            constantsTemplate(argv.redux),
            function (err) {
              if (err) {
                console.log(`Unable to create ${argv.redux} redux constants`);
              } else {
                console.log(`app/${argv.redux}/constants/index.js created`);
              }
            }
          );
          fs.writeFile(
            `app/${argv.redux}/reducers/index.js`,
            reducersTemplate(argv.redux),
            function (err) {
              if (err) {
                console.log(`Unable to create ${argv.redux} redux reducers`);
              } else {
                console.log(`app/${argv.redux}/reducers/index.js created`);
              }
            }
          );
          fs.writeFile(
            `app/${argv.redux}/store/index.js`,
            storeTemplate(argv.redux),
            function (err) {
              if (err) {
                console.log(`Unable to create ${argv.redux} redux store`);
              } else {
                console.log(`app/${argv.redux}/store/index.js created`);
              }
            }
          );
        } else {
          console.log("Check usage: rnhc create --help");
        }
      } else {
        console.log("You may not be in the root of a react native project");
      }
    }
  )
  .command(
    "delete [name]",
    "this command helps you delete your files",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "to delete a react-native component",
        })
        .positional("-s", {
          alias: "--screen",
          type: "string",
          describe: "to delete a react-native screen",
        })
        .positional("-r", {
          alias: "--redux",
          type: "string",
          describe: "to delete basic redux implementation structure)",
        });
    },
    function (argv) {
      if (fs.existsSync("index.js") && fs.existsSync("app.json")) {
        if (argv.component) {
          fs.unlink(`app/components/${argv.component}.js`, function (err) {
            if (err) {
              console.log(`component ${argv.component} does not exist`);
            } else {
              console.log(`app/components/${argv.component}.js deleted`);
            }
          });
        } else if (argv.screen) {
          try {
            fs.rmdirSync(`app/screens/${argv.screen}/`);
            console.log(`screen ${argv.screen} got deleted`);
          } catch (err) {
            console.log(`screen ${argv.screen} does not exist`);
          }
        } else if (argv.redux) {
          try {
            fs.rmdirSync(`app/${argv.redux}/`);
            console.log(`redux ${argv.redux} got deleted`);
          } catch (err) {
            console.log(`redux ${argv.redux} does not exist`);
          }
        } else {
          console.log("Check usage: rnhc delete --help");
        }
      } else {
        console.log("You may not be in the root of a react native project");
      }
    }
  )
  .help().argv;
