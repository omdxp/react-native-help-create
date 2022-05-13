const { config } = require("./configs");
const { loadConfig } = require("./load-config");
const { rootChecker } = require("./root-checker");

exports.config = config;
exports.loadConfig = loadConfig;
exports.rootChecker = rootChecker;
