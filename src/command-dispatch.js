const interactions = require('./interactions.js')

class Dispatch {
    constructor() {
    }

    interactionHandler(interaction) {
        let command = interactions.get(interaction.commandName);
        command(interaction);
    }

    messageHandler(message) {

    }
}

let dispatch = new Dispatch();

module.exports = dispatch;