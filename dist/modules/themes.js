"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTheme = exports.registerTheme = exports.applyTheme = exports.listThemes = exports.getTheme = void 0;
function getTheme() {
    return window.aliucord.themer.getTheme();
}
exports.getTheme = getTheme;
function listThemes() {
    return window.aliucord.themer.listThemes();
}
exports.listThemes = listThemes;
function applyTheme(name) {
    window.aliucord.themer.applyTheme(name);
}
exports.applyTheme = applyTheme;
function registerTheme(theme) {
    window.aliucord.themer.registerTheme(theme);
}
exports.registerTheme = registerTheme;
function removeTheme() {
    window.aliucord.themer.removeTheme();
}
exports.removeTheme = removeTheme;
