"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSystemVersion = exports.getDevice = exports.getBuild = exports.getVersion = exports.reloadDiscord = void 0;
function reloadDiscord() {
    window.aliucord.native.reloadDiscord();
}
exports.reloadDiscord = reloadDiscord;
function getVersion() {
    return window.aliucord.native.Version;
}
exports.getVersion = getVersion;
function getBuild() {
    return window.aliucord.native.Build;
}
exports.getBuild = getBuild;
function getDevice() {
    return window.aliucord.native.device;
}
exports.getDevice = getDevice;
function getSystemVersion() {
    return window.aliucord.native.systemVersion;
}
exports.getSystemVersion = getSystemVersion;
