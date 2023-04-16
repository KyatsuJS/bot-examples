const { KyaClient } = require("kyatsujs");
const { token } = require("./token.json");

const bot = KyaClient.init(token);

bot.Events
    .bindEvent("interactionCreate");

bot.Commands
    .add("ping", (command, interaction) => {
        interaction.reply("Pong!");
    })
    .load();

void bot.login();