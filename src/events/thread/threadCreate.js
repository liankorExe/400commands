const discord = require('discord.js');

module.exports = async (client, channel) => {
    let types = {
        10: "Fil d'actualités",
        11: "Fil publique",
        12: "Fil priver",
    }

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📖・Fil créé`,
        desc: `Un fil viens d'etre créé`,
        fields: [
            {
                name: `> Nom`,
                value: `- ${channel.name}`
            },
            {
                name: `> ID`,
                value: `- ${channel.id}`
            },
            {
                name: `> Categorie`,
                value: `${channel.parent}`
            },
            {
                name: `> Salon`,
                value: `<#${channel.id}>`
            },
            {
                name: `> Type`,
                value: `${types[channel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })
};