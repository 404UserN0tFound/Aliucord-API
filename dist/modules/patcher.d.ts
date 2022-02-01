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
declare function createPatch(name: string): Patch;
declare function patchBefore(caller: string, mdl: mdl, func: string, callback: patchCallback): void;
declare function patchInstead(caller: string, mdl: mdl, func: string, callback: patchCallback): void;
declare function patchAfter(caller: string, mdl: mdl, func: string, callback: patchCallback): void;
export { createPatch, patchBefore, patchInstead, patchAfter };
