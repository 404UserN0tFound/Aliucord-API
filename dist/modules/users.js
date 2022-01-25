"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.fetchProfile = exports.fetchCurrentUser = void 0;
async function fetchCurrentUser() {
    return new Promise((resolve, reject) => {
        window.aliucord.users.fetchCurrentUser().then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
exports.fetchCurrentUser = fetchCurrentUser;
async function fetchProfile(userID) {
    return new Promise((resolve, reject) => {
        window.aliucord.users.fetchProfile(userID).then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
exports.fetchProfile = fetchProfile;
async function getUser(userID) {
    return new Promise((resolve, reject) => {
        window.aliucord.users.getUser(userID).then((user) => {
            resolve(user);
        }).catch(reject);
    });
}
exports.getUser = getUser;
