/**
 * @function componentTemplateTs
 * @description this function returns the default component template in typescript.
 * @param {string} componentName - name of component.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateTs = (componentName) => {
  return `import React, { FC } from "react";
import { Text, View } from "react-native";
import { ${componentName}Styles } from "./styles";

interface ${componentName}Props {}

export const ${componentName}: FC<${componentName}Props> = ({}: ${componentName}Props) => {
  return (
    <View>
      <Text>${componentName} component created!</Text>
    </View>
  );
}
`;
};
