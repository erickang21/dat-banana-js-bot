exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const Discord = require("discord.js");
  const em = new Discord.MessageEmbed()
    .setTitle("PoIIIING!")
    .setDescription(`Bot Latency: ${Date.now() - message.createdTimestamp}ms\nAPI Latency: ${Math.round(client.ping)}ms`)
    .setColor(0x00ff00)
    .setAuthor(`Sent by ${message.author.username}`, message.author.displayAvatarURL);
  message.channel.send({embed: em});
  };
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pong"],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Utility",
  description: "It... like... pings. Then Pongs. And it\"s not Ping Pong.",
  usage: "ping"
};
