exports.run = (client, message, args, level) => {
    const Discord = require("discord.js");
    let answers = ["It is certain. :white_check_mark:", "It is decidedly so. :white_check_mark:", "Without a doubt. :white_check_mark:", "Yes, definitely. :white_check_mark:", "You may rely on it. :white_check_mark:", "As I see it, yes. :white_check_mark:", "Most likely. :white_check_mark:", " Outlook good. :white_check_mark:", "Yes. :white_check_mark:", "Signs point to yes. :white_check_mark:", "Reply hazy, try again. :large_orange_diamond: ", "Ask again later. :large_orange_diamond: ", "Better not tell you now. :large_orange_diamond: ", "Cannot predict now. :large_orange_diamond: ", "Concentrate and ask again. :large_orange_diamond: ", "Do not count on it. :x:", "My reply is no. :x:", "My sources say no. :x:", "Outlook not so good. :x:", "Very doubtful. :x:"]
    const embed = new Discord.RichEmbed()
        .setTitle(args.join(" "))
        .setDescription(answers.random())
        .setColor(0x00ff00)
        .setAuthor(`Sent by ${message.author.username}`, message.author.displayAvatarURL);
    message.channel.send({ embed });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["8ball"],
    permLevel: "User"
};

exports.help = {
    name: "eightball",
    category: "Fun",
    description: "Not sure? Be sure! Ask the 8ball!",
    usage: ".eightball question"
};
