function create(name) {
    return window.aliucord.patcher.create(name);
}
function before(caller, mdl, func, callback) {
    const unpatch = window.aliucord.patcher.before(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch
    };
}
function instead(caller, mdl, func, callback) {
    const unpatch = window.aliucord.patcher.instead(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch
    };
}
function after(caller, mdl, func, callback) {
    const unpatch = window.aliucord.patcher.after(caller, mdl, func, callback);
    return {
        unpatchAll: unpatch
    };
}
export { create, before, instead, after };
