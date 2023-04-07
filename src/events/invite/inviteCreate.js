const discord = require('discord.js');

module.exports = async (client, invite) => {
    const logsChannel = await client.getLogs(invite.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `📨・Invitation créé`,
        desc: `Une invitation a été créée`,
        fields: [
            {
                name: `> Code`,
                value: `- ${invite.code}`
            },
            {
                name: `> Inviter`,
                value: `- ${invite.inviter} (${invite.inviter.tag})`
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(invite.createdTimestamp / 1000)}:R>`
            }
        ]
    }, logsChannel).catch(() => { })
};