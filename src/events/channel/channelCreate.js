const discord = require('discord.js');

module.exports = async (client, channel) => {
    let types = {
        0: "Salon Textuel",
        2: "Salon Vocal",
        4: "Categorie",
        5: "Channel Annonces",
        10: "Fils Annonces",
        11: "Fils Publique",
        12: "Fils Priver",
        13: "Stage Channel",
        14: "Categorie",
    }

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    console.log(channel.type)
    client.embed({
        title: `🔧・Salon créé`,
        desc: `Un salon viens d'etre créé`,
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
                value: `- ${channel.parent}`
            },
            {
                name: `> Salon`,
                value: `- <#${channel.id}>`
            },
            {
                name: `> Type`,
                value: `- ${types[channel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })
};