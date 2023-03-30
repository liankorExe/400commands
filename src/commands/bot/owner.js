const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Liankor`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Liankor#4680`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Liankor Corporation`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[Ici](https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

