const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, app_id } = require('./secrets.json');
const commands = require('./commands.json');

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(app_id),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();