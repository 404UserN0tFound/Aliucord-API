"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unregisterCommands = exports.registerCommands = exports.AliucordSectionID = void 0;
const AliucordSectionID = "aliucord";
exports.AliucordSectionID = AliucordSectionID;
function registerCommands(caller, commands) {
    window.aliucord.commands.registerCommands(caller, commands);
}
exports.registerCommands = registerCommands;
function unregisterCommands(caller) {
    window.aliucord.commands.unregisterCommands(caller);
}
exports.unregisterCommands = unregisterCommands;
