const fs = require('fs');
const Files = fs.readdirSync('./app/lib/')
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		if (!fs.existsSync('./app/lib/logs/')) {
			fs.mkdirSync('./app/lib/logs/', {recursive: true})
        }
		fs.writeFileSync('./app/lib/logs/startup.log', `CODEZEROSTARTUP: {\n client_commands: ${client.commands} \n client_Token: ${client.token} \n client_Files: ${Files}\n}`)
	},
};