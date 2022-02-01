"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.after = exports.instead = exports.before = exports.create = void 0;
function create(name) {
    return window.aliucord.patcher.create(name);
}
exports.create = create;
function before(caller, mdl, func, callback) {
    window.aliucord.patcher.before(caller, mdl, func, callback);
}
exports.before = before;
function instead(caller, mdl, func, callback) {
    window.aliucord.patcher.instead(caller, mdl, func, callback);
}
exports.instead = instead;
function after(caller, mdl, func, callback) {
    window.aliucord.patcher.after(caller, mdl, func, callback);
}
exports.after = after;
