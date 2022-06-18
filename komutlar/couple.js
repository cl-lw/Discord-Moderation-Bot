const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let replies = [ "https://media.giphy.com/media/l2R0e9y6A304JkFOg/giphy.gif", "https://media.giphy.com/media/3ov9jWu7BuHufyLs7m/giphy.gif"]
    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed().setTitle("Gifiniz Buyurun").setColor("RANDOM").setImage(replies[result]);
    
    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'gif' ],
    permLevel: 0
};

exports.help = {
    name: 'gif',
    description: 'Rastgele gif atar.',
    usage: 'gif'
};
//KOMUTLARA ATINIZ
