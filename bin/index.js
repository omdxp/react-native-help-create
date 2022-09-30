#!/usr/bin/env node

const yargs = require("yargs");
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
  deleteReducers,
  deleteActions,
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
        .option("ts", {
          alias: "typescript",
          describe: "To force writing files in typescript",
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
        })
        .option("atom", {
          type: "boolean",
          default: false,
          describe: "Used to create atom components",
        })
        .option("molecule", {
          type: "boolean",
          default: false,
          describe: "Used to create molecule components",
        })
        .option("organism", {
          type: "boolean",
          default: false,
          describe: "Used to create organism components",
        });
    },
    (argv) => {
      let {
        component,
        screen,
        redux,
        reducer,
        action,
        navigation,
        config,
        ts,
        folder,
        template,
        overwrite,
        silent,
        atom,
        molecule,
        organism,
      } = argv;
      // check if project is written in typescript
      ts = languageChecker() === "ts" ? true : ts;
      if (component) {
        component.forEach((c) =>
          createComponent(
            c,
            ts,
            folder,
            template,
            overwrite,
            silent,
            atom,
            molecule,
            organism
          )
        );
      } else if (screen) {
        screen.forEach((s) =>
          createScreen(s, ts, folder, template, overwrite, silent)
        );
      } else if (redux) {
        createReduxStore(ts, overwrite, silent);
      } else if (reducer) {
        reducer.forEach((r) => {
          createReducer(r, ts, overwrite, silent);
        });
      } else if (action) {
        createAction(action, ts, overwrite, silent);
      } else if (navigation) {
        createNavigation(navigation, ts, folder, overwrite, silent);
      } else if (config) {
        createConfig(overwrite, silent);
      } else {
        !silent && console.log("Check usage: rnhc create --help");
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
        .positional("--reducer", {
          type: "string",
          describe: "To delete redux reducer implementation",
        })
        .array("--reducer")
        .positional("--action", {
          type: "string",
          describe: "To delete redux action implementation",
        })
        .array("--action")
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
        })
        .option("atom", {
          type: "boolean",
          default: false,
          describe: "Used to delete atom components",
        })
        .option("molecule", {
          type: "boolean",
          default: false,
          describe: "Used to delete molecule components",
        })
        .option("organism", {
          type: "boolean",
          default: false,
          describe: "Used to delete organism components",
        });
    },
    (argv) => {
      const {
        component,
        screen,
        redux,
        reducer,
        action,
        navigation,
        config,
        folder,
        silent,
        atom,
        molecule,
        organism,
      } = argv;
      if (component) {
        deleteComponents(component, folder, silent, atom, molecule, organism);
      } else if (screen) {
        deleteScreens(screen, folder, silent);
      } else if (redux) {
        deleteReduxStore(silent);
      } else if (reducer) {
        deleteReducers(reducer, languageChecker() === "ts", silent);
      } else if (action) {
        deleteActions(action, languageChecker() === "ts", silent);
      } else if (navigation) {
        deleteNavigation(folder, silent);
      } else if (config) {
        deleteConfig(silent);
      } else {
        !silent && console.log("Check usage: rnhc delete --help");
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
      const { component, screen, folder, silent } = argv;
      if (component) {
        if (component.length > 1) {
          combineComponents(component, folder, silent);
        } else {
          !silent && console.log("At least give 2 components");
        }
      } else if (screen) {
        combineScreens(screen, folder, silent);
      } else {
        !silent && console.log("Check usage: rnhc combine --help");
      }
    }
  )
  .middleware((argv) => {
    const { silent } = argv;
    if (rootChecker()) {
      try {
        loadConfig();
      } catch {}
    } else {
      !silent &&
        console.log(
          "You don't seem to be at the root of a react native project"
        );
      process.exit(1);
    }
  })
  .option("silent", {
    type: "boolean",
    describe: "Do not show log messages",
  })
  .help()
  .strict()
  .recommendCommands().argv;
