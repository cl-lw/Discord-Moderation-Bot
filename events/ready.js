const Discord = require("discord.js");
const ayarlar = require('../ayarlar.js');
client.on("ready ")
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `!!yardım`}, status: 'dnd' })
};

