import { bot, getOpts } from "../config.js";
const chatId = process.env.CHAT_ID;

export const sendMessage = (message, msg) => {
  msg ? bot.editMessageText(message, getOpts(msg)) : bot.sendMessage(chatId, message);
};
