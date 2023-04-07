const Discord = require('discord.js');

module.exports = async (client, guild, bannerURL) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🖼️・Nouvelle banniere`,
        desc: `La bannière du serveur a été mise à jour`,
        image: bannerURL
    }, logsChannel).catch(() => { })
};