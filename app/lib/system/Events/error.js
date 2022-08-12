const fs = require('fs');
const Files = fs.readdirSync('./app/lib/')
module.exports = {
	name: 'error',
	once: true,
	execute(client) {
		if (client.error) {
			fs.writeFileSync('./app/lib/logs/error.log', `${client.error()}`)
        }
		
	},
};