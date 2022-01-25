import { Command } from "../types/commands";

// Section ID used for Aliucord built-in commands
const AliucordSectionID = "-3";

/**
 * Add new built-in commands to Discord
 */
function registerCommands(commands: Command[]) {
  window.aliucord.comands.registerCommands(commands);
}

export {
  AliucordSectionID,
  registerCommands
}