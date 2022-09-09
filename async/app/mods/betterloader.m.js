const { bl_cfg } = require("./mods_configs/betterloader.cfg");
const { startProjectChecker, startUserChecker, startService, startSystem } = require("../system/sys.min");
const BetterLoaderScript = (message) => {
    console.log(`${message}`)
    if(bl_cfg.projectChecker === true){
        
    }else
    if(bl_cfg.userChecker === true){
        
    }else{

    }
}
BetterLoaderScript(bl_cfg.msgToBeSent)