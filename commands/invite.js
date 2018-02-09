exports.run = (client, message, args, level) => {
   message.channel.send("Lemme join dat hood -> https://discordapp.com/oauth2/authorize?client_id=408746549070266368&scope=bot&permissions=8");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Miscelaneous",
  description: "Invite me to your server1",
  usage: ".invite"
};
