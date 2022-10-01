import "react-native";

import TestScreenScreen from "../";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<TestScreenScreen />);
});
