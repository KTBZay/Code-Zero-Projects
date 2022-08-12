const configuration = {
    Discord_Guild_ID: "1--------------",
    Discord_Bot_ID: "1007350569851179008", // this is VERY REQUIRED
    Discord_Bot_Token: "0zTdYurIDd4qRxBqMm8j704lYfn3QoHYXk",// this is VERY REQUIRED
    UserHosted: false, // Outputs bot files to the app path.
    SystemHosted: false // Creates bot using system code. HIGHLY RECOMMEND AND UP TO DATE WITH DISCORD.JS
}

const UserData = {
    Discord_Username: "D-----------",// this is VERY REQUIRED
    Discord_Support_Link: "https://discord.gg/-----",// this is VERY REQUIRED
    Public_Contact_Email: "",
    User_Project_Data: {
        path: './app/projects/Bot',
        isSDK_used: false,
        IsWorkSpace: true,
        Apps: {
            App1: {
                name: 'Bot',
                type: 'bot',
                author: ''
            }
        }
    } 
}

module.exports = {
    configuration,
    UserData
}