declare type mdl = Function | object;
declare type patchCallback = (self: any, args: any[], res: any) => void;
interface Patcher {
    caller: string;
    type: string;
    id: number;
    callback: patchCallback;
    unpatch: () => void;
}
interface Patch {
    getPatchesByCaller: (id: string) => Patcher[];
    before: (...args: any[]) => void;
    instead: (...args: any[]) => void;
    after: (...args: any[]) => void;
    unpatchAll: () => void;
}
declare function create(name: string): Patch;
declare function before(caller: string, mdl: mdl, func: string, callback: patchCallback): any;
declare function instead(caller: string, mdl: mdl, func: string, callback: patchCallback): any;
declare function after(caller: string, mdl: mdl, func: string, callback: patchCallback): any;
export { create, before, instead, after };
