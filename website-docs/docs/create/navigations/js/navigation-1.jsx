import Screen1Screen from "./screen-1";
import Screen2Screen from "./screen-2";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();


const routes = [
  {
    name: "screen-1",
    component: Screen1Screen,
  },
  {
    name: "screen-2",
    component: Screen2Screen,
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
