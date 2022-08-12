const { SlashCommandBuilder } = require('@discordjs/builders')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('Bot Creator Version'),
	async execute(interaction) {
		await interaction.reply('Current Version Is: 1.0.2.3');
	},
};