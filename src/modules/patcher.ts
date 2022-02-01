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

function create(name: string): Patch {
  return window.aliucord.patcher.create(name);
}

function before(caller: string, mdl: mdl, func: string, callback: patchCallback) {
  window.aliucord.patcher.before(caller, mdl, func, callback);
}

function instead(caller: string, mdl: mdl, func: string, callback: patchCallback) {
  window.aliucord.patcher.instead(caller, mdl, func, callback);
}

function after(caller: string, mdl: mdl, func: string, callback: patchCallback) {
  window.aliucord.patcher.after(caller, mdl, func, callback);
}

export {
  create,
  before,
  instead,
  after
};