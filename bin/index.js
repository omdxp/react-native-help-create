#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("file-system");

/**
 * @function componentTemplateTS
 * @param {string} component component to be created in typescript.
 * @returns {string} typescript implementation for the component.
 */
const componentTemplateTS = (component) => `// import react native
import React, { FC } from 'react';
import { Text, View } from 'react-native';

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
 * @function componentTemplate
 * @param {string} component component to be created in javascript.
 * @returns {string} javascript implementation for the component.
 */
const componentTemplate = (component) => `// import react native
import React from 'react';
import { Text, View } from 'react-native';

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
 * @function screenUITemplateTS
 * @param {string} screen screen to be created in typescript.
 * @returns {string} typescript implementation for the screen ui.
 */
const screenUITemplateTS = (screen) => `// import react native
import React, { FC } from 'react';
import { Text, View } from 'react-native';

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
 * @function screenUITemplate
 * @param {string} screen screen to be created in javascript.
 * @returns {string} javascript implementation for the screen ui.
 */
const screenUITemplate = (screen) => `// import react native
import React from 'react';
import { Text, View } from 'react-native';

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
 * @function screenFunctionsTemplateTS
 * @param {string} screen screen to be created in typescript.
 * @returns {string} typescript implementation for the screen functions.
 */
const screenFunctionsTemplateTS = (
  screen
) => `// write your ${screen} functions here
export {};
`;

/**
 * @function screenFunctionsTemplate
 * @param {string} screen screen to be created javascript.
 * @returns {string} javascript implementation for the screen functions.
 */
const screenFunctionsTemplate = (
  screen
) => `// write your ${screen} functions here
`;

/**
 * @function actionsTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns {string} typescript implementation for redux actions.
 */
const actionsTemplateTS = (
  redux
) => `// write your ${redux} action creators here
export {};
`;

/**
 * @function actionsTemplate
 * @param {string} redux redux to be created in javascript
 * @returns {string} javascript implementation for redux actions.
 */
const actionsTemplate = (redux) => `// write your ${redux} action creators here
`;

/**
 * @function constantsTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns {string} typescript implementation for redux constants.
 */
const constantsTemplateTS = (redux) => `// write your ${redux} action types here
export {};
`;

/**
 * @function constantsTemplate
 * @param {string} redux redux to be created in javascript.
 * @returns {string} javascript implementation for redux constants.
 */
const constantsTemplate = (redux) => `// write your ${redux} action types here
`;

/**
 * @function reducersTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns {string} tpyescript implementation for redux reducers.
 */
const reducersTemplateTS = (redux) => `// write your ${redux} reducers here
export {};
`;

/**
 * @function reducersTemplate
 * @param {string} redux redux to be created in javascript.
 * @returns {string} javascript implementation for redux reducers.
 */
const reducersTemplate = (redux) => `// write your ${redux} reducers here
`;

/**
 * @function storeTemplateTS
 * @param {string} redux redux to be created in typescript.
 * @returns {string} typescript implementation for redux store.
 */
const storeTemplateTS = (redux) => `// import redux
import { createStore, combineReducers } from 'redux';

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
 * @function storeTemplate
 * @param {string} redux redux to be created in javascript.
 * @returns {string} javascript implementation for redux store.
 */
const storeTemplate = (redux) => `// import redux
import { createStore, combineReducers } from 'redux';

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
 * @function stackNavigationTemplate
 * @param {Array} screens screens path to be appended to the navigation file.
 * @returns {string} javascript implementation for navigation.
 */
const stackNavigationTemplate = (screens) => {
  let template = `// import react
import React from 'react';

// import stack navigation
import { createStackNavigator } from '@react-navigation/stack';

// import screens
`;
  for (let i = 0; i < screens.length; i++) {
    const screenName = screens[i].split("/")[screens[i].split("/").length - 2];
    template += `import ${screenName}Screen from './${screenName}/ui/${screenName}UI';
`;
  }
  template = template.substring(0, template.length - 1);
  template += `

// create stack navigator
const { Navigator, Screen } = createStackNavigator();

// export stack navigation
export default function Navigation() {
  return (
    <Navigator>
    `;
  for (let i = 0; i < screens.length; i++) {
    const screenName = screens[i].split("/")[screens[i].split("/").length - 2];
    template += ` <Screen name="${screenName}Screen" component={${screenName}Screen} />
    `;
  }
  template = template.substring(0, template.length - 5);
  template += `
    </Navigator>
  );
};
`;
  return template;
};

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
          describe: "to create a react-native components",
        })
        .array("-c")
        .positional("-s", {
          alias: "--screen",
          type: "string",
          describe: "to create a react-native screens",
        })
        .array("-s")
        .positional("-r", {
          alias: "--redux",
          type: "string",
          describe: "to create basic redux implementation structure",
        })
        .positional("-n", {
          alias: "--navigation",
          type: "string",
          describe: "to create navigation for selected screens",
        })
        .array("-n")
        .option("js", {
          alias: "javascript",
          default: true,
          describe: "to implement the code in javascript",
        })
        .option("ts", {
          alias: "typescript",
          describe: "to implement the code in typescript",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "name of folder that combines your components or screens",
        });
    },
    function (argv) {
      if (fs.existsSync("app.json")) {
        if (argv.component) {
          argv.component.forEach((component) => {
            if (argv.ts) {
              const path =
                argv.folder === ""
                  ? `app/components/${component}.tsx`
                  : `app/components/${argv.folder}/${component}.tsx`;
              if (fs.existsSync(path)) {
                console.log(`component ${component} already exists`);
              } else {
                fs.writeFile(
                  path,
                  componentTemplateTS(component),
                  function (err) {
                    if (err) {
                      console.log(`Unable to create ${component} component`);
                    } else {
                      console.log(`${path} created`);
                    }
                  }
                );
              }
            } else {
              const path =
                argv.folder === ""
                  ? `app/components/${component}.js`
                  : `app/components/${argv.folder}/${component}.js`;
              if (fs.existsSync(path)) {
                console.log(`component ${component} already exists`);
              } else {
                fs.writeFile(
                  path,
                  componentTemplate(component),
                  function (err) {
                    if (err) {
                      console.log(`Unable to create ${component} component`);
                    } else {
                      console.log(`${path} created`);
                    }
                  }
                );
              }
            }
          });
        } else if (argv.screen) {
          argv.screen.forEach((screen) => {
            const path =
              argv.folder === ""
                ? `app/screens/${screen}/`
                : `app/screens/${argv.folder}/${screen}/`;
            if (fs.existsSync(path)) {
              console.log(`screen ${screen} already exists`);
            } else {
              if (argv.ts) {
                fs.writeFile(
                  `${path}ui/${screen}UI.tsx`,
                  screenUITemplateTS(screen),
                  function (err) {
                    if (err) {
                      console.log(`Unable to create ${screen} screen UI`);
                    } else {
                      console.log(`${path}ui/${screen}UI.tsx created`);
                    }
                  }
                );
                fs.writeFile(
                  `${path}functions/index.ts`,
                  screenFunctionsTemplateTS(screen),
                  function (err) {
                    if (err) {
                      console.log(
                        `Unable to create ${screen} screen functions`
                      );
                    } else {
                      console.log(`${path}functions/index.ts created`);
                    }
                  }
                );
              } else {
                fs.writeFile(
                  `${path}ui/${screen}UI.js`,
                  screenUITemplate(screen),
                  function (err) {
                    if (err) {
                      console.log(`Unable to create ${screen} screen UI`);
                    } else {
                      console.log(`${path}ui/${screen}UI.js created`);
                    }
                  }
                );
                fs.writeFile(
                  `${path}functions/index.js`,
                  screenFunctionsTemplate(screen),
                  function (err) {
                    if (err) {
                      console.log(
                        `Unable to create ${screen} screen functions`
                      );
                    } else {
                      console.log(`${path}functions/index.js created`);
                    }
                  }
                );
              }
            }
          });
        } else if (argv.redux) {
          if (fs.existsSync(`app/${argv.redux}/`)) {
            console.log(`${argv.redux} redux implementation already exists`);
          } else {
            if (argv.ts) {
              fs.writeFile(
                `app/${argv.redux}/actions/index.ts`,
                actionsTemplateTS(argv.ts),
                function (err) {
                  if (err) {
                    console.log(`Unable to create ${argv.redux} redux actions`);
                  } else {
                    console.log(`app/${argv.redux}/actions/index.ts created`);
                  }
                }
              );
              fs.writeFile(
                `app/${argv.redux}/constants/index.ts`,
                constantsTemplateTS(argv.redux),
                function (err) {
                  if (err) {
                    console.log(
                      `Unable to create ${argv.redux} redux constants`
                    );
                  } else {
                    console.log(`app/${argv.redux}/constants/index.ts created`);
                  }
                }
              );
              fs.writeFile(
                `app/${argv.redux}/reducers/index.ts`,
                reducersTemplateTS(argv.redux),
                function (err) {
                  if (err) {
                    console.log(
                      `Unable to create ${argv.redux} redux reducers`
                    );
                  } else {
                    console.log(`app/${argv.redux}/reducers/index.ts created`);
                  }
                }
              );
              fs.writeFile(
                `app/${argv.redux}/store/index.ts`,
                storeTemplateTS(argv.redux),
                function (err) {
                  if (err) {
                    console.log(`Unable to create ${argv.redux} redux store`);
                  } else {
                    console.log(`app/${argv.redux}/store/index.ts created`);
                  }
                }
              );
            } else {
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
                    console.log(
                      `Unable to create ${argv.redux} redux constants`
                    );
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
                    console.log(
                      `Unable to create ${argv.redux} redux reducers`
                    );
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
            }
          }
        } else if (argv.navigation) {
          switch (argv.navigation[0].toLocaleLowerCase()) {
            case "stack": {
              const path =
                argv.folder === ""
                  ? `app/screens/`
                  : `app/screens/${argv.folder}/`;
              if (fs.existsSync(`${path}Navigation.js`)) {
                console.log(`${path}Navigation.js already exists`);
                break;
              }
              // for each screen passed after the type of navigation
              let existedScreens = [];
              for (let i = 1; i < argv.navigation.length; i++) {
                const screen = argv.navigation[i];
                const _path =
                  argv.folder === ""
                    ? `app/screens/${screen}/`
                    : `app/screens/${argv.folder}/${screen}/`;
                if (!fs.existsSync(_path)) {
                  console.log(`${_path} does not exists`);
                } else {
                  existedScreens.push(_path);
                }
              }
              // for all existed screens
              if (existedScreens.length === 0) {
                console.log("None of these screens exists");
                break;
              } else {
                fs.writeFile(
                  `${path}Navigation.js`,
                  stackNavigationTemplate(existedScreens),
                  function (err) {
                    if (err) {
                      console.log(`Unable to create ${path}Navigation.js`);
                    } else {
                      console.log(`${path}Navigation.js created`);
                    }
                  }
                );
              }
              break;
            }

            case "drawer":
              console.log("Creating drawer navigation");
              break;

            case "tab":
              console.log("Creating tab navigation");
              break;

            default:
              console.log(argv.navigation);
              console.log(
                "You should choose one of the following navigations: stack, drawer or tab"
              );
              break;
          }
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
          describe: "to delete react-native components",
        })
        .array("-c")
        .positional("-s", {
          alias: "--screen",
          type: "string",
          describe: "to delete react-native screens",
        })
        .array("-s")
        .positional("-r", {
          alias: "--redux",
          type: "string",
          describe: "to delete basic redux implementation structure",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "name of folder that combines your components or screens",
        });
    },
    function (argv) {
      if (fs.existsSync("app.json")) {
        if (argv.component) {
          if (argv.component.length === 0 && argv.folder !== "") {
            const path = `app/components/${argv.folder}/`;
            try {
              fs.rmdirSync(path);
              console.log(`${path} got deleted`);
            } catch (err) {
              console.log(`${path} does not exist`);
            }
            return;
          }
          argv.component.forEach((component) => {
            const path =
              argv.folder === ""
                ? `app/components/`
                : `app/components/${argv.folder}/`;
            if (fs.existsSync(`${path}${component}.tsx`)) {
              fs.unlink(`${path}${component}.tsx`, function (err) {
                if (err) {
                  console.log(`Unable to delete ${component} component`);
                } else {
                  console.log(`${path}${component}.tsx deleted`);
                }
              });
            } else if (fs.existsSync(`${path}${component}.js`)) {
              fs.unlink(`${path}${component}.js`, function (err) {
                if (err) {
                  console.log(`Unable to delete ${component} component`);
                } else {
                  console.log(`${path}${component}.js deleted`);
                }
              });
            } else {
              console.log(`component ${component} does not exist`);
            }
          });
        } else if (argv.screen) {
          if (argv.screen.length === 0 && argv.folder !== "") {
            const path = `app/screens/${argv.folder}/`;
            try {
              fs.rmdirSync(path);
              console.log(`${path} got deleted`);
            } catch (err) {
              console.log(`${path} does not exist`);
            }
          }
          argv.screen.forEach((screen) => {
            const path =
              argv.folder === ""
                ? `app/screens/${screen}/`
                : `app/screens/${argv.folder}/${screen}/`;
            try {
              fs.rmdirSync(path);
              console.log(`${path} got deleted`);
            } catch (err) {
              console.log(`${path} does not exist`);
            }
          });
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
  .command(
    "combine [name]",
    "this command helps you combine your components or screens in a single folder",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--components",
          type: "string",
          array: true,
          describe: "list of components to be combines in a folder",
        })
        .array("-c")
        .positional("-s", {
          alias: "--screens",
          type: "string",
          array: true,

          describe: "list of screens to be combines in a folder",
        })
        .array("-s")
        .option("f", {
          alias: "folder",
          type: "string",
          describe: "name of folder that combines your components or screens",
          demandOption: "this option is mandatory" | true,
        });
    },
    function (argv) {
      if (fs.existsSync("app.json")) {
        if (argv.components) {
          if (argv.components.length === 1) {
            console.log("please provide at least 2 components");
            return;
          }
          let files = [];
          argv.components.forEach((component) => {
            fs.fs
              .readdirSync(`app/components/`)
              .filter((file) => file.startsWith(component))
              .forEach((file) => {
                files.push(file);
              });
          });
          if (files.length < argv.components.length) {
            console.log("check if these components do exists");
            return;
          }
          if (!fs.fs.existsSync(`app/components/${argv.folder}`)) {
            fs.fs.mkdirSync(`app/components/${argv.folder}`);
          } else {
            console.log(`app/components/${argv.folder} already exists.`);
            console.log(`Writing new files...`);
          }
          files.forEach((file) => {
            if (fs.fs.existsSync(`app/components/${argv.folder}/${file}`)) {
              console.log(
                `app/components/${argv.folder}/${file} already exists.`
              );
            } else {
              fs.fs.rename(
                `app/components/${file}`,
                `app/components/${argv.folder}/${file}`,
                function (err) {
                  if (err) {
                    console.log(`cannot move ${file} component`);
                  } else {
                    console.log(
                      `${file} component moved to app/components/${argv.folder}/`
                    );
                  }
                }
              );
            }
          });
        } else if (argv.screens) {
          if (argv.screens.length === 1) {
            console.log("please provide at least 2 screens");
            return;
          }
          let folders = [];
          argv.screens.forEach((screen) => {
            fs.fs
              .readdirSync(`app/screens/`)
              .filter((folder) => folder === screen)
              .forEach((folder) => {
                folders.push(folder);
              });
          });
          if (folders.length < argv.screens.length) {
            console.log("check if these screens do exists");
            return;
          }
          if (!fs.fs.existsSync(`app/screens/${argv.folder}`)) {
            fs.fs.mkdirSync(`app/screens/${argv.folder}`);
          } else {
            console.log(`app/screens/${argv.folder} already exists.`);
            console.log(`Writing new files...`);
          }
          folders.forEach((folder) => {
            if (fs.fs.existsSync(`app/screens/${argv.folder}/${folder}/`)) {
              console.log(
                `app/screens/${argv.folder}/${folder} already exists.`
              );
            } else {
              fs.fs.renameSync(
                `app/screens/${folder}/`,
                `app/screens/${argv.folder}/${folder}/`,
                function (err) {
                  if (err) {
                    console.log(`cannot move ${folder} screen`);
                  } else {
                    console.log(
                      `${folder} screen moved to app/screens/${argv.folder}`
                    );
                  }
                }
              );
              console.log(
                `${folder} screen moved to app/screens/${argv.folder}`
              );
            }
          });
        } else {
          console.log("Check usage: rnhc combine --help");
        }
      } else {
        console.log("You may not be in the root of a react native project");
      }
    }
  )
  .help().argv;
