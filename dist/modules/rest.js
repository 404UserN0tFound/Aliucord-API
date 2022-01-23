"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIBaseURL = exports.delete = exports.patch = exports.put = exports.post = exports.get = void 0;
const module_1 = require("./module");
const restModule = (0, module_1.getModule)(m => { var _a; return (_a = m.default) === null || _a === void 0 ? void 0 : _a.getAPIBaseURL; });
async function get(data) {
    return new Promise((resolve, reject) => {
        restModule.default.get(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.get = get;
async function post(data) {
    return new Promise((resolve, reject) => {
        restModule.default.post(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.post = post;
async function put(data) {
    return new Promise((resolve, reject) => {
        restModule.default.put(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.put = put;
async function patch(data) {
    return new Promise((resolve, reject) => {
        restModule.default.patch(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.patch = patch;
async function _delete(data) {
    return new Promise((resolve, reject) => {
        restModule.default.delete(data).then((response) => {
            resolve(response);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.delete = _delete;
async function getAPIBaseURL() {
    return restModule.default.getAPIBaseURL();
}
exports.getAPIBaseURL = getAPIBaseURL;
