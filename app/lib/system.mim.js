const { czerror } = require('./Resource/system.error');

try {
    // Main Files that will be checked
    const system = require('../system');
    const FolderCreator = require('./FolderCreator/cz.FolderCreator');
    const FileCreator = require('./FileCreator/cz.FileCreator');
    const Runtime = require('./system/Runtime');
    const Terms = require('./system/Terms');
    const Terms_ProjectSpace = require('./system/Terms.ProjectSpace');

    // Command Files that will be checked
    const Ping = require('./system/Commands/ping');
    const SupportLink = require('./system/Commands/SupportLink');
    const Version = require('./system/Commands/version');

    // Events Files that will be checked
    const Ready = require('./system/Events/ready');
    const InteractionCreate = require('./system/Events/interactionCreate');
    const Error = require('./system/Events/error');

} catch (e) {
    czerror('Reinstall Botcreator, some files are missing or undetected')
}