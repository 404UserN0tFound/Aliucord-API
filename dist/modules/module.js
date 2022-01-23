"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModule = void 0;
function getModule(filter, exports = true) {
    const module = window.getModule(filter, exports);
    return module;
}
exports.getModule = getModule;
