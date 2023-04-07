const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction);

    if (perms == false) return;

    interaction.guild.channels.cache.forEach(ch => {
        if (ch.type == Discord.ChannelType.GuildText) {
            if (!ch.name.includes("lock")) return;
            ch.permissionOverwrites.edit(interaction.guild.id, {
                SendMessages: true,
            });
            setTimeout(() => {
                ch.setName(ch.name.split("lock")[0])
            }, 1000);
        }
    })

    client.succNormal({
        text: "Tous les salons on étaient dévérouillé !",
        type: 'editreply'
    }, interaction);
}

