import { Command } from "../types/commands";
declare const AliucordSectionID = "aliucord";
declare function registerCommands(caller: string, commands: Command[]): void;
declare function unregisterCommands(caller: string): void;
export { AliucordSectionID, registerCommands, unregisterCommands };
