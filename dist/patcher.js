function create(name) {
    return window.aliucord.patcher.create(name);
}
function before(caller, mdl, func, callback) {
    return window.aliucord.patcher.before(caller, mdl, func, callback);
}
function instead(caller, mdl, func, callback) {
    return window.aliucord.patcher.instead(caller, mdl, func, callback);
}
function after(caller, mdl, func, callback) {
    return window.aliucord.patcher.after(caller, mdl, func, callback);
}
export { create, before, instead, after };
