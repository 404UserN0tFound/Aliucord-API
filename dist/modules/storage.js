"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.setItem = exports.getItem = void 0;
async function getItem(name) {
    return window.aliucord.storage.getItem(name);
}
exports.getItem = getItem;
async function setItem(name, value) {
    return window.aliucord.storage.setItem(name, value);
}
exports.setItem = setItem;
async function removeItem(name) {
    return window.aliucord.storage.removeItem(name);
}
exports.removeItem = removeItem;
