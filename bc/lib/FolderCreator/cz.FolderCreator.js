const fs = require('fs');

const FolderCreator = (path) => {
    if (!fs.existsSync) {
        fs.mkdirSync(path, {recursive: true});
    } else if (fs.existsSync(path)) {
        throw "This Folder was always created"
    }
}

module.exports = {
    FolderCreator
}