#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("file-system");
const {
  createComponent,
  createNavigation,
  createReduxStore,
  createScreen,
} = require("./create");

yargs
  .scriptName("rnhc")
  .usage("$0 <command> [option]")
  .command(
    "create [name]",
    "create components, screens, navigations and redux implementation",
    (yargs) => {
      yargs
        .positional("-c", {
          alias: "--component",
          type: "string",
          describe: "to create components",
        })
        .array("-c")
        .positional("-s", {
          alias: "--screen",
          type: "string",
          describe: "to create screens",
        })
        .array("-s")
        .positional("-r", {
          alias: "--redux",
          type: "boolean",
          describe: "to create redux store implementation",
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
          describe: "to write files in javascript",
          choices: ["stack", "drawer", "tab"],
        })
        .option("ts", {
          alias: "typescript",
          describe: "to write files in typescript",
        })
        .option("f", {
          alias: "folder",
          type: "string",
          default: "",
          describe: "folder path to create files within",
        })
        .option("t", {
          alias: "template",
          type: "string",
          default: "",
          describe: "template to be used to create files with",
        });
    },
    (argv) => {
      if (fs.existsSync("package.json")) {
        const {
          component,
          screen,
          redux,
          navigation,
          js,
          ts,
          folder,
          template,
        } = argv;
        if (component) {
          component.forEach((c) =>
            createComponent(c, js, ts, folder, template)
          );
        } else if (screen) {
          screen.forEach((s) => createScreen(s, js, ts, folder, template));
        } else if (redux) {
          createReduxStore(js, ts);
        } else if (navigation) {
          if (navigation.length > 1) {
            createNavigation(navigation, js, ts, folder);
          } else {
            console.log("at least give 2 screens");
          }
        }
      }
    }
  );
