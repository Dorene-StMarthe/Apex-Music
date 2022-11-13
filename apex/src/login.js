import React from 'react' 

import { Container} from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=5815ab60510246869757e2c94403ae45&response_type=code&redirect_uri=https://localhost:3000&scope=ugc-image-upload%20user-read-playback-state%20app-remote-control%20user-modify-playback-state%20playlist-read-private%20user-follow-modify%20playlist-read-collaborative%20user-follow-read%20user-read-currently-playing%20user-read-playback-position%20user-library-modify%20playlist-modify-private%20playlist-modify-public%20user-read-email%20user-top-read%20streaming%20user-read-recently-played%20user-read-private%20user-library-read"



export default function Login() {
    return (
        <Container className="d-flex justify-center align-items-center"
        style={{minHeight: "1000vh"}}>
            <a className="btn btn-success btn-lg" href= {AUTH_URL}>
                Sign in With Spotify
            </a>
        </Container>
    )
}