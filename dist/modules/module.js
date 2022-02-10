function getModule(filter, exports = true) {
    const module = window.aliucord.getModule(filter, exports);
    return module;
}
function getModules(filter, first = false) {
    return window.aliucord.getModules(filter, first);
}
function getModuleByProps(...props) {
    return window.aliucord.getModuleByProps(props);
}
function getModuleByIndex(id) {
    return window.aliucord.getModuleByIndex(id);
}
export { getModule, getModules, getModuleByProps, getModuleByIndex };
