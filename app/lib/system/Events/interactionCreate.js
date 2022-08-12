const fs = require('fs');
module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		fs.writeFileSync('./app/lib/logs/interactionUpdate.log', `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`)
	},
};