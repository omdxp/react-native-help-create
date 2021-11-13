/**
 * @function screenTemplateJs
 * @description this function returns the default screen template in javascript.
 * @param {string} screenName - name of screen.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.screenTemplateJs = (screenName) => {
  return `import React from "react";
import { Text, View } from "react-native";

import {} from "./functions";
import { ${screenName}Styles } from "./styles";

export const ${screenName}Screen = () => {
  return (
    <View>
      <Text>${screenName} screen created!</Text>
    </View>
  );
}
`;
};
