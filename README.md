# dcord-oauth
A NPM Package for handling discord OAuth2 Requests!

# Documentation
###
```js
  const DiscordOAuth = require("../dcord-oauth/lib");
  const OAuth = new DiscordOAuth.OAuth({
      clientID: "CLIENT_ID",
      clientSecret: "CLIENT_SECRET",
      scope: ["identify"],
      callback: "http://localhost/callback"
  })
```
* Getting the OAuth code
* In this example i'll be using an express server, but you can use any.
```js 
  router.get('/login', (req, res) => {
    res.redirect(OAuth.getUrl())
  });
```
* Getting the user data
```js
router.get('/callback', async (req, res) => {
    let code = req.query.code
    if (code) {
        let codes = await OAuth.getTokens(code)
        let User = new DiscordOAuth.User(codes.access_token)
        let user = await User.getUser();
        let guilds = await User.getGuilds();
        res.json({guilds: guilds, user: user})
    }else{
        res.sendStatus(400)
    }
});
```
* That's pretty much it for the basics. Feel free to make PR's to make this package better!
