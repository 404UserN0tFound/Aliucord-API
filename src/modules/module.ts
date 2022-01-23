/**
 * getModule
 * Get/Find a Discord module
 * Example: getModule(m => m.API_HOST)
 * @returns Module
 */
function getModule(filter: (module: any) => boolean, exports?: true): ExportedModule;
function getModule(filter: (module: any) => boolean, exports?: false): Module;
function getModule(filter: (module: any) => boolean, exports = true): Module | ExportedModule {
  const module = window.getModule(filter, exports);
  return module;
}

declare global {
  interface Window {
    getModule: (filter: (module: any) => boolean, exports?: boolean) => Module | ExportedModule;
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
}