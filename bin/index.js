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
      if (fs.existsSync("index.js") && fs.existsSync("app.json")) {
        if (argv.component) {
          if (argv.ts) {
            if (argv.component.length === 1) {
              const path =
                argv.folder === ""
                  ? `app/components/${argv.component}.tsx`
                  : `app/components/${argv.folder}/${argv.component}.tsx`;
              if (fs.existsSync(path)) {
                console.log(`component ${argv.component} already exists`);
              } else {
                fs.writeFile(
                  path,
                  componentTemplateTS(argv.component),
                  function (err) {
                    if (err) {
                      console.log(
                        `Unable to create ${argv.component} component`
                      );
                    } else {
                      console.log(`${path} created`);
                    }
                  }
                );
              }
            } else {
              argv.component.forEach((component) => {
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
              });
            }
          } else {
            if (argv.component.length === 1) {
              const path =
                argv.folder === ""
                  ? `app/components/${argv.component}.js`
                  : `app/components/${argv.folder}/${argv.component}.js`;
              if (fs.existsSync(path)) {
                console.log(`component ${argv.component} already exists`);
              } else {
                fs.writeFile(
                  path,
                  componentTemplate(argv.component),
                  function (err) {
                    if (err) {
                      console.log(
                        `Unable to create ${argv.component} component`
                      );
                    } else {
                      console.log(`${path} created`);
                    }
                  }
                );
              }
            } else {
              argv.component.forEach((component) => {
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
              });
            }
          }
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
          describe: "to delete basic redux implementation structure",
        });
    },
    function (argv) {
      if (fs.existsSync("index.js") && fs.existsSync("app.json")) {
        if (argv.component) {
          if (fs.existsSync(`app/components/${argv.component}.tsx`)) {
            fs.unlink(`app/components/${argv.component}.tsx`, function (err) {
              if (err) {
                console.log(`Unable to delete ${argv.component} component`);
              } else {
                console.log(`app/components/${argv.component}.tsx deleted`);
              }
            });
          } else if (fs.existsSync(`app/components/${argv.component}.js`)) {
            fs.unlink(`app/components/${argv.component}.js`, function (err) {
              if (err) {
                console.log(`Unable to delete ${argv.component} component`);
              } else {
                console.log(`app/components/${argv.component}.js deleted`);
              }
            });
          } else {
            console.log(`component ${argv.component} does not exist`);
          }
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
      if (fs.existsSync("index.js") && fs.existsSync("app.json")) {
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
          fs.fs.mkdirSync(`app/components/${argv.folder}`);
          files.forEach((file) => {
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
          fs.fs.mkdirSync(`app/screens/${argv.folder}`);
          folders.forEach((folder) => {
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
            console.log(`${folder} screen moved to app/screens/${argv.folder}`);
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
