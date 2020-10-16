const axios = require("axios");
const qs = require("qs");
class OAuth{
    constructor(data) {
        this.clientID = data.clientID;
        this.clientSecret = data.clientSecret;
        this.scope = data.scope;
        this.callback = data.callback;

    }
    getUrl() {
        console.log(this.scope.join(' '))
        return `https://discord.com/api/oauth2/authorize?client_id=${this.clientID}&redirect_uri=${this.callback}&response_type=code&scope=${this.scope.join(' ')}`
    }
    async getTokens(code) {
        let data = {
            "client_id": this.clientID,
            "client_secret": this.clientSecret,
            "grant_type": 'authorization_code',
            "code": code,
            "redirect_uri": this.callback,
            "scope": this.scope.join(' ')
        }
        let d = await axios({
            method: 'post',
            url: 'https://discordapp.com/api/oauth2/token',
            data: qs.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        return d.data;
    }
}

module.exports = {
    OAuth: OAuth,
    User: require("./User")
};