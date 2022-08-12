const { SlashCommandBuilder } = require('@discordjs/builders')
const { configuration, UserData } = require('../../../../config');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("supportlink")
		.setDescription('Replies with developers details'),
	async execute(interaction) {
		await interaction.reply(`Contact us at ${UserData.Discord_Support_Link} or Email us at ${UserData.Public_Contact_Email}`);
	},
};
