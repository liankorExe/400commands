const Discord = require('discord.js');
const Topgg = require(`@top-gg/sdk`);
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    let dbl = new Topgg.Api(process.env.TOPGG_TOKEN)

    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Vote pour moi")
                .setURL(process.env.VOTE)
                .setStyle(Discord.ButtonStyle.Link),
        );

    dbl.hasVoted(interaction.user.id).then(voted => {
        if (voted) {
            client.embed({
                title: `📨・Vote`,
                desc: `Tu as voté !`,
                image: process.env.BANNER,
                color: client.config.colors.succes,
                components: [row],
                type: 'editreply'
            }, interaction)
        }
        if (!voted) {
            client.embed({
                title: `📨・Vote`,
                desc: `Tu n'as pas voté !`,
                image: process.env.BANNER,
                color: client.config.colors.error,
                components: [row],
                type: 'editreply'
            }, interaction)
        }
    }).catch(error => { client.errNormal({ text: `Il y a eu une erreur en vérifiant ce vote !`, editreply: true }, interaction) });
}

