import FolderNavigation from "./folder/navigation";
import ScreenThreeScreen from "./screen-three";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();


const routes = [
  {
    name: "folder",
    component: FolderNavigation,
  },
  {
    name: "screen-three",
    component: ScreenThreeScreen,
  },
];

const Navigation = () => {
  return (
    <Navigator>
      {routes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
export default Navigation;
