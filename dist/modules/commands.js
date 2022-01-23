"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = exports.AliucordSectionID = void 0;
const module_1 = require("./module");
const commandsModule = (0, module_1.getModule)(m => m.getBuiltInCommands, false);
const AliucordSectionID = "-3";
exports.AliucordSectionID = AliucordSectionID;
function registerCommands(commands) {
    commandsModule.exports.BUILT_IN_COMMANDS.push(...commands);
}
exports.registerCommands = registerCommands;
