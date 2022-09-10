const { SlashCommandBuilder } = require('discord.js');
const { Bot } = require('../../cfgs/bot.cfg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Discord')
		.setDescription('Replies with the owners discord!'),
	async execute(interaction) {
		await interaction.reply('The creators discord is: ' + Bot.discordlink);
	},
};