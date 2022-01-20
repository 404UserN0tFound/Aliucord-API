"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.setItem = exports.getItem = void 0;
const storageModule = getModule(m => m.getItem);
async function getItem(name) {
    return new Promise((resolve, reject) => {
        storageModule.getItem(name).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.getItem = getItem;
async function setItem(name, value) {
    return new Promise((resolve, reject) => {
        storageModule.setItem(name, value).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.setItem = setItem;
async function removeItem(name) {
    return new Promise((resolve, reject) => {
        storageModule.removeItem(name).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.removeItem = removeItem;
