const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/refresh', (req, res)=> {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
            redirectUri: 'http://localhost:3000',
            clientId: '5815ab60510246869757e2c94403ae45',
            clientSecret: '8fb1c261330c4d06a6720d4d85cb7ebb',
            refreshToken
        })
    spotifyApi
    .refreshAccessToken()
    .then(data => {
            res.json({
                    accessToken: data.body.accessToken,
                    expiresIn: data.body.expiresIn,
                })
            })
              .catch(() => {
            res.sendStatus(400)
            })
        })
app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '5815ab60510246869757e2c94403ae45',
        clientSecret: '8fb1c261330c4d06a6720d4d85cb7ebb'
    })


spotifyApi.authorizationCodeGrant(code)
.then(data => {
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
    })
})
.catch(err =>{
    res.sendStatus(400)
    })
})
app.listen(3001)