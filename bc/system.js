const { configuration, UserData } = require("../config");
const fs = require('fs');
const { FolderCreator } = require("./lib/FolderCreator/cz.FolderCreator");
const { FileCreator } = require("./lib/FileCreator/cz.FileCreator");
const { config } = require("process");

    if (!fs.existsSync(UserData.User_Project_Data.path)) {
        fs.mkdirSync(UserData.User_Project_Data.path, { recursive: true });
}
fs.writeFileSync(`${UserData.User_Project_Data.path}/discord_bot.js`, `const {Client} = require('discord.js') \n const config = { token: '${configuration.Discord_Bot_Token}', prefix: '${configuration.Discord_Bot_Prefix}'}\n const client = new Client({ Intents: ["GUILD_MESSAGING", "GUILDS"] } \n client.on('ready', () => { console.log('Logged in') } ; \n client.login(config.token)`);


