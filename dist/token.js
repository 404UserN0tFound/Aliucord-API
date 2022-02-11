function getToken() {
    return window.aliucord.token.getToken();
}
function setToken(token) {
    return window.aliucord.token.setToken(token);
}
function hideToken() {
    window.aliucord.token.hideToken();
}
function showToken() {
    window.aliucord.token.showToken();
}
function removeToken() {
    window.aliucord.token.removeToken();
}
export { getToken, setToken, hideToken, showToken, removeToken };
