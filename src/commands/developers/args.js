const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');

    client.succNormal({
        text: `Message has been sent successfully!`,
        type: 'ephemeraledit'
    }, interaction);

    if (message == "information") {
        client.simpleEmbed({
            image: `https://i.imgur.com/kLb13Tr.gif`
        }, interaction.channel).then(() => {
            client.embed({
                title: `ℹ️・Information`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `_____`,
                fields: [
                    {
                        name: `👋┆Bienvenue sur le serveur ${interaction.guild.name}!`,
                        value: `Bienvenue dans notre lieu de rencontre ! Rencontrez de nouvelles personnes ici, jouez à des jeux et participez à des événements saisonniers ! Nous sommes un serveur où nous réunissons tout le monde et nous essayons de le rendre confortable pour tout le monde ! Soyez les bienvenus et amusez-vous !`,
                    },
                    {
                        name: `❓┆Que puis-je faire ici ?`,
                        value: `- Rencontrer de nouvelles personnes! \n- Jouez à de nombreux jeux amusants ! \n- Découvrez les saisons ! \n- Participez aux événements ! \nEt…. Enfin, choisissez vos propres rôles sur <#847867992044994561> !`,
                    },
                    {
                        name: `🎫┆Comment puis-je obtenir de l'aide en cas de besoin ?`,
                        value: `Vous pouvez créer un ticket en <#820308164322656327> ! Nous sommes heureux de répondre à vos questions ici et de vous offrir une assistance sur votre serveur !`,
                    },
                    {
                        name: `⚙️┆Je veux aider Bot Hangout à s'améliorer !`,
                        value: `- Accédez aux candidatures et voyez quels types d'emplois sont disponibles ! \n- Ou créez un ticket et demandez si vous pouvez aider pour certaines choses ! \n\n**Nous vous souhaitons un très bon et heureux séjour ici !**`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "rules") {
        client.simpleEmbed({
            image: `https://i.imgur.com/kLb13Tr.gif`
        }, interaction.channel).then(async () => {
            await client.embed({
                title: `📃・Regles`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `_____ \n\nCe sont nos règles de serveur. Veuillez vous en tenir à cela pour que cela reste amusant pour tout le monde. Les administrateurs et les mods expireront/expulseront/banniront à leur discrétion`,
            }, interaction.channel)

            await client.embed({
                title: `1. Soyez respectueux`,
                desc: `Vous devez respecter tous les utilisateurs, quel que soit votre goût envers eux. Traitez les autres comme vous aimeriez être traité.`,
            }, interaction.channel)

            await client.embed({
                title: `2. Pas de langage inapproprié`,
                desc: `L'utilisation de blasphèmes doit être réduite au minimum. Cependant, tout langage désobligeant envers tout utilisateur est interdit.`,
            }, interaction.channel)

            await client.embed({
                title: `3. Pas de spam`,
                desc: `N'envoyez pas beaucoup de petits messages les uns après les autres. Ne perturbez pas le chat en spammant.`,
            }, interaction.channel)

            await client.embed({
                title: `4. Aucun matériel pornographique / adulte / autre NSFW`,
                desc: `Ceci est un serveur communautaire et n'est pas destiné à partager ce type de matériel.`,
            }, interaction.channel)

            await client.embed({
                title: `5. Pas de publicité`,
                desc: `Nous ne tolérons aucun type de publicité, que ce soit pour d'autres communautés ou flux. Vous pouvez publier votre contenu dans le canal média s'il est pertinent et apporte une valeur réelle (Vidéo/Art)`,
            }, interaction.channel)

            await client.embed({
                title: `6. Pas de noms ni de photos de profil offensants`,
                desc: `Il vous sera demandé de changer votre nom ou votre photo si le personnel les juge inappropriés.`,
            }, interaction.channel)

            await client.embed({
                title: `7. Raid de serveur`,
                desc: `Les raids ou les mentions de raids ne sont pas autorisés.`,
            }, interaction.channel)

            await client.embed({
                title: `8. Menaces directes et indirectes`,
                desc: `Les menaces envers d'autres utilisateurs de DDoS, Death, DoX, abus et autres menaces malveillantes sont absolument interdites et interdites.`,
            }, interaction.channel)

            await client.embed({
                title: `9. Suivez les directives de la communauté Discord`,
                desc: `Vous pouvez les trouver ici : https://discordapp.com/guidelines`,
            }, interaction.channel)

            await client.embed({
                title: `10. Ne rejoignez pas les canaux de discussion vocale sans les autorisations des personnes déjà présentes`,
                desc: `Si vous voyez qu'ils ont une place libre, vous pouvez les rejoindre et leur demander s'ils ont une place libre, mais partez si votre présence n'est pas souhaitée par celui qui était là en premier.`,
            }, interaction.channel)
        })
    }

    if (message == "applications") {
        client.simpleEmbed({
            image: `https://i.imgur.com/kLb13Tr.gif`
        }, interaction.channel).then(() => {
            client.embed({
                title: `💼・Applications`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `_____ \n\nQuoi de plus amusant que de travailler sur le meilleur bot/serveur ? Nous avons régulièrement des places pour de nouveaux postes auxquels vous pouvez postuler \n\nMais... à quoi pouvez-vous vous attendre ?`,
                fields: [
                    {
                        name: `👥┆Une équipe très sympa`,
                        value: `Dans l'équipe Bot, il y a toujours une atmosphère agréable et tout le monde est traité de la même manière !`,
                    },
                    {
                        name: `🥳┆Accès au programme bêta`,
                        value: `Accédez à des fonctionnalités Bot inédites avec votre propre serveur ! Vous êtes un vrai testeur de Bot !`,
                    },
                    {
                        name: `📛┆Un joli grade et insigne`,
                        value: `Vous obtiendrez un bon classement sur le serveur et un badge d'équipe dans notre commande userinfo. Tout le monde peut voir que vous contribuez à l'équipe`,
                    },
                    {
                        name: `📖┆Apprendre et grandir`,
                        value: `Nous comprenons que vous ne comprenez pas toujours tout tout de suite ! Chez Bot, nous vous donnons la possibilité d'apprendre de nouvelles choses et de vous améliorer au poste. Vous pouvez également évoluer dans l'équipe de direction à l'avenir!`,
                    },
                    {
                        name: `📘┆Qu'est-ce que tout signifie?`,
                        value: `**Modérateur** \nVous vous occupez du serveur pour que tout soit et reste amusant pour tout le monde ! Discutez avec nous et gardez la vue d'ensemble \n\n**Marketing** \nNous voulons également nous développer et nous le faisons avec une excellente équipe marketing ! Vous savez mieux que personne comment faire grandir un serveur \n\n**Organisation** \nVous assurerez une ambiance encore plus agréable dans le serveur ! Avec une équipe, vous travaillez sur de nouveaux événements amusants pour rendre le serveur encore plus amusant !`,
                    },
                    {
                        name: `📃┆Appliquer?`,
                        value: `Créez un ticket pour recevoir votre candidature !`,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "boosterperks") {
        client.simpleEmbed({
            image: `https://i.imgur.com/kLb13Tr.gif`
        }, interaction.channel).then(() => {
            client.embed({
                title: `💎・Booster Perks`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `_____ \n\nPlus d'options dans le serveur ? Devenez un véritable Bot Booster et obtenez de beaux avantages pour une belle expérience. Mais qu'est-ce que vous obtenez réellement?`,
                fields: [
                    {
                        name: `😛┆Utiliser des autocollants externes`,
                        value: `Utilisez des autocollants d'autres serveurs sur notre serveur`,
                    },
                    {
                        name: `🔊┆Envoyer des messages TTS`,
                        value: `Envoyer des messages qui ont un son attaché`,
                    },
                    {
                        name: `🤔┆Accès au salon caché`,
                        value: `Obtenir l'accès à un salon privé et discuter avec d'autres boosters!`,
                    },
                    {
                        name: `📛┆Changer votre pseudo`,
                        value: `Changer votre nom sur le serveur. C'est ainsi que vous vous démarquez dans le serveur`,
                    },
                    {
                        name: `💭┆Créer des fils de discussion publics/privés`,
                        value: `Créer un fil de discussion dans nos canaux de texte`,
                    },
                    {
                        name: `🎉┆Donner des cadeaux privés`,
                        value: `Obtenir l'accès à des cadeaux exclusifs et amusants`,
                    },
                    {
                        name: `📂┆Envoyer des fichiers dans n'importe quel canal`,
                        value: `Envoyer des fichiers dans tous les canaux où vous pouvez discuter`,
                    },
                    {
                        name: `📊┆Accès à un canal de promotion spécial`,
                        value: `Avoir la possibilité de promouvoir votre propre serveur dans un canal spécial`,
                    },
                    {
                        name: `😜┆Rôle personnalisé de votre choix`,
                        value: `Créer votre propre rôle que vous pouvez définir vous-même`,
                    },
                    {
                        name: `💎┆Obtenir le rôle de booster + badge`,
                        value: `Vous démarquer avec un joli rôle de booster et un badge de booster!`,
                    },
                    {
                        name: `💻┆Accès aux nouvelles mises à jour bêta du bot`,
                        value: `Nous donnerons à votre serveur l'accès aux mises à jour qui ne sont pas encore disponibles! N'est-ce pas sympa?`,
                    },

                ]
            }, interaction.channel)
        })
    }

    if (message == "links") {
        client.simpleEmbed({
            image: `https://i.imgur.com/kLb13Tr.gif`
        }, interaction.channel).then(() => {
            client.embed({
                title: `🔗・Links`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `_____ \n\nVoir tous les liens de Bot Network !`,
                fields: [
                    {
                        name: `▬▬│Servers│▬▬`,
                        value: ``,
                    }
                ]
            }, interaction.channel)
        })
    }

    if (message == "rewards") {
        client.embed({
            title: `😜・Role Rewards`,
            thumbnail: client.user.avatarURL({ size: 1024 }),
            desc: `_____ \n\nVoulez-vous des extras sur le serveur ? Ou voulez-vous vous démarquer davantage sur le serveur ? Regardez ci-dessous pour les récompenses`,
            fields: [
                {
                    name: `🏆┆Levels`,
                    value: `- Level 5   | <@&833307296699908097>\n- Level 10  | <@&833307450437664838>\n- Level 15  | <@&833307452279226379>\n- Level 30 | <@&915290300757458964>\n- Level 40 | <@&915290324480430080>`,
                },
                {
                    name: `🥳┆Special`,
                    value: `- 1 server vote | <@&833959913742794772>\n- 1 boost | <@&744208324022501447>\n- 1 donate | <@&849554599371210793>`,
                },
                {
                    name: `💰┆Economy`,
                    value: `- $10.000 | <@&890720270086733854>\n- $15.000 | <@&833936202725720084>\n- $20.000 | <@&833936185167839232> \n- $25.000 | <@&928236333309255711> \n- $30.000 | <@&928235747100733450>`,
                }
            ]
        }, interaction.channel)
    }

    if (message == "ourbots") {
        client.simpleEmbed({
            image: `https://i.imgur.com/kLb13Tr.gif`
        }, interaction.channel).then(() => {
            client.embed({
                title: `🤖・Our bots`,
                thumbnail: client.user.avatarURL({ size: 1024 }),
                desc: `_____ \n\nEn dehors d'une communauté, nous maintenons également 2 bots publics. Ces bots sont tous faits pour améliorer votre serveur !`,
                fields: [
                    {
                        name: `📘┆Qu'est-ce que Bot?`,
                        value: `Bot est un bot avec lequel vous pouvez gérer l'ensemble de votre serveur! Avec pas moins de 400+ commandes, nous avons un grand bot avec de nombreuses options pour améliorer votre serveur! Vous savez ce qui est encore plus beau? Tout cela est **GRATUIT** à utiliser!`,
                    },
                    {
                        name: `🎶┆Qu'est-ce que Bot 2?`,
                        value: `Bot 2 a été créé pour la musique supplémentaire. Ainsi, vous ne vous gênez jamais les uns les autres lorsqu'une personne écoute déjà de la musique. De plus, ce bot contient un soundboard et un système de radio`,
                    },
                    {
                        name: `📨┆Comment inviter les bots?`,
                        value: `Vous pouvez inviter les bots en tapant \`/invite\` ou en cliquant sur les liens ci-dessous \n\n**Bot** - [Inviter ici](${client.config.discord.botInvite})`,
                    },
                    {
                        name: `🎫┆Comment obtenir de l'aide en cas de besoin?`,
                        value: `Vous pouvez créer un ticket dans <#820308164322656327>! Nous sommes heureux de vous aider avec vos questions ici et offrons un support dans votre serveur!`,
                    },
                ]
            }, interaction.channel)
        })
    }
}

