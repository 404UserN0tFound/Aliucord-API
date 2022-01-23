import { getModule } from "./module";

const nativeModules = getModule(m => m.NativeModules).NativeModules;

/**
 * This function will reload Discord entirely, including reloading plugins
 */
function reloadDiscord() {
  nativeModules.BundleUpdaterManager.reload();
}

/**
 * Get the Discord's version
 */
function getVersion() {
  return nativeModules.InfoDictionaryManager.Version;
}

/**
 * Get the Discord's build number
 */
function getBuild() {
  return nativeModules.InfoDictionaryManager.Build;
}

/**
 * Get the user's device
 */
function getDevice() {
  return nativeModules.DCDDeviceManager.device;
}

/**
 * Get the user's device version
 */
function getSystemVersion() {
  return nativeModules.DCDDeviceManager.systemVersion;
}

export {
  reloadDiscord,

  getVersion,
  getBuild,
  getDevice,
  getSystemVersion
}