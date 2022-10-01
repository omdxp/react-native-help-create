import { FC } from "react";
import { Text, View } from "react-native"
import { TestComponentStyles } from "./styles";

interface TestComponentProps {}

const TestComponent: FC<TestComponentProps> = ({}) => {
  return (
    <View>
      <Text>TestComponent component created!</Text>
    </View>
  );
};
export default TestComponent;
