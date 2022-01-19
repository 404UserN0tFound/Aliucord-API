"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reloadDiscord = void 0;
const nativeModules = getModule(m => m.NativeModules).NativeModules;
function reloadDiscord() {
    nativeModules.BundleUpdaterManager.reload();
}
exports.reloadDiscord = reloadDiscord;
