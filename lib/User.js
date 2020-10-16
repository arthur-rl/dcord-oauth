const axios = require("axios");
class User{
    constructor(access_token) {
        this.access_token = access_token;
    }
    async getGuilds() {
        let d = await axios({
            method: 'get',
            url: 'https://discordapp.com/api/users/@me/guilds',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${this.access_token}`
            }
        })
        return d.data;
    }
    async getUser() {
        let d = await axios({
            method: 'get',
            url: 'https://discordapp.com/api/users/@me',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${this.access_token}`
            }
        })
        return d.data;
    }
    async getConnections() {
        let d = await axios({
            method: 'get',
            url: 'https://discordapp.com/api/users/@me/connections',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${this.access_token}`
            }
        })
        return d.data;
    }
}

module.exports = User;