/**
 * @function stylesTemplate
 * @description this function returns the default styles template for a component.
 * @param {string} componentName - name of component.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.stylesTemplate = (componentName) => {
  return `import { StyleSheet } from "react-native";

export const ${componentName}Styles = StyleSheet.create({});
`;
};
