#!/usr/bin/env node

const yargs = require("yargs");
const fs = require("file-system");

const componentTemplate = (component) => `
import React from 'react';
import {Text, View} from 'react-native';

export default function ${component}() {
  return (
    <View>
      <Text>${component} component created!</Text>
    </View>
  );
}

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
          describe:
            "to create basic redux implementation structure (it does not require <FileName> argument)",
        });
    },
    function (argv) {
      if (argv.component) {
        fs.writeFile(
          `app/components/${argv.component}.js`,
          componentTemplate(argv.component),
          function (err) {
            if (err) throw err;
            console.log(`app/components/${argv.component}.js created`);
          }
        );
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
