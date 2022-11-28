import React, { Component } from 'react'
import { Card } from "react-bootstrap"
import Dashboard from "./Search"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import SpotifyPlayer from "react-spotify-web-playback"


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  //baseURL = 'your heroku bakend url here'
}

console.log('current base URL:', baseURL)



class UserPlaylist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: []
    }
  }
  render () {
    return (
 
   <>
       <Card border="success" style={{ width: '35rem' }}>
        <Card.Header style={{ backgroundColor: '#070D29'}}>Create A Playlist</Card.Header>
        <Card.Body style={{ backgroundColor: '#070D29' }}>
          <Card.Title>Create A Playlist</Card.Title>
          <Card.Text>
                <showSaveIcon/>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </>
  );
}}

export default UserPlaylist 