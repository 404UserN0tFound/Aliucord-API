"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.setItem = exports.getItem = void 0;
async function getItem(name) {
    return new Promise((resolve, reject) => {
        window.aliucord.storage.getItem(name).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.getItem = getItem;
async function setItem(name, value) {
    return new Promise((resolve, reject) => {
        window.aliucord.storage.setItem(name, value).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.setItem = setItem;
async function removeItem(name) {
    return new Promise((resolve, reject) => {
        window.aliucord.storage.removeItem(name).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.removeItem = removeItem;
