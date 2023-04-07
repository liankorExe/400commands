const Discord = require('discord.js');

/**
 * 
 * @param {Discord.Client} client 
 * @param {Discord.GuildMember} oldMember 
 * @param {Discord.GuildMember} newMember 
 * @returns 
 */
module.exports = async (client, oldMember, newMember) => {
    if (!oldMember || !newMember) return;
    const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
    const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
    if (removedRoles.size === 0 && addedRoles.size === 0 || removedRoles.size === addedRoles.size) return;    
    const logsChannel = await client.getLogs(newMember.guild.id);
    if (!logsChannel) return;

    var ostring = "";
    if (removedRoles.size === 0) ostring = "Aucun role supprimé";
    if (removedRoles.size > 0) removedRoles.forEach(element => { ostring += "<@&" + element + "> " });

    var nstring = "";
    if (addedRoles.size > 0) addedRoles.forEach(element => { nstring += "<@&" + element + "> " });

    client.embed({
        title: `Modifications des roles de${newMember.user.username} `,
        desc: `Il y a des rôles changés`,
        fields: [
            {
                name: `> Anciens roles`,
                value: `- ${ostring}`
            },
            {
                name: `> Nouveaux roles`,
                value: `- ${nstring}`
            },
        ]
    }, logsChannel).catch(() => { })
};