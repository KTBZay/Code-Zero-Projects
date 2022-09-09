module.exports = {
    system_files: [
        {
            name: "sys.min.js", 
            version: "1.0.0", 
            path: require('./system/sys.min')
        },
        {
            name: "server.cfg.js",
            version: "1.0x",
            path: require('./system/system_data/server.cfg')
        },
        {
            name: "program.bot.js",
            version: "1.0x",
            path: require('./lib/program.bot')
        }
    ],
    user_files: [
        {
            name: "botconfig.js",
            version: "1.0x",
            path: require('./userConfig/botconfig')
        }
    ]
}