/**
 * @function componentTemplateJs
 * @description this function returns the default component template in javascript.
 * @param {string} componentName - name of component.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateJs = (componentName) => {
  return `import React from "react";
import { Text, View } from "react-native";
import { ${componentName}Styles } from "./styles";

export const ${componentName} = () => {
  return (
    <View>
      <Text>${componentName} component created!</Text>
    </View>
  );
}
`;
};
