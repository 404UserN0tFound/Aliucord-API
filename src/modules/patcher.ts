// eslint-disable-next-line @typescript-eslint/ban-types
type mdl = Function | object;

type patchCallback = (self: any, args: any[], res: any) => void;

interface Patcher {
  caller: string;
  type: string;
  id: number;
  callback: patchCallback;
  unpatch: () => void;
}

interface Patch {
  getPatchesByCaller: (id: string) => Patcher[],
  before: (...args: any[]) => void;
  instead: (...args: any[]) => void;
  after: (...args: any[])  => void;
  unpatchAll: () => void;
}

function createPatch(name: string): Patch {
  return window.aliucord.patcher.createPatch(name);
}

function patchBefore(caller: string, mdl: mdl, func: string, callback: patchCallback) {
  window.aliucord.patcher.patchBefore(caller, mdl, func, callback);
}

function patchInstead(caller: string, mdl: mdl, func: string, callback: patchCallback) {
  window.aliucord.patcher.patchInstead(caller, mdl, func, callback);
}

function patchAfter(caller: string, mdl: mdl, func: string, callback: patchCallback) {
  window.aliucord.patcher.patchAfter(caller, mdl, func, callback);
}

export {
  createPatch,
  patchBefore,
  patchInstead,
  patchAfter
};