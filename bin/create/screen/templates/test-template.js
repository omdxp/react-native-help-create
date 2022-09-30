/**
 * @function testTemplate
 * @description this function returns the default test template for a screen.
 * @param {string} screenName - name of screen.
 * @param {boolean} defaultExports - if the screen is a default export.
 * @author [omdxp](https://github.com/omdxp)
 */
exports.testTemplate = (screenName, defaultExports) => {
  return `import "react-native";

import ${
    defaultExports ? `${screenName}Screen` : `{ ${screenName}Screen }`
  } from "../";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<${screenName}Screen />);
});
`;
};
