/**
 * @function testTemplate
 * @description this function returns the default test template for a component.
 * @param {string} componentName - name of component.
 * @param {boolean} defaultExports - if the component is a default export.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.testTemplate = (componentName, defaultExports) => {
  return `import "react-native";

import ${
    defaultExports ? `${componentName}` : `{ ${componentName} }`
  } from "../";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<${componentName} />);
});
`;
};
