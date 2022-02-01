import { Command } from "../types/commands";

// Section ID used for Aliucord built-in commands
const AliucordSectionID = "aliucord";

/**
 * Add new built-in commands to Discord
 */
function registerCommands(caller: string, commands: Command[]) {
  window.aliucord.commands.registerCommands(caller, commands);
}

function unregisterCommands(caller: string) {
  window.aliucord.commands.unregisterCommands(caller);
}

export {
  AliucordSectionID,
  registerCommands,
  unregisterCommands
}