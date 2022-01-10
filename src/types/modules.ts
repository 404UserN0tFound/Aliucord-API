/**
 * getModule
 * Get/Find a Discord module
 * Example: getModule(m => m.API_HOST)
 * @returns Module
 */
declare global {
  const getModule: (filter: (module: any) => boolean, exports?: boolean) => Module;
}
/**
  * Module
  * Represents a Discord module
  */
declare interface Module {
  id: string;
  exports: any;
  
  [key: string]: any;
}

export {
  Module
}