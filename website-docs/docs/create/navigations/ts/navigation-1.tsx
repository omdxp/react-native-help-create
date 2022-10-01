import { FC } from "react";
import Screen1Screen from "./screen-1";
import Screen2Screen from "./screen-2";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();


interface Route {
  name: string;
  component: FC;
}

const routes: Route[] = [
  {
    name: "screen-1",
    component: Screen1Screen,
  },
  {
    name: "screen-2",
    component: Screen2Screen,
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
