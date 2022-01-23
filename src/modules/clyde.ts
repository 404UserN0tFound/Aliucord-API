import { getModule } from "./module";

const clydeModule = getModule(m => m.default?.sendBotMessage, false);

/**
 * Send a reply as Clyde
 */
function sendReply(channelID: string, content: string) {
  clydeModule.exports.default.sendBotMessage(channelID, content);
}

export {
  sendReply
}