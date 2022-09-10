module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`[System:Bot]: Ready! Logged in as ${client.user.tag}`);
	},
};