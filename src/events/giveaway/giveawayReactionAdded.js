const Discord = require('discord.js');

module.exports = (client, giveaway, member, reaction) => {
    client.succNormal({
        text: `Vous participé à [Ce Giveaways](https://discordapp.com/channels/${giveaway.message.guildId}/${giveaway.message.channelId}/${giveaway.message.id}) !`
    }, member).catch(() => { });
};