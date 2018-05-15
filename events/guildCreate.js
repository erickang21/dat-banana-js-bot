// This event executes when a new guild (server) is joined.

module.exports = (client, guild) => {
  // We need to add this guild to our settings!
  const discord = require("discord.js");
  client.settings.set(guild.id, client.config.defaultSettings);
  let chan = client.channels.get("392443319684300801");
  const embed = new discord.RichEmbed()
    .setTitle("dat banana bot joined a server!")
    .setDescription(`**${guild.name}**`)
    .setColor(0x00ff00);
  chan.send({ embed });
};
