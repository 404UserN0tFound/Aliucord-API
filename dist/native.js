function reloadDiscord() {
    window.aliucord.native.reloadDiscord();
}
function getVersion() {
    return window.aliucord.native.Version;
}
function getBuild() {
    return window.aliucord.native.Build;
}
function getDevice() {
    return window.aliucord.native.device;
}
function getSystemVersion() {
    return window.aliucord.native.systemVersion;
}
export { reloadDiscord, getVersion, getBuild, getDevice, getSystemVersion };
