"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReply = void 0;
const clydeModule = getModule(m => { var _a; return (_a = m.default) === null || _a === void 0 ? void 0 : _a.sendBotMessage; }, false);
function sendReply(channelID, content) {
    clydeModule.exports.default.sendBotMessage(channelID, content);
}
exports.sendReply = sendReply;
