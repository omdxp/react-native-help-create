const { storeTemplateJs } = require("./store-template-js");
const { storeTemplateTs } = require("./store-template-ts");
const { reducerTemplateJs } = require("./reducer-template-js");
const { reducerTemplateTs } = require("./reducer-template-ts");
const { actionTemplateJs } = require("./action-template-js");
const { actionTemplateTs } = require("./action-template-ts");
const { mainReducerTemplate } = require("./main-reducer-template");
const { customReducerTemplateJs } = require("./custom-reducer-template-js");
const { customReducerTemplateTs } = require("./custom-reducer-template-ts");
const { customActionTemplateJs } = require("./custom-action-template-js");
const { customActionTemplateTs } = require("./custom-action-template-ts");

exports.storeTemplateJs = storeTemplateJs;
exports.storeTemplateTs = storeTemplateTs;
exports.reducerTemplateJs = reducerTemplateJs;
exports.reducerTemplateTs = reducerTemplateTs;
exports.actionTemplateJs = actionTemplateJs;
exports.actionTemplateTs = actionTemplateTs;
exports.mainReducerTemplate = mainReducerTemplate;
exports.customReducerTemplateJs = customReducerTemplateJs;
exports.customReducerTemplateTs = customReducerTemplateTs;
exports.customActionTemplateJs = customActionTemplateJs;
exports.customActionTemplateTs = customActionTemplateTs;
