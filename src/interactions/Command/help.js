const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Affiche le help'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.StringSelectMenuBuilder()
                    .setCustomId('Bot-helppanel')
                    .setPlaceholder('❌┆Rien de selectionner')
                    .addOptions([
                        {
                            label: `Commandes`,
                            description: `Affiche toutes les commandes du bot`,
                            emoji: "💻",
                            value: "commands-Bothelp",
                        },
                        {
                            label: `Invite`,
                            description: `Invite le bot sur ton serveur`,
                            emoji: "📨",
                            value: "invite-Bothelp",
                        },
                        {
                            label: `Support`,
                            description: `Rejoin le serveur support`,
                            emoji: "❓",
                            value: "support-Bothelp",
                        },
                        {
                            label: `Changelogs`,
                            description: `Affiche les changelogs du bot`,
                            emoji: "📃",
                            value: "changelogs-Bothelp",
                        },
                    ]),
            );

        return client.embed({
            title: `> ❓ Help panel`,
            desc: `\`\`\`fix\nBienvenue dans le panneau d'aide du Bot ! Nous avons fait un petit tour d'horizon pour vous aider ! Faites votre choix via le menu ci-dessous\`\`\``,
            image: process.env.BANNER,
            fields: [
                {
                    name: `❌・Le menu marche pas ?`,
                    value: `\`\`\`\nEssayez de renvoyer la commande. Si vous n'obtenez aucune réaction, assurez-vous de signaler le bogue !\`\`\``
                },
                {
                    name: `🪲・Beug trouvé ?`,
                    value: `Report le avec \`/report bug\``
                },
                {
                    name: `🔗・Liens`,
                    value: `[Website](${process.env.WEBSITE} | [Invite](${client.config.discord.botInvite}) | [Vote](${process.env.VOTE})`
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

