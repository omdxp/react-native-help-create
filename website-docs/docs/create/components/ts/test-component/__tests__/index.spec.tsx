import "react-native";

import TestComponent from "../";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  renderer.create(<TestComponent />);
});
