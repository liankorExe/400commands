const Discord = require('discord.js');

module.exports = async (client, guild, afkChannel) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🛑・Nouveau salon AFK`,
        desc: `Un Salon AFK a été ajouté a ce serveur`,
        fields: [
            {
                name: `> Salon`,
                value: `- ${afkChannel}`
            },
            {
                name: `> Name`,
                value: `- ${afkChannel.name}`
            },
            {
                name: `> ID`,
                value: `- ${afkChannel.id}`
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(afkChannel.createdTimestamp / 1000)}:R>`
            }
        ]
    }, logsChannel).catch(() => { })
};