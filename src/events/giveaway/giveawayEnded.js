const Discord = require('discord.js');

module.exports = (client, giveaway, winners) => {
    winners.forEach((member) => {
        client.embed({
            title: `🎉・Giveaways Terminé`,
            desc: `Bravo ${member.user.username} ! Tu as gagné le giveaways !`,
            fields: [
                {
                    name: `🎁┆Prix`,
                    value: `${giveaway.prize}`,
                    inline: true
                },
                {
                    name: `🥳┆Giveaway`,
                    value: `[Ici](https://discordapp.com/channels/${giveaway.message.guildId}/${giveaway.message.channelId}/${giveaway.message.id})`,
                    inline: true
                }
            ]

        }, member).catch(() => { });
    });
};