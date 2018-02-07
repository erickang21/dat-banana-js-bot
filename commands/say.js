exports.run = (client, message, args, level) => {
   message.channel.send(args.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "Say something as the bot!",
  usage: "say [message]"
};
