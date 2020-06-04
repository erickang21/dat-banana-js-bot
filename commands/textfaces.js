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
    case "cool":
        message.channel.send("(▀̿Ĺ̯▀̿ ̿)");
        break;
    case "sniper":
        message.channel.send("▄︻̷̿┻̿═━一")
        break;
    case "money":
        message.channel.send("[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]") 
        break;
    default:
        message.channel.send("Boi. Please enter a textface name. Available are:\nlenny, shrug, tableflip, unflip, money, guns, music, yum, cool, sniper, money")
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
    name: "textface",
    category: "Utility",
    description: "Textfaces. Dank and gucci.",
    usage: ".textface [face]"
};
