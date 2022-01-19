const nativeModules = getModule(m => m.NativeModules).NativeModules;

/**
 * This function will reload Discord entirely, including reloading plugins
 */
function reloadDiscord() {
  nativeModules.BundleUpdaterManager.reload();
}

export {
  reloadDiscord
}