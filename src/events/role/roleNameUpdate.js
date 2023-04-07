const discord = require('discord.js');

module.exports = async (client, role, oldName, newName) => {
    const logsChannel = await client.getLogs(role.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🧻・Nom du rôle mis à jour`,
        desc: `Un rôle a été mis à jour`,
        fields: [
            {
                name: `> Role`,
                value: `- ${role}`
            },
            {
                name: `> Avant`,
                value: `- ${oldName}`
            },
            {
                name: `> Apres`,
                value: `- ${newName}`
            },
            {
                name: `> ID`,
                value: `${role.id}`
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`
            }
        ]
    }, logsChannel).catch(() => { })
};