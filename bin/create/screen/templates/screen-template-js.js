/**
 * @function screenTemplateJs
 * @description this function returns the default screen template in javascript.
 * @param {string} screenName - name of screen.
 * @param {boolean} withFunctions - if the screen has functions.
 * @param {boolean} withStyles - if the screen has styles.
 * @param {boolean} defaultExports - if the screen is a default export.
 * @returns {string} the screen template in javascript.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.screenTemplateJs = (
  screenName,
  withFunctions,
  withStyles,
  defaultExports
) => {
  let str = `import { Text, View } from "react-native";
`;
  if (withFunctions) {
    str += `import {} from "./functions";
`;
  }
  if (withStyles) {
    str += `import { ${screenName}Styles } from "./styles";
`;
  }
  if (defaultExports) {
    str += `
const ${screenName}Screen = () => {
  return (
    <View>
      <Text>${screenName} screen created!</Text>
    </View>
  );
};
export default ${screenName}Screen;
`;
  } else {
    str += `
export const ${screenName}Screen = () => {
  return (
    <View>
      <Text>${screenName} screen created!</Text>
    </View>
  );
};
`;
  }
  return str;
};
