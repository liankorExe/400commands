const discord = require('discord.js');

module.exports = async (client, oldChannel, newChannel) => {
    let types = {
        10: "Fil d'actualités",
        11: "Fil publique",
        12: "Fil priver",
    }

    const logsChannel = await client.getLogs(newChannel.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📖・Fil modifié`,
        desc: `Un fil viens d'etre modifié`,
        fields: [
            {
                name: `> Ancien nom`,
                value: `- ${oldChannel.name}`
            },
            {
                name: `> Nouveau nom`,
                value: `- ${newChannel.name}`
            },
            {
                name: `> ID`,
                value: `- ${newChannel.id}`
            },
            {
                name: `> Categorie`,
                value: `${newChannel.parent}`
            },
            {
                name: `> Salon`,
                value: `<#${newChannel.id}>`
            },
            {
                name: `> Type`,
                value: `${types[newChannel.type]}`
            }
        ]
    }, logsChannel).catch(() => { })
};