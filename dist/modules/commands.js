const AliucordSectionID = "aliucord";
function registerCommands(caller, commands) {
    window.aliucord.commands.registerCommands(caller, commands);
}
function unregisterCommands(caller) {
    window.aliucord.commands.unregisterCommands(caller);
}
export { AliucordSectionID, registerCommands, unregisterCommands };
