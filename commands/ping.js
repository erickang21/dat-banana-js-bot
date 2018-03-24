exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    .setTitle("Pinging...")
    .setDescription("Hang in there!")
    .setColor(0x00ff00)
  const msg = message.channel.send({ embed });
  const em = new Discord.RichEmbed()
    .setTitle("PoIIIING!")
    .setDescription(`Bot Latency: ${msg.createdTimestamp - message.createdTimestamp}ms\nAPI Latency: ${Math.round(client.ping)}ms`)
    .setColor(0x00ff00)
    .setAuthor(`Sent by ${message.author.username}`, message.author.displayAvatarURL);
  msg.edit(embed);
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
