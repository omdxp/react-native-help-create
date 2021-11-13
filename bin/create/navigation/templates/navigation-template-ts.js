/**
 * @function navigationTemplateTs
 * @description this function returns navigation file for the specified navigation type and screens in typescript.
 * @param {string} type - navigation type.
 * @param {Array} screens - array of screens.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.navigationTemplateTs = (type, screens) => {
  let template = `import React, { FC } from "react";\n\n`;
  switch (type) {
    case "stack":
      template +=
        'import { createStackNavigator } from "@react-navigation/stack";\n';
      template += "const { Navigator, Screen } = createStackNavigator();\n\n";
      break;

    case "drawer":
      template +=
        'import { createDrawerNavigator } from "@react-navigation/drawer";\n';
      template += "const { Navigator, Screen } = createDrawerNavigator();\n\n";
      break;

    case "tab":
      template +=
        'import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";\n';
      template +=
        "const { Navigator, Screen } = createBottomTabNavigator();\n\n";
      break;

    default:
      break;
  }
  screens.forEach((screen) => {
    template += `import { ${
      screen.importAs
        ? `Navigation as ${screen.componentName}`
        : screen.componentName
    } } from "${screen.path}";
`;
  });

  template += `export const Navigation: FC = () => {
  return (
    <Navigator>
    `;
  screens.forEach((screen) => {
    template += `  <Screen name="${screen.folderName}" component={${screen.componentName}} />
    `;
  });
  template = template.substring(0, template.length - 5);
  template += `
    </Navigator>
  );
};
`;
  return template;
};
