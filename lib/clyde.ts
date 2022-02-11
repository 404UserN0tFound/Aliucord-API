/**
 * Send a reply as Clyde
 */
function sendReply(channelID: string, content: string) {
  window.aliucord.clyde.sendReply(channelID, content);
}

export {
  sendReply
}