const Discord = require('discord.js');

const Functions = require("../../database/models/functions");

module.exports = async (client, guild) => {
    const webhookClient = new Discord.WebhookClient({
        id: client.webhooks.serverLogs.id,
        token: client.webhooks.serverLogs.token,
    });

    if (guild == undefined) return;

    new Functions({
        Guild: guild.id,
        Prefix: client.config.discord.prefix
    }).save();

    try {
        const promises = [
            client.shard.broadcastEval(client => client.guilds.cache.size),
            client.shard.broadcastEval(client => client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];
        Promise.all(promises)
            .then(async (results) => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const embed = new Discord.EmbedBuilder()
                    .setTitle("🟢・Ajouté à un nouveau serveur !")
                    .addFields(
                        { name: "Total serveurs:", value: `${totalGuilds}`, inline: true },
                        { name: "Serveur name", value: `${guild.name}`, inline: true },
                        { name: "Serveur ID", value: `${guild.id}`, inline: true },
                        { name: "Serveur members", value: `${guild.memberCount}`, inline: true },
                        { name: "Serveur owner", value: `<@!${guild.ownerId}> (${guild.ownerId})`, inline: true },
                    )
                    .setThumbnail("https://i.imgur.com/kLb13Tr.gif")
                    .setColor(client.config.colors.normal)
                webhookClient.send({
                    username: 'Bot Logs',
                    avatarURL: client.user.avatarURL(),
                    embeds: [embed],
                });
            })

        let defaultChannel = "";
        guild.channels.cache.forEach((channel) => {
            if (channel.type == Discord.ChannelType.GuildText && defaultChannel == "") {
                if (channel.permissionsFor(guild.members.me).has(Discord.PermissionFlagsBits.SendMessages)) {
                    defaultChannel = channel;
                }
            }
        })

        let row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel("Invite")
                    .setURL(client.config.discord.botInvite)
                    .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                    .setLabel("Support server")
                    .setURL(client.config.discord.serverInvite)
                    .setStyle(Discord.ButtonStyle.Link),
            );

        client.embed({
            title: "Merci de m'avoir invité!",
            image: "https://i.imgur.com/kLb13Tr.gif",
            fields: [{
                name: "❓┆Comment configurer le bot?",
                value: "Le préfixe par défaut est \`/\`. \nPour lancer la configuration, utilisez \`/setup\`.",
                inline: false,
            },
            {
                name: "☎️┆J'ai besoin d'aide, que faire?",
                value: "Vous pouvez envoyer un message privé à <@837034549434777702> pour obtenir de l'aide ou rejoindre le [[serveur de support]](${client.config.discord.serverInvite}).",
                inline: false,
            },
            {
                name: "💻┆Quels sont les commandes?",
                value: "Voir la liste des commandes en tapant \`/help\`.",
                inline: false,
            },
            {
                name: "📨┆Invitez le bot!",
                value: "Pour inviter le bot, cliquez [[ICI]](${client.config.discord.botInvite}).",
                inline: false,
            },
            ],
            components: [row],
        }, defaultChannel)
    }
    catch (err) {
        console.log(err);
    }


};