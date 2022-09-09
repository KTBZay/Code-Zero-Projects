const { system_files, user_files, mod_files } = require("../compiledData.d");
const { ReaderCfg } = require("./mods_configs/datareader.cfg");
function ReadData () {
    if(ReaderCfg.isEnabled === true){
        console.log(system_files),
        console.log("\n"),
        console.log(user_files),
        console.log("\n"),
        console.log(mod_files),
        console.log("\n"),
        console.log("\n")
    }
}
ReadData()