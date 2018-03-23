exports.run = (client, message, args, level) => {
    switch (args.join(" ").toLowerCase()) {
    case "lenny":
        message.channel.send("( ͡° ͜ʖ ͡°)");
        break;
    case "shrug":
        message.channel.send("¯\_(ツ)_/¯");
        break;
    case "tableflip":
        message.channel.send("(╯°□°）╯︵ ┻━┻");
        break;
    case "unflip":
        message.channel.send("┬─┬ ノ( ゜-゜ノ)");
        break;
    case "money":
        message.channel.send("[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]");
        break;
    case "guns":
        message.channel.send("̿'̿'\̵͇̿̿\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿");
        break;
    case "music":
        message.channel.send("ヾ(⌐■_■)ノ♪");
        break;
    case "yum":
        message.channel.send("ლ(´ڡ`ლ)");
        break;
    default:
        message.channel.send("Boi. Please enter a textface name. Available are:\nlenny, shrug, tableflip, unflip, money, guns, music, yum")
        break;
    }
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
