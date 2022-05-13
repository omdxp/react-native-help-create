const { deleteComponents } = require("./component");
const { deleteScreens } = require("./screen");
const { deleteReduxStore } = require("./redux");
const { deleteNavigation } = require("./navigation");
const { deleteConfig } = require("./config");

exports.deleteComponents = deleteComponents;
exports.deleteScreens = deleteScreens;
exports.deleteReduxStore = deleteReduxStore;
exports.deleteNavigation = deleteNavigation;
exports.deleteConfig = deleteConfig;
