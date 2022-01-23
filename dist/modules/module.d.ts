declare function getModule(filter: (module: any) => boolean, exports?: true): ExportedModule;
declare function getModule(filter: (module: any) => boolean, exports?: false): Module;
declare global {
    interface Window {
        getModule: (filter: (module: any) => boolean, exports?: boolean) => Module | ExportedModule;
    }
}
declare interface Module {
    id: string;
    exports: ExportedModule;
}
declare interface ExportedModule {
    default?: {
        [key: string]: any;
    };
    [key: string]: any;
}
export { getModule, };
