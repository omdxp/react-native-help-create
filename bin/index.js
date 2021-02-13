#!/usr/bin/env node

const yargs = require("yargs");

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
          describe:
            "to create basic redux implementation structure (it does not require <FileName> argument)",
        });
    },
    function (argv) {
      if (argv.component) {
        console.log(argv.component, "not implemented yet 1");
      } else if (argv.screen) {
        console.log(argv.screen, "not implemented yet 2");
      } else if (argv.redux) {
        console.log(argv.redux, "not implemented yet 3");
      } else {
        console.log("Check usage: rnhc create --help");
      }
    }
  )
  .help().argv;
