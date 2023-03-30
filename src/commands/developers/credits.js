const Discord = require('discord.js');

const Schema = require('../../database/models/votecredits');

const webhookClientLogs = new Discord.WebhookClient({
    id: "1090683394981113879",
    token: "Tb55kSyypmcMGr-HaaYc5Enoo4SlYKawqCCijJt29oCMSzF913IAkpN-G0NEx-VoNi1V",
});

module.exports = async (client, interaction, args) => {
    const type = interaction.options.getString('type');
    const user = interaction.options.getUser('user');
    const amount = interaction.options.getNumber('amount');

    if (type == "add") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits += amount;
                data.save();
            }
            else {
                new Schema({
                    User: user.id,
                    Credits: amount
                }).save();
            }
        })

        client.succNormal({
            text: `Ajout de **${amount} credits** sur le compte de ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.EmbedBuilder()
            .setTitle(`🪙・Credits ajouté`)
            .setDescription(`Crédits ajoutés à ${user} (${user.id})`)
            .addFields(
                { name: "👤┆Ajouté par", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                { name: "🔢┆Motant", value: `${amount}`, inline: true },
            )
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
    else if (type == "remove") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits -= amount;
                data.save();
            }
        })

        client.succNormal({
            text: `**${amount} credits** supprimé du compte de ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.EmbedBuilder()
            .setTitle(`🪙・Credits supprimé`)
            .setDescription(`Crédits supprimés de ${user} (${user.id})`)
            .addFields(
                { name: "👤┆Supprimé par", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
                { name: "🔢┆Montant", value: `${amount}`, inline: true },
            )
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
}

