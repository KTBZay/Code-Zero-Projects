### Discord Bot Creator Release Report

# 1.0.2.4 Release
## Section 1: Bug fixes
	1. Self Hosting/ User Hosting
		- We have removed this from our framework
	2. Fixed errors with commands not Displaying
		- We removed all commands from original bot files and added command and event handlers.
		- We Added a logs folder to be created on started up of process,

## Section 2: Updates
	1. We added a Workspace Framework
		- There is code already in side the generated files, all you have to do is run the run-bot file!.
	2. We updated the Systemhosted
	    - We added slash commands and custom event/command handling.

## Section 3: Known Errors
	Throughout testing the systemhosted updates worked fantastic! 
	We are running into an issue on the generated files. it will go thru with out the bot starting.

	Quick Fix: Add a ready.js to events folder
	add code like this:
	module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	}
	};

## Section 4: What we didnt add to the generated files
	We didnt add any of our commands/events because we want the user to take a part in building to!

		