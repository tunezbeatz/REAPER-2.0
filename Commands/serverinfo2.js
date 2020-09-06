const Discord = module.require("discord.js");

module.exports = {
    name: "serverinfo",
    category: "utility",
    description: "Shows info about a server",
    usage: "[command]",
    run: async (client, message, args) => {
        //command
        let afk = message.guild.afkChannel;
        let achannel = "";
        if (afk) {
            achannel = message.guild.afkChannel;
        } else if (!afk) {
            achannel = "None";
        }
        let servericon = message.guild.iconURL;
        let verifLevels = {
            "NONE": "None",
            "LOW": "Low",
            "MEDIUM": "Medium",
            "HIGH": "(╯°□°）╯︵  ┻━┻ (High)",
            "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Very High)"
        };
        let region = {
            "brazil": "🇧🇷 Brazil",
            "eu-central": "🇪🇺 Central Europe",
            "singapore": "🇸🇬 Singapore",
            "us-central": "🇺🇸 U.S. Central",
            "sydney": "🇦🇺 Sydney",
            "us-east": "🇺🇸 U.S. East",
            "us-south": "🇺🇸 U.S. South",
            "us-west": "🇺🇸 U.S. West",
            "eu-west": "🇪🇺 Western Europe",
            "vip-us-east": "🇺🇸 VIP U.S. East",
            "london": "🇬🇧 London",
            "amsterdam": "🇳🇱 Amsterdam",
            "hongkong": "🇭🇰 Hong Kong",
            "russia": "🇷🇺 Russia",
            "southafrica": "🇿🇦  South Africa",
            "india": "🇮🇳 India"
        };
    const serverembed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name}`, `${message.guild.iconURL()}`)
    .setThumbnail(servericon)
    .addField(`General Info`, `Owner: ${message.guild.owner} \nRegion: **${region[message.guild.region]}** \nVerification Lvl: **${verify[message.guild.verificationLevel]}**`)
    .addField(`Overview`, `Total Channels: **${message.guild.cache.channels.size}** \nAFK Channel: ${message.guild.afkChannel} \nAFK Timeout: **${message.guild.afkTimeout}** \nTotal Roles: **${message.guild.cache.roles.size}**`)
    .addField(`Member Info`, `Total Members: **${message.guild.memberCount}** \n Humans: **${message.guild.members.cache.filter(member => !member.user.bot).size}** \nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}**`)
    .addField(`Misc. Info`, `You Joined on: ${message.member.joinedAt} \nCreated On: ${message.guild.createdAt}`)
    .setThumbnail(message.guild.IconURL())
    .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL())
    .setTimestamp;

    message.channel.send(serverembed);
    }
}