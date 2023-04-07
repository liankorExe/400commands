const discord = require('discord.js');

module.exports = async (client, role, oldColor, newColor) => {
    const logsChannel = await client.getLogs(role.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `🧻・Couleur du rôle mise à jour`,
        desc: `Un rôle a été mis à jour`,
        fields: [
            {
                name: `> Role`,
                value: `- ${role}`
            },
            {
                name: `> Avant`,
                value: `- #${oldColor.toString(16)}`
            },
            {
                name: `> Apres`,
                value: `- #${newColor.toString(16)}`
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