const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
  return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField(
          "Hata",
          `•\`=kapat\`Kullanabilmek için , \`Kanalları Yönet\` **Yetkisine sahip olmanız gerekir**.`
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/768502339375857714/768796763040907284/Ekran_Alnts.PNG"
        )
    );

  

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });


  message.channel.send("**Kanal herkesin kullanımına kapatıldı.**");
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-kapat"],
  kategori: "Moderasyon",
  permLevel: 0
};

exports.help = {
  name: 'kapat',
  description: 'Hızlı chatı kapayabilirsiniz.',
  usage: 'kapat'
};