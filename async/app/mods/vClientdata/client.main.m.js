const { bots } = require("../../userConfig/botconfig")

const createVirtualClient = () =>{
    const botData = {
        name: bots.A.name,
        isActive: bots.A.setActiveBot,
        token: bots.A.token
    };

    const {Client}= require('discord.js');
    const client = new Client({
        intents:[
            "GuildMessages",
            "Guilds"
        ]
    })
    client.on("ready", ()=>{
        console.log(`[script:vClient]: we have started ${bots.A.name}`);
    })
    client.login(bots.A.token)
}
module.exports = {
    createVirtualClient
}