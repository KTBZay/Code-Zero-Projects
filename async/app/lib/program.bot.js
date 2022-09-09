const { cfg } = require('../system/system_data/server.cfg');
if(cfg.async === false){
// Mods
const BL = require('../mods/betterloader.m')
const DataReader = require('../mods/datareader.m');
const { startService, startSystem } = require("../system/sys.min");
startService("BetterLoader", startSystem)
}else{
    const __Checker = require('../mods/mods_modules/virtualclient/checker/__checker')
}