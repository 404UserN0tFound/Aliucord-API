"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIBaseURL = exports.delete = exports.patch = exports.put = exports.post = exports.get = void 0;
async function get(data) {
    return window.aliucord.rest.get(data);
}
exports.get = get;
async function post(data) {
    return window.aliucord.rest.post(data);
}
exports.post = post;
async function put(data) {
    return window.aliucord.rest.put(data);
}
exports.put = put;
async function patch(data) {
    return window.aliucord.rest.patch(data);
}
exports.patch = patch;
async function _delete(data) {
    return window.aliucord.rest._delete(data);
}
exports.delete = _delete;
async function getAPIBaseURL() {
    return window.aliucord.rest.getAPIBaseURL();
}
exports.getAPIBaseURL = getAPIBaseURL;
