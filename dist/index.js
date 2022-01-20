"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.Storage = exports.Rest = exports.Native = exports.Dialog = exports.Commands = exports.Clyde = void 0;
const Commands = __importStar(require("./modules/commands"));
exports.Commands = Commands;
const Clyde = __importStar(require("./modules/clyde"));
exports.Clyde = Clyde;
const Dialog = __importStar(require("./modules/dialog"));
exports.Dialog = Dialog;
const Native = __importStar(require("./modules/native"));
exports.Native = Native;
const Rest = __importStar(require("./modules/rest"));
exports.Rest = Rest;
const Storage = __importStar(require("./modules/storage"));
exports.Storage = Storage;
const Users = __importStar(require("./modules/users"));
exports.Users = Users;
