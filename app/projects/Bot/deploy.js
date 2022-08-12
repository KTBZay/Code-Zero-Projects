
        const fs = require('node:fs');

        const path = require('node:path');

        const { Client, Collection } = require('discord.js');

        const { REST } = require('@discordjs/rest')

        const { Routes } = require('discord-api-types/v9');        const commands = [];
        const commandsPath = path.join(__dirname, './commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {

         const filePath = path.join(commandsPath, file);

         const command = require(filePath);

         console.log('loaded cmds: ' + file)

         commands.push(command.data.toJSON());

    }


         const rest = new REST({ version: '10' }).setToken("MTAwNzM1MDU2OTg1MTE3OTAwOA.GzQavk.g4Q-0zTdYurIDd4qRxBqMm8j704lYfn3QoHYXk");


         rest.put(Routes.applicationCommands("1007350569851179008"), { body: commands })

            .then(() => console.log('Successfully registered application commands.'))

            .catch(console.error);

