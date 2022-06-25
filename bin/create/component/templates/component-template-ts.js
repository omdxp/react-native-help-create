/**
 * @function componentTemplateTs
 * @description this function returns the default component template in typescript.
 * @param {string} componentName - name of component.
 * @param {boolean} withStyles - if the component has styles.
 * @param {boolean} defaultExports - if the component is a default export.
 * @param {boolean} withProps - if the component has props.
 * @returns {string} the template ts file.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.componentTemplateTs = (
  componentName,
  withStyles,
  defaultExports,
  withProps
) => {
  let str = `import { FC } from "react";
import { Text, View } from "react-native"
`;
  if (withStyles) {
    str += `import { ${componentName}Styles } from "./styles";
`;
  }
  if (withProps) {
    str += `
interface ${componentName}Props {}
`;
  }
  if (defaultExports) {
    str += `
const ${componentName}: FC${
      withProps ? `<${componentName}Props>` : ""
    } = ({}) => {
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
export const ${componentName}: FC${
      withProps ? `<${componentName}Props>` : ""
    } = ({}) => {
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
