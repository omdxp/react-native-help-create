/**
 * @function componentTemplateJs
 * @description this function returns the default component template in javascript.
 * @param {string} componentName - name of component.
 * @param {boolean} withStyles - if the component has styles.
 * @param {boolean} defaultExports - if the component is a default export.
 * @returns {string} the template js file.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateJs = (componentName, withStyles, defaultExports) => {
  let str = `import React from "react";
import { Text, View } from "react-native";
`;
  if (withStyles) {
    str += `import { ${componentName}Styles } from "./styles";
`;
  }
  if (defaultExports) {
    str += `
const ${componentName} = () => {
  return (
    <View>
      <Text>${componentName} component created!</Text>
    </View>
  );
};
export default ${componentName};
`;
  } else {
    str += `
export const ${componentName} = () => {
  return (
    <View>
      <Text>${componentName} component created!</Text>
    </View>
  );
};
`;
  }
  return str;
};
