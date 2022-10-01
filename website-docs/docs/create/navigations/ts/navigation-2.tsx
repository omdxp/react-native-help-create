import { FC } from "react";
import FolderNavigation from "./folder/navigation";
import ScreenThreeScreen from "./screen-three";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();


interface Route {
  name: string;
  component: FC;
}

const routes: Route[] = [
  {
    name: "folder",
    component: FolderNavigation,
  },
  {
    name: "screen-three",
    component: ScreenThreeScreen,
  },
];

const Navigation: FC = () => {
  return (
    <Navigator>
      {routes.map(({ name, component }) => (
        <Screen key={name} name={name} component={component} />
      ))}
    </Navigator>
  );
};
export default Navigation;
