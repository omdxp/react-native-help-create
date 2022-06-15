/**
 * @function navigationTemplateJs
 * @description this function returns navigation file for the specified navigation type and screens in javascript.
 * @param {string} type - navigation type.
 * @param {Array} screens - array of screens.
 * @param {boolean} defaultExports - if the navigation and screens are default exported.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.navigationTemplateJs = (type, screens, defaultExports) => {
  let template = `import React from "react";\n\n`;
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
  if (defaultExports) {
    screens.forEach((screen) => {
      template += `import ${
        screen.importAs
          ? `${screen.componentName}Navigation`
          : screen.componentName
      } from "${screen.path}";
`;
    });

    template += `\nconst routes = [\n`;

    screens.forEach((screen) => {
      template += `  {
    name: "${screen.componentName}",
    component: ${
      screen.importAs
        ? `${screen.componentName}Navigation`
        : screen.componentName
    }
  },\n`;
    });
    template += "];\n\n";

    template += `\nconst Navigation = () => {
  return (
    <Navigator>
      {routes.map(({name, component}) => (
        <Screen
          key={name}
          name={name}
          component={component}
        />
      ))}
    </Navigator>
  );
};
export default Navigation;
`;
  } else {
    screens.forEach((screen) => {
      template += `import { ${
        screen.importAs
          ? `Navigation as ${screen.componentName}`
          : screen.componentName
      } } from "${screen.path}";
`;
    });

    template += `\nconst routes = [\n`;

    screens.forEach((screen) => {
      template += `  {
    name: "${screen.componentName}",
    component: ${screen.componentName}
  },\n`;
    });
    template += "];\n\n";

    template += `\nexport const Navigation = () => {
  return (
    <Navigator>
      {routes.map(({name, component}) => (
        <Screen
          key={name}
          name={name}
          component={component}
        />
      ))}
    </Navigator>
  );
};
`;
  }

  return template;
};
