const { Client } = require("discord.js-selfbot-v13");
const config = require("./config.json");
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
  checkUpdate: true,
});

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  commands();
});

async function getRandomChannel(guildId, channels) {
  const guild = await client.guilds.fetch(guildId);
  const availableChannels = channels.filter((channelId) =>
    guild.channels.cache.has(channelId)
  );
  if (availableChannels.length === 0) return null;
  return availableChannels[
    Math.floor(Math.random() * availableChannels.length)
  ];
}

async function commands() {
  const channels = [
    "1039216115475292262",
    "1134439451922288661",
    "1134439469819371572",
  ];
  const guildId = "1039216114950996109";
  const channelvocalid = "1039216115475292263";
  const guild = await client.guilds.fetch(guildId)
  const channelvocal = guild.channels.cache.get(channelvocalid);
  joinVoiceChannel({
    channelId: channelvocalid,
    guildId: guildId,
    adapterCreator: guild.voiceAdapterCreator
})
//   const connection = await channelvocal.join();

  setInterval(async () => {
    const currentDate = new Date();
    const randomChannelId = await getRandomChannel(guildId, channels);
    if (!randomChannelId) return;
    const channel = await client.channels.fetch(randomChannelId);
    channel.send("?work");
    channel.send("?dep all");
    console.log(`🪐・Work - ${currentDate.toLocaleString()}`);
  }, 3600000 + Math.random() * 300000);

  setInterval(async () => {
    const currentDate = new Date();
    const randomChannelId = await getRandomChannel(guildId, channels);
    if (!randomChannelId) return; // No available channels
    const channel = await client.channels.fetch(randomChannelId);
    channel.send("?daily");
    channel.send("?dep all");
    console.log(`🌊・Daily - ${currentDate.toLocaleString()}`);
  }, 43200000 + Math.random() * 300000);

  setInterval(async () => {
    const currentDate = new Date();
    const randomChannelId = await getRandomChannel(guildId, channels);
    if (!randomChannelId) return;
    const channel = await client.channels.fetch(randomChannelId);
    channel.send("?dep all")
    console.log(`🌕・Dep all - ${currentDate.toLocaleString()}`);
  }, 900000);
}

client.login(config.token);
