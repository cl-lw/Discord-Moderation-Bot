
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let kullanıcı = message.mentions.members.first();

    if(kullanıcı){
        const $adista = new Discord.MessageEmbed()
        .setDescription(`${kullanıcı} Kişisinin Profil Resmi`)
        .setColor('#36393F')
        .setImage(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
        message.channel.send($adista)
    } else {
        const $adista = new Discord.MessageEmbed()
        .setDescription(`${message.author} Profil Resmin`)
        .setColor('#36393F')
        .setImage(message.author.avatarURL({dynamic: true, size: 2048}))
        message.channel.send($adista)
    }
}

exports.conf = {
enabled: true,
guildOnly: false,

aliases: ['Avatar','AVATAR','pp','Pp','PP','İCON','icon','İcon','aVATAR','avatra','Avatra','AVATRA','avtra','AVTRA','Avtra'],
kategori : "Eğlence",
permLevel: 0
}

exports.help = {
name: 'avatar',
description: 'Fbi Giffi Atar',
usage: '.avatar @etiket',
};