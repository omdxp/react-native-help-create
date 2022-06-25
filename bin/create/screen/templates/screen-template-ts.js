/**
 * @function screenTemplateTs
 * @description this function returns the default screen template in typescript.
 * @param {string} screenName - name of screen.
 * @param {boolean} withFunctions - if the screen has function.
 * @param {boolean} withStyles - if the screen has styles.
 * @param {boolean} defaultExports - if the screen is a default export.
 * @param {boolean} withProps - if the page has props.
 * @returns {string} the screen template in typescript.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.screenTemplateTs = (
  screenName,
  withFunctions,
  withStyles,
  defaultExports,
  withProps
) => {
  let str = `import { FC } from "react";
import { Text, View } from "react-native";
`;
  if (withFunctions) {
    str += `import {} from "./functions";
`;
  }
  if (withStyles) {
    str += `import { ${screenName}Styles } from "./styles";
`;
  }
  if (withProps) {
    str += `
interface ${screenName}ScreenProps {}
`;
  }
  if (defaultExports) {
    str += `
const ${screenName}Screen: FC${
      withProps ? `<${screenName}ScreenProps>` : ""
    } = ({}) => {
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
export const ${screenName}Screen: FC${
      withProps ? `<${screenName}ScreenProps>` : ""
    } = ({}) => {
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
