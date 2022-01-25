"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = exports.AliucordSectionID = void 0;
const AliucordSectionID = "-3";
exports.AliucordSectionID = AliucordSectionID;
function registerCommands(commands) {
    window.aliucord.comands.registerCommands(commands);
}
exports.registerCommands = registerCommands;
