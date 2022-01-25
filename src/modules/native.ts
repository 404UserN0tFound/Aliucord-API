/**
 * This function will reload Discord entirely, including reloading plugins
 */
function reloadDiscord() {
  window.aliucord.native.reloadDiscord();
}

/**
 * Get the Discord's version
 */
function getVersion() {
  return window.aliucord.native.Version;
}

/**
 * Get the Discord's build number
 */
function getBuild() {
  return window.aliucord.native.Build;
}

/**
 * Get the user's device
 */
function getDevice() {
  return window.aliucord.native.device;
}

/**
 * Get the user's device version
 */
function getSystemVersion() {
  return window.aliucord.native.systemVersion;
}

export {
  reloadDiscord,

  getVersion,
  getBuild,
  getDevice,
  getSystemVersion
}