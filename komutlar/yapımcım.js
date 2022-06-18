const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.MessageEmbed()
  .setDescription('Yapımcılar')
  .setColor(0x00ffff)
  .addField("**》 BestKnife 《**", `<@937019691635994684>`)
  .addField("**》Wéwwys《**", `<@469224871927480323>`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Developed by AVNNN',
  usage: 'yapımcım'
}