const { configuration, UserData } = require("../config");
const fs = require('fs');
const { FolderCreator } = require("./lib/FolderCreator/cz.FolderCreator");
const { FileCreator } = require("./lib/FileCreator/cz.FileCreator");
const { User } = require("discord.js");

console.log('CZ: Getting started');

setTimeout(() => {
    console.log('CZ: Creating Project Folder')
    if (!fs.existsSync(UserData.User_Project_Data.path)) {
        fs.mkdirSync(UserData.User_Project_Data.path, {recursive: true})
    }
},1000);




setTimeout(() => {
    console.log('CZ: Creating Project Files')
    FileCreator(`${UserData.User_Project_Data.path}/discord_bot.js`,
        `const {Client} = require('discord.js') \n
             const discord_bot_config = require('./discord_bot.config.js')
             const config = { token: '${configuration.Discord_Bot_Token}'}\n 
             const client = new Client({ Intents: ["GUILD_MESSAGING", "GUILDS"] }) \n
             client.on('ready', () => {console.log('Logged in')});\n
             client.on('message', (msg) => { if(msg.content === "${configuration.Discord_Bot_Prefix}ping"){msg.reply('Pong')}});\n
             client.on('message', (msg) => { if(msg.content === "${configuration.Discord_Bot_Prefix}cVersion"){msg.reply('1.0.3')}});\n
             client.on('message', (msg) => { if(msg.content === "${configuration.Discord_Bot_Prefix}Support"){msg.reply('Get your questions answered ${UserData.Discord_Support_Link} or Email us at ${UserData.Public_Contact_Email}')}});\n
             client.login(config.token)`);
    FileCreator(`${UserData.User_Project_Data.path}/discord_bot.config.js`,
        `const czRunTimeService = require('../../lib/system/Runtime')\n
        czRunTimeService('${UserData.User_Project_Data.Apps.App1.name}', {name: '${UserData.User_Project_Data.Apps.App1.name}',type: '${UserData.User_Project_Data.Apps.App1.type}', author: '${UserData.User_Project_Data.Apps.App1.author}'});
        `);
    FileCreator(`./discord_bot.config.js.cmd`, `node ${UserData.User_Project_Data.path}/discord_bot.config.js \n pause`);
        setTimeout(() => {
              console.log('CZ: Creating Start cmd')
            FileCreator(`${UserData.User_Project_Data.path}/startBat.cmd`, `node discord_bot.js )
            console.log('CZ: Process finished please go to ' + UserData.User_Project_Data.path + " to start the bot, make sure you run discord_bot.config.js.cmd "`);
        }, 1000)
    }, 5000);

