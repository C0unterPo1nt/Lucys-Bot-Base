const token = require('./secrets.json').token;
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const dispatch = require('./src/command-dispatch.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  dispatch.interactionHandler(interaction);
});

client.login(token);
