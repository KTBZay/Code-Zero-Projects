const configuration = {
    Discord_Bot_ID: "",
    Discord_Bot_Token: "",
    Discord_Bot_Prefix: ""
}

const UserData = {
    Discord_Username: "",
    Discord_Support_Link: "",
    Public_Contact_Email: "",
    User_Project_Data: {
        path: './app/projects/App1',
        isSDK_used: false,
        Apps: {
            App1: {
                name: 'test',
                type: 'bot',
                author: 'me'
            }
        }
    } 
}

module.exports = {
    configuration,
    UserData
}