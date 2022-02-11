function getTheme() {
    return window.aliucord.themer.getTheme();
}
function listThemes() {
    return window.aliucord.themer.listThemes();
}
function applyTheme(name) {
    window.aliucord.themer.applyTheme(name);
}
function registerTheme(theme) {
    window.aliucord.themer.registerTheme(theme);
}
function removeTheme() {
    window.aliucord.themer.removeTheme();
}
export { getTheme, listThemes, applyTheme, registerTheme, removeTheme, };
