/**
 * @function screenTemplateTs
 * @description this function returns the default screen template in typescript.
 * @param {string} screenName - name of screen.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.screenTemplateTs = (screenName) => {
  return `import React, { FC } from "react";
import { Text, View } from "react-native";

import {} from "./functions";
import { ${screenName}Styles } from "./styles";

interface ${screenName}ScreenProps {}

export const ${screenName}Screen: FC<${screenName}ScreenProps> = ({}: ${screenName}ScreenProps) => {
  return (
    <View>
      <Text>${screenName} screen created!</Text>
    </View>
  );
};
`;
};
