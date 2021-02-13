#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("file-system");

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

const screenFunctionsTemplate = (screen) => `
// write your ${screen} functions here
`;

const actionsTemplate = (redux) => `
// write your ${redux} action creators here
`;

const constantsTemplate = (redux) => `
// write your ${redux} action types here
`;

const reducersTemplate = (redux) => `
// write your ${redux} reducers here
`;

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
      if (argv.component) {
        fs.unlink(`app/components/${argv.component}.js`, function (err) {
          if (err) {
            console.log("component does not exists");
          } else {
            console.log(`app/components/${argv.component}.js deleted`);
          }
        });
      } else {
        console.log("Check usage: rnhc delete --help");
      }
    }
  )
  .help().argv;
