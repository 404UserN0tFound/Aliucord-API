"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModuleByIndex = exports.getModuleByProps = exports.getModules = exports.getModule = void 0;
function getModule(filter, exports = true) {
    const module = window.aliucord.getModule(filter, exports);
    return module;
}
exports.getModule = getModule;
function getModules(filter, first = false) {
    return window.aliucord.getModules(filter, first);
}
exports.getModules = getModules;
function getModuleByProps(...props) {
    return window.aliucord.getModuleByProps(props);
}
exports.getModuleByProps = getModuleByProps;
function getModuleByIndex(id) {
    return window.aliucord.getModuleByIndex(id);
}
exports.getModuleByIndex = getModuleByIndex;
