"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemVersion = exports.getDevice = exports.getBuild = exports.getVersion = exports.reloadDiscord = void 0;
const module_1 = require("./module");
const nativeModules = (0, module_1.getModule)(m => m.NativeModules).NativeModules;
function reloadDiscord() {
    nativeModules.BundleUpdaterManager.reload();
}
exports.reloadDiscord = reloadDiscord;
function getVersion() {
    return nativeModules.InfoDictionaryManager.Version;
}
exports.getVersion = getVersion;
function getBuild() {
    return nativeModules.InfoDictionaryManager.Build;
}
exports.getBuild = getBuild;
function getDevice() {
    return nativeModules.DCDDeviceManager.device;
}
exports.getDevice = getDevice;
function getSystemVersion() {
    return nativeModules.DCDDeviceManager.systemVersion;
}
exports.getSystemVersion = getSystemVersion;
