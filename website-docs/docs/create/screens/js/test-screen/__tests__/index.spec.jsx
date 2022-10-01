import "react-native";

import React from "react";
import TestScreenScreen from "..";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<TestScreenScreen />);
});
