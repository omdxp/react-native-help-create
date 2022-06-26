/**
 * @function navigationTemplateTs
 * @description this function returns navigation file for the specified navigation type and screens in typescript.
 * @param {string} type - navigation type.
 * @param {Array} screens - array of screens.
 * @param {boolean} defaultExports - if the navigation and screens are default exported.
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
exports.navigationTemplateTs = (type, screens, defaultExports) => {
  let template = "";
  switch (type) {
    case "stack":
      template +=
        'import { createStackNavigator } from "@react-navigation/stack";\n';
      template += "const { Navigator, Screen } = createStackNavigator();\n\n";
      break;

    case "native-stack":
      template +=
        'import { createNativeStackNavigator } from "@react-navigation/native-stack";\n';
      template +=
        "const { Navigator, Screen } = createNativeStackNavigator();\n\n";
      break;

    case "drawer":
      template +=
        'import { createDrawerNavigator } from "@react-navigation/drawer";\n';
      template += "const { Navigator, Screen } = createDrawerNavigator();\n\n";
      break;

    case "bottom-tabs":
      template +=
        'import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";\n';
      template +=
        "const { Navigator, Screen } = createBottomTabNavigator();\n\n";
      break;

    case "material-bottom-tabs":
      template +=
        'import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";\n';
      template +=
        "const { Navigator, Screen } = createMaterialBottomTabNavigator();\n\n";
      break;

    case "material-top-tabs":
      template +=
        'import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";\n';
      template +=
        "const { Navigator, Screen } = createMaterialTopTabNavigator();\n\n";
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

    template += `\ninterface Route {
  name: string;
  component: FC;
}\n`;

    template += `\nconst routes: Route[] = [\n`;

    screens.forEach((screen) => {
      template += `  {
    name: "${screen.folderName}",
    component: ${
      screen.importAs
        ? `${screen.componentName}Navigation`
        : screen.componentName
    }
  },\n`;
    });
    template += "];\n";

    template += `\nconst Navigation: FC = () => {
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

    template += `\ninterface Route {
  name: string;
  component: FC;
}\n`;

    template += `\nconst routes: Route[] = [\n`;

    screens.forEach((screen) => {
      template += `  {
    name: "${screen.folderName}",
    component: ${screen.componentName}
  },\n`;
    });
    template += "];\n";

    template += `\nexport const Navigation: FC = () => {
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
