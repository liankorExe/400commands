const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction);

    if (perms == false) return;

    interaction.guild.channels.cache.forEach(ch => {
        console.log(ch)
        if (ch.type == Discord.ChannelType.GuildText) {
            ch.permissionOverwrites.edit(interaction.guild.id, {
                SendMessages: false,
            });
            ch.setName(ch.name + " lock")
        }
    })

    client.succNormal({
        text: "Tous les salons on étaient vérouillé !",
        type: 'editreply'
    }, interaction);
}

