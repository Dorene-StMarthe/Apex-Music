const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '5815ab60510246869757e2c94403ae45',
        clientSecret: '8fb1c261330c4d06a6720d4d85cb7ebb'
    })
})

spotifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
    })
}).catch(()=>{
    res.sendStatus(400)
})