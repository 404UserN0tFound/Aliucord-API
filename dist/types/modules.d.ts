declare global {
    const getModule: (filter: (module: any) => boolean, exports?: boolean) => Module;
}
declare interface Module {
    id: string;
    exports: any;
    [key: string]: any;
}
export { Module };
