const { config } = require("./configs");
const { loadConfig } = require("./load-config");
const { rootChecker } = require("./root-checker");
const { languageChecker } = require("./language-checker");
const { getComponentName } = require("./get-component-name");

exports.config = config;
exports.loadConfig = loadConfig;
exports.rootChecker = rootChecker;
exports.languageChecker = languageChecker;
exports.getComponentName = getComponentName;
