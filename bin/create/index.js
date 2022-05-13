const { createComponent } = require("./component/functions");
const { createNavigation } = require("./navigation/functions");
const { createReduxStore } = require("./redux/functions");
const { createScreen } = require("./screen/functions");
const { createConfig } = require("./config/functions");

exports.createComponent = createComponent;
exports.createNavigation = createNavigation;
exports.createReduxStore = createReduxStore;
exports.createScreen = createScreen;
exports.createConfig = createConfig;
