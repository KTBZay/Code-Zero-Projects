const { createVirtualClient } = require("../../../vClientdata/client.main.m");
const { client_config } = require("../../../mods_configs/vClient/VClient.cfg");

if(client_config.isEnabled === true){
    const BL = require('../../../betterloader.m')
    console.log(`[System]: Creating your bot....`)
    setTimeout(() => {
        createVirtualClient()
    }, client_config.timeout);
}else{

}