import { getModule } from "./module";
import { Command } from "../types/commands";


const commandsModule = getModule(m => m.getBuiltInCommands, false);

// Section ID used for Aliucord built-in commands
const AliucordSectionID = "-3";

/**
 * Add new built-in commands to Discord
 */
function registerCommands(commands: Command[]) {
  commandsModule.exports.BUILT_IN_COMMANDS.push(...commands);
}

export {
  AliucordSectionID,
  registerCommands
}