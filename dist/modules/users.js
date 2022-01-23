"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.fetchProfile = exports.fetchCurrentUser = void 0;
const module_1 = require("./module");
const userModule = (0, module_1.getModule)(m => m.fetchProfile);
async function fetchCurrentUser() {
    return new Promise((resolve, reject) => {
        userModule.fetchCurrentUser().then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
exports.fetchCurrentUser = fetchCurrentUser;
async function fetchProfile(userID) {
    return new Promise((resolve, reject) => {
        userModule.fetchProfile(userID).then((profile) => {
            resolve(profile);
        }).catch(reject);
    });
}
exports.fetchProfile = fetchProfile;
async function getUser(userID) {
    return new Promise((resolve, reject) => {
        userModule.getUser(userID).then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
exports.getUser = getUser;
