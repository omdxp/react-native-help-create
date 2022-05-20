const { deleteComponents } = require("./component");
const { deleteScreens } = require("./screen");
const { deleteReduxStore, deleteReducers, deleteActions } = require("./redux");
const { deleteNavigation } = require("./navigation");
const { deleteConfig } = require("./config");

exports.deleteComponents = deleteComponents;
exports.deleteScreens = deleteScreens;
exports.deleteReduxStore = deleteReduxStore;
exports.deleteReducers = deleteReducers;
exports.deleteActions = deleteActions;
exports.deleteNavigation = deleteNavigation;
exports.deleteConfig = deleteConfig;
