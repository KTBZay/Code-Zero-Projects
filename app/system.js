const { configuration, UserData } = require("../config");
const fs = require('fs');
const { FolderCreator } = require("./lib/FolderCreator/cz.FolderCreator");
const { FileCreator } = require("./lib/FileCreator/cz.FileCreator");
const { User } = require("discord.js");
const { SystemHosted } = require("./lib/system/Terms");
const { ProjectSpace } = require("./lib/system/Terms.ProjectSpace");
console.log('CZ: Getting started');

SystemHosted()
ProjectSpace()