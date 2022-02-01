/**
 * getModule
 * Get/Find a Discord module
 * Example: getModule(m => m.API_HOST)
 * @returns Module
 */
function getModule(filter: (module: any) => boolean, exports?: true): ExportedModule;
function getModule(filter: (module: any) => boolean, exports?: false): Module;
function getModule(filter: (module: any) => boolean, exports = true): Module | ExportedModule {
  const module = window.aliucord.getModule(filter, exports);
  return module;
}

function getModules(filter: (module: any) => boolean, first = false): number[] {
  return window.aliucord.getModules(filter, first);
}

function getModuleByProps(...props: string[]): ExportedModule {
  return window.aliucord.getModuleByProps(props);
}

function getModuleByIndex(id: string): Module {
  return window.aliucord.getModuleByIndex(id);
}

declare global {
  interface Window {
    aliucord: any;
  }
}

declare interface Module {
  id: string;
  exports: ExportedModule
}

declare interface ExportedModule {
  default?: {[key: string]: any};
  [key: string]: any;
}

export {
  getModule,
  getModules,
  getModuleByProps,
  getModuleByIndex
}