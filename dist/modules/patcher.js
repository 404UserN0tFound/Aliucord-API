"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchAfter = exports.patchInstead = exports.patchBefore = exports.createPatch = void 0;
function createPatch(name) {
    return window.aliucord.patcher.createPatch(name);
}
exports.createPatch = createPatch;
function patchBefore(caller, mdl, func, callback) {
    window.aliucord.patcher.patchBefore(caller, mdl, func, callback);
}
exports.patchBefore = patchBefore;
function patchInstead(caller, mdl, func, callback) {
    window.aliucord.patcher.patchInstead(caller, mdl, func, callback);
}
exports.patchInstead = patchInstead;
function patchAfter(caller, mdl, func, callback) {
    window.aliucord.patcher.patchAfter(caller, mdl, func, callback);
}
exports.patchAfter = patchAfter;
