const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction);

    if (perms == false) return;

    interaction.guild.channels.cache.forEach(ch => {
        if (ch.type == Discord.ChannelType.GuildText) {
            const permissions = ch.permissionsFor(ch.guild.roles.everyone);
            const canSendMessages = permissions.has("SEND_MESSAGES");
            if (!canSendMessages) return;
            ch.permissionOverwrites.edit(interaction.guild.id, {
                SendMessages: false,
            });
            setTimeout(() => {
                ch.setName(ch.name + " lock")
            }, 1000);
        }
    })

    client.succNormal({
        text: "Tous les salons on étaient vérouillé !",
        type: 'editreply'
    }, interaction);
}

