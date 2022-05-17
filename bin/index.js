#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("file-system");
const {
  createComponent,
  createNavigation,
  createReduxStore,
  createScreen,
  createConfig,
  createReducer,
  createAction,
} = require("./create");
const {
  deleteComponents,
  deleteScreens,
  deleteReduxStore,
  deleteNavigation,
  deleteConfig,
} = require("./delete");
const { combineComponents, combineScreens } = require("./combine");
const { loadConfig, rootChecker, languageChecker } = require("./utils");

yargs
  .scriptName("rnhc")
  .usage("$0 <command> [option]")
  .command(
    "create [name]",
    "Create components, screens, navigations and redux implementation",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "To create components",
        })
        .array("-c")
        .positional("-s", {
          alias: "--screen",
          type: "string",
          describe: "To create screens",
        })
        .array("-s")
        .positional("-r", {
          alias: "--redux",
          type: "boolean",
          describe: "To create redux store implementation",
        })
        .positional("--reducer", {
          type: "string",
          describe: "To create redux reducer implementation",
        })
        .array("--reducer")
        .positional("--action", {
          type: "string",
          describe: "To create redux action implementation",
        })
        .array("--action")
        .positional("-n", {
          alias: "--navigation",
          type: "string",
          describe: "To create navigation for selected screens",
        })
        .array("-n")
        .positional("--config", {
          type: "boolean",
          describe: "to create config file",
        })
        .option("js", {
          alias: "javascript",
          default: true,
          describe: "To write files in javascript",
        })
        .option("ts", {
          alias: "typescript",
          describe: "To write files in typescript",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "Folder path to create files within",
        })
        .option("t", {
          alias: "template",
          type: "string",
          default: "",
          describe: "Template to be used to create files with",
        })
        .option("o", {
          alias: "overwrite",
          type: "boolean",
          default: false,
          describe: "Used to overwrite created files",
        });
    },
    (argv) => {
      if (rootChecker()) {
        let {
          component,
          screen,
          redux,
          reducer,
          action,
          navigation,
          config,
          js,
          ts,
          folder,
          template,
          overwrite,
        } = argv;
        try {
          loadConfig();
        } catch {}
        // check if project is written in typescript
        ts = languageChecker() === "ts" ? true : ts;
        if (component) {
          component.forEach((c) =>
            createComponent(c, js, ts, folder, template, overwrite)
          );
        } else if (screen) {
          screen.forEach((s) =>
            createScreen(s, js, ts, folder, template, overwrite)
          );
        } else if (redux) {
          createReduxStore(js, ts, overwrite);
        } else if (reducer) {
          reducer.forEach((r) => {
            createReducer(r, js, ts, overwrite);
          });
        } else if (action) {
          createAction(action, js, ts, overwrite);
        } else if (navigation) {
          createNavigation(navigation, js, ts, folder, overwrite);
        } else if (config) {
          createConfig(overwrite);
        } else {
          console.log("Check usage: rnhc create --help");
        }
      } else {
        console.log(
          "You don't seem to be at the root of a react native project"
        );
      }
    }
  )
  .command(
    "delete [name]",
    "Delete components, screens, navigations and redux implementation",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "To delete components",
        })
        .array("-c")
        .positional("-s", {
          alias: "--screen",
          type: "string",
          describe: "To delete screens",
        })
        .array("-s")
        .positional("-r", {
          alias: "--redux",
          type: "boolean",
          describe: "To delete redux implementation",
        })
        .positional("-n", {
          alias: "--navigation",
          type: "boolean",
          describe: "To delete navigations",
        })
        .positional("--config", {
          type: "boolean",
          describe: "to delete config file",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "Folder path to delete files or folders within",
        });
    },
    (argv) => {
      if (rootChecker()) {
        const { component, screen, redux, navigation, config, folder } = argv;
        try {
          loadConfig();
        } catch {}
        if (component) {
          deleteComponents(component, folder);
        } else if (screen) {
          deleteScreens(screen, folder);
        } else if (redux) {
          deleteReduxStore();
        } else if (navigation) {
          deleteNavigation(folder);
        } else if (config) {
          deleteConfig();
        } else {
          console.log("Check usage: rnhc delete --help");
        }
      } else {
        console.log(
          "You don't seem to be at the root of a react native project"
        );
      }
    }
  )
  .command(
    "combine [name]",
    "Combine components or screens in a folder",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          array: true,
          describe: "To combine components in a folder",
        })
        .array("-c")
        .positional("-s", {
          alias: "--screen",
          type: "string",
          array: true,
          describe: "To combine pages in a folder",
        })
        .array("-s")
        .option("f", {
          alias: "folder",
          type: "string",
          describe: "Folder path to combine components or screens",
          demandOption: "This option is mandatory" | true,
        });
    },
    (argv) => {
      if (rootChecker()) {
        const { component, screen, folder } = argv;
        try {
          loadConfig();
        } catch {}
        if (component) {
          if (component.length > 1) {
            combineComponents(component, folder);
          } else {
            console.log("At least give 2 components");
          }
        } else if (screen) {
          combineScreens(screen, folder);
        } else {
          console.log("Check usage: rnhc combine --help");
        }
      } else {
        console.log(
          "You don't seem to be at the root of a react native project"
        );
      }
    }
  )
  .help().argv;
