const Schema = require("../../database/models/birthday");
const Devs = require("../../database/models/developers");
const birthdayChannel = require("../../database/models/birthdaychannels");

module.exports = (client) => {
    const checkBirthdays = async () => {
        const now = new Date();
        const getLastDate = await Devs.findOne({ Action: "Birthday" }).exec();

        let month = now.getMonth() + 1;
        let day = now.getDate();

        let dateNow = `${day} - ${month}`;

        if (getLastDate) {
            const lastDate = getLastDate.Date;

            if (lastDate == dateNow) return;

            getLastDate.Date = dateNow;
            getLastDate.save();
        }
        else {
            new Devs({
                Action: "Birthday",
                Date: dateNow,
            }).save();
        }

        const months = {
            1: "Janvier",
            2: "Février",
            3: "Mars",
            4: "Avril",
            5: "Mai",
            6: "Join",
            7: "Juillet",
            8: "Aout",
            9: "Septembre",
            10: "Octobre",
            11: "Novembre",
            12: "Decembre"
        };

        const convertedDay = suffixes(day);
        const convertedMonth = months[month];
        const birthdayString = `${convertedDay} of ${convertedMonth}`;

        const results = await Schema.find({ Birthday: birthdayString })

        if (results) {
            for (const result of results) {
                const { Guild, User } = result;

                const finalGuild = client.guilds.cache.get(Guild)
                if (finalGuild) {
                    birthdayChannel.findOne({ Guild: finalGuild.id }, async (err, data) => {
                        if (data) {
                            const channel = finalGuild.channels.cache.get(data.Channel);

                            client.embed({
                                title: `${client.emotes.normal.birthday}・Birthday`,
                                desc: `Happy birthday to <@!${User}>!`
                            }, channel)
                        }
                    })
                }
            }
        }

        setTimeout(checkBirthdays, 1000 * 10)
    }

    checkBirthdays()
}

function suffixes(number) {
    const converted = number.toString();

    const lastChar = converted.charAt(converted.length - 1);

    return lastChar == "1" ?
        `${converted}st` : lastChar == "2" ?
            `${converted}nd` : lastChar == '3'
                ? `${converted}rd` : `${converted}th`
}

