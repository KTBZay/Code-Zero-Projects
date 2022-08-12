const { FileCreator } = require('../FileCreator/cz.FileCreator');

const RegisterCmds= () => {
    const fs = require('node:fs');
    const path = require('node:path');
    const { Client, Collection, GatewayIntentBits } = require('discord.js');
    const { configuration, UserData } = require("../../../config");
    const { REST } = require('@discordjs/rest')
    const commands = [];
    const commandsPath = path.join(__dirname, './Commands/');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    const { Routes } = require('discord-api-types/v9');
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
const SystemHosted = () => {
    RegisterCmds();
    const fs = require('node:fs');
    const path = require('node:path');
    const { Client, Collection, Intents } = require('discord.js');
    const { configuration, UserData } = require("../../../config");
    if (configuration.SystemHosted === true) {
        const config = { token: configuration.Discord_Bot_Token, prefix: configuration.Discord_Bot_Prefix };
        const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
        client.commands = new Collection();
        const commandsPath = path.join(__dirname, './Commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            console.log("Loaded Commands: \n" + commandFiles + " \n" )
            client.commands.set(command.data.name, command);
        }
        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });
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

module.exports = {
    SystemHosted
}