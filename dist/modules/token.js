"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeToken = exports.showToken = exports.hideToken = exports.setToken = exports.getToken = void 0;
const module_1 = require("./module");
const tokenModule = (0, module_1.getModule)(m => { var _a; return (_a = m.default) === null || _a === void 0 ? void 0 : _a.setToken; });
function getToken() {
    return tokenModule.default.getToken();
}
exports.getToken = getToken;
function setToken(token) {
    return tokenModule.default.setToken(token);
}
exports.setToken = setToken;
function hideToken() {
    tokenModule.default.hideToken();
}
exports.hideToken = hideToken;
function showToken() {
    tokenModule.default.showToken();
}
exports.showToken = showToken;
function removeToken() {
    tokenModule.default.removeToken();
}
exports.removeToken = removeToken;
