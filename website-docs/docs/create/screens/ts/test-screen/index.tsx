import { FC } from "react";
import { Text, View } from "react-native";
import {} from "./functions";
import { TestScreenStyles } from "./styles";

interface TestScreenScreenProps {}

const TestScreenScreen: FC<TestScreenScreenProps> = ({}) => {
  return (
    <View>
      <Text>TestScreen screen created!</Text>
    </View>
  );
};
export default TestScreenScreen;
