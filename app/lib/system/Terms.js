const { configuration, UserData } = require("../../../config");

const RegisterCmds = () => {
    if (configuration.SystemHosted === false) {
        console.log('CZ: Its recommended that you turn on SystemHosted!')
    } else {
        console.log(`
 ######################################################
 #  Please  Note that this program is under devlopment#
 # ******If any issues found report to the discord****#
 # ******This program is 100% safe and was scanned****#
 # *************Current Version: 1.0.3****************#
 ######################################################
`)
        const fs = require('node:fs');
        if (!fs.existsSync(`./app/lib/system/runtime/${UserData.User_Project_Data.Apps.App1.name}/`)) {
            fs.mkdirSync(`./app/lib/system/runtime/${UserData.User_Project_Data.Apps.App1.name}/`, { recursive: true });
        }
        setTimeout(() => {
            fs.writeFileSync(`./app/lib/system/runtime/${UserData.User_Project_Data.Apps.App1.name}/app.main.runtime`, `USER.DISCORD.CLIENTID = ${configuration.Discord_Bot_ID}\n USER.DISCORD.CLIENTTOKEN = ${configuration.Discord_Bot_Token}\n USER.DISCORD.GUILDID = ${configuration.Discord_Guild_ID}\n USER.DATA.LINK =  ${UserData.Discord_Support_Link}\n USER.DATA.USERNAME =  ${UserData.Discord_Username}\n ${UserData.Public_Contact_Email}\n ${UserData.User_Project_Data.path}`)
        }, 2000)
        const path = require('node:path');
        const { Client, Collection } = require('discord.js');
        const { REST } = require('@discordjs/rest')
        const { Routes } = require('discord-api-types/v9');
        const commands = [];
        const commandsPath = path.join(__dirname, './Commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {

            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            commands.push(command.data.toJSON());
        }

        const rest = new REST({ version: '10' }).setToken(configuration.Discord_Bot_Token);

        rest.put(Routes.applicationCommands(configuration.Discord_Bot_ID), { body: commands })
            .then(() => console.log('Successfully registered application commands.'))
            .catch(console.error);
    }
}
const SystemHosted = () => {
    RegisterCmds();
    const fs = require('node:fs');
    const path = require('node:path');
    const { Client, Collection, Intents } = require('discord.js');
    if (configuration.SystemHosted === true) {
        const config = { token: configuration.Discord_Bot_Token, prefix: configuration.Discord_Bot_Prefix };
        const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
        client.commands = new Collection();
        const commandsPath = path.join(__dirname, './Commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            console.log("Loaded Commands: \n" + commandFiles + " \n")
            client.commands.set(command.data.name, command);
        }
        const eventsPath = path.join(__dirname, './Events');
        const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const filePath = path.join(eventsPath, file);
            const event = require(filePath);
            console.log('Loaded Events: ' + file)
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
            client.on('interactionCreate', async interaction => {

                const command = client.commands.get(interaction.commandName);

                if (!command) return;

                try {
                    await command.execute(interaction);
                } catch (error) {
                    console.error(error);
                    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
                }
            });


            client.login(config.token);
        }
    }

}

module.exports = {
    SystemHosted
}