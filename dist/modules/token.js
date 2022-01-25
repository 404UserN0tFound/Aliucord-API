"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeToken = exports.showToken = exports.hideToken = exports.setToken = exports.getToken = void 0;
function getToken() {
    return window.aliucord.token.getToken();
}
exports.getToken = getToken;
function setToken(token) {
    return window.aliucord.token.setToken(token);
}
exports.setToken = setToken;
function hideToken() {
    window.aliucord.token.hideToken();
}
exports.hideToken = hideToken;
function showToken() {
    window.aliucord.token.showToken();
}
exports.showToken = showToken;
function removeToken() {
    window.aliucord.token.removeToken();
}
exports.removeToken = removeToken;
