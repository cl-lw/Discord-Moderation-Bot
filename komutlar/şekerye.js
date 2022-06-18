const Discord = require('discord.js');

exports.run = (client, message, params) => {

if (!message.guild) {
  
const mrk = new Discord.MessageEmbed()//mrk //coders area

    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**")

return message.author.send(mrk); }

if (message.channel.type !== 'dm') {//mrk  //coders area

const mrk1 = new Discord.MessageEmbed()

    .setAuthor('Mukemmel Mukemmel!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/698986313403072713/801013061624004628/tenor_3.gif`)

return message.channel.send(mrk1);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'Eğlence',
  permLevel: 0
};

exports.help = {
  name: 'şekerye',
  description: 'Şeker Yersiniz!.',
  usage: 'şekerye'
};
