"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.fetchProfile = exports.fetchCurrentUser = void 0;
async function fetchCurrentUser() {
    return window.aliucord.users.fetchCurrentUser();
}
exports.fetchCurrentUser = fetchCurrentUser;
async function fetchProfile(userID) {
    return window.aliucord.users.fetchProfile(userID);
}
exports.fetchProfile = fetchProfile;
async function getUser(userID) {
    return window.aliucord.users.getUser(userID);
}
exports.getUser = getUser;
