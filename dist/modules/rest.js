"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIBaseURL = exports.delete = exports.patch = exports.put = exports.post = exports.get = void 0;
async function get(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.get(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.get = get;
async function post(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.post(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.post = post;
async function put(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.put(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.put = put;
async function patch(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.patch(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.patch = patch;
async function _delete(data) {
    return new Promise((resolve, reject) => {
        window.aliucord.rest.delete(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.delete = _delete;
async function getAPIBaseURL() {
    return window.aliucord.rest.getAPIBaseURL();
}
exports.getAPIBaseURL = getAPIBaseURL;
