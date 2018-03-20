exports.run = (client, message, args, level) => {
    message.channel.send("Wanna join OUR hood? https://discord.gg/jmuXk5T is da wae!");
 };
 
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: "User"
 };
 
 exports.help = {
   name: "discord",
   category: "Miscelaneous",
   description: "Get the link to the hood (aka our Discord server)",
   usage: ".discord"
 };
