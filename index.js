const { token, intentsBit } = require('./config.json');
const { Client, IntentsBitField } = require('discord.js');
const intents = new IntentsBitField(intentsBit);
const client = new Client({ intents: [intents] });
const dispatch = require('./src/command-dispatch.js')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  dispatch.interactionHandler(interaction);
});

client.login(token);
