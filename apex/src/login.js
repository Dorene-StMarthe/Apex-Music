import React from 'react' 
import './Login.css'
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=5815ab60510246869757e2c94403ae45&response_type=code&redirect_uri=http://localhost:3000&scope=ugc-image-upload%20user-read-playback-state%20app-remote-control%20user-modify-playback-state%20playlist-read-private%20user-follow-modify%20playlist-read-collaborative%20user-follow-read%20user-read-currently-playing%20user-read-playback-position%20user-library-modify%20playlist-modify-private%20playlist-modify-public%20user-read-email%20user-top-read%20streaming%20user-read-recently-played%20user-read-private%20user-library-read"


export default function Login() {
    return (
        <>
            
                <p className="appName">APEX MUSIC</p>
                <p className="appSlogan">MUSIC THAT MOVES YOU</p>
            
            <Container className="d-flex justify-content-center align-items-center">
                    <a className="btn btn-outline-info btn-lg" href= {AUTH_URL}>
                        SIGN IN WITH SPOTIFY
                    </a>
            </Container>
        </>
    )
}
