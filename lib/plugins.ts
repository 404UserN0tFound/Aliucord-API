import { Command } from "./commands";
import { Patchable } from "./patcher";

interface Plugin {
  name: string;

  commands: Command[];
  patches: Patchable[];

  onStart: () => void;
  onStop: () => void;

  onEnable?: () => void;
  onDisable?: () => void;
}

function registerPlugin(plugin: Plugin) {
  window.aliucord.plugins.registerPlugin(plugin);
}

function getPlugin(name: string) {
  return window.aliucord.plugins.getPlugin(name);
}

function getPlugins() {
  return window.aliucord.plugins.getPlugins();
}

export {
  Plugin,
  registerPlugin,
  getPlugin,
  getPlugins
}