const { configuration, UserData } = require("../config");
const fs = require('fs');
const { FolderCreator } = require("./lib/FolderCreator/cz.FolderCreator");
const { FileCreator } = require("./lib/FileCreator/cz.FileCreator");
const { User } = require("discord.js");
const { UserHosted } = require('./lib/system/Terms.min');
const { SystemHosted } = require("./lib/system/Terms");


console.log('CZ: Getting started');

UserHosted()
SystemHosted()
