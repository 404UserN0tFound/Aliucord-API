"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const dialogModule = getModule((m) => { var _a; return (_a = m.default) === null || _a === void 0 ? void 0 : _a.show; }).default;
function show(options = { title: "Default dialog" }) {
    dialogModule.show(options);
}
exports.show = show;
