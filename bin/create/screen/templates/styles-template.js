/**
 * @function stylesTemplate
 * @description this function returns the default styles template for a screen.
 * @param {string} screenName - name of screen.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.stylesTemplate = (screenName) => {
  return `import { StyleSheet } from "react-native";

export const ${screenName}Styles = StyleSheet.create({});
`;
};
