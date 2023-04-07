const discord = require('discord.js');

module.exports = async (client, channel, time) => {
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

    client.embed({
        title: `🔧・Messages épinglés modifié`,
        desc: `Les messages épinglés d'un salon ont etaient modifié`,
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
            },
            {
                name: `> Epinglé à`,
                value: `- <t:${(time / 1000).toFixed(0)}>`
            }
        ]
    }, logsChannel).catch(() => { })
};