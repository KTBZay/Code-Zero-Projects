const Sys_Logger = () => {
    const fs = require('fs');
    const SYSTEM_DIRS = fs.readdirSync('./app/lib/')
    setTimeout(() => {
        fs.writeFileSync('./app/lib/logs/system.logs', `Loaded folders: \n ` + SYSTEM_DIRS + "\n")
    }, 3000)
}

module.exports = {
    Sys_Logger
}