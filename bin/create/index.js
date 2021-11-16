const { createComponent } = require("./component/functions");
const { createNavigation } = require("./navigation/functions");
const { createReduxStore } = require("./redux/functions");
const { createScreen } = require("./screen/functions");

exports.createComponent = createComponent;
exports.createNavigation = createNavigation;
exports.createReduxStore = createReduxStore;
exports.createScreen = createScreen;
