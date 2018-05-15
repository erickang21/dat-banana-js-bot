// This event executes when a new guild (server) is left.

module.exports = (client, guild) => {
  // Well they're gone. Let's remove them from the settings!
  client.settings.delete(guild.id);
  module.exports = (client, guild) => {
    // We need to add this guild to our settings!
    const discord = require("discord.js");
    client.settings.set(guild.id, client.config.defaultSettings);
    let chan = client.channels.get("392443319684300801");
    const embed = new discord.RichEmbed()
      .setTitle("dat banana bot left a server.")
      .setDescription(`**${guild.name}**`)
      .setColor(0xf45342);
    chan.send({ embed });
  };
};
