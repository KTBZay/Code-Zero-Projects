const { configuration, UserData } = require("../config");
const fs = require('fs');
if (!fs.existsSync('./configs/User/')) {
    fs.mkdirSync('./configs/User/')
};
if (!fs.existsSync('./configs/Bot/')) {
    fs.mkdirSync('./configs/Bot/')
};

fs.writeFileSync(`./configs/User/botconfig.bak.js`, ` const Bot = {Token: '${configuration.Discord_Bot_Token}', Prefix: '${configuration.Discord_Bot_Prefix}', ID: '${configuration.Discord_Bot_ID}'};`)
fs.writeFileSync(`./configs/Bot/botconfig.js`, `const Bot = {Token: '${configuration.Discord_Bot_Token}', Prefix: '${configuration.Discord_Bot_Prefix}', ID: '${configuration.Discord_Bot_ID}'); module.exports = {Bot}`)