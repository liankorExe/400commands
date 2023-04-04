const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Liankor GitHub")
                .setURL(process.env.GITHUB)
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.user.username}・Donate`,
        desc: `_____ \n\nCliquez sur le bouton ci-dessous pour accéder à la page du sponsor \n**Attention ! le parrain n'est pas requis**`,
        thumbnail: client.user.avatarURL({ dynamic: true }),
        url: process.env.VOTE,
        components: [row],
        type: 'editreply'
    }, interaction)
}

