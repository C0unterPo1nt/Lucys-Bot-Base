class Dispatch {
    constructor() {
    }

    interactionHandler(interaction) {
        interaction.reply("pong");
    }
}

let dispatch = new Dispatch();

module.exports = dispatch;