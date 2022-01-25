"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReply = void 0;
function sendReply(channelID, content) {
    window.aliucord.clyde.sendReply(channelID, content);
}
exports.sendReply = sendReply;
