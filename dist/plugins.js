function registerPlugin(plugin) {
    window.aliucord.plugins.registerPlugin(plugin);
}
function getPlugin(name) {
    return window.aliucord.plugins.getPlugin(name);
}
function getPlugins() {
    return window.aliucord.plugins.getPlugins();
}
export { registerPlugin, getPlugin, getPlugins };
