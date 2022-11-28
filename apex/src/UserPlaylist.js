import React, { Component } from 'react'
import { Card } from "react-bootstrap"
import Dashboard from "./Search"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import SpotifyPlayer from "react-spotify-web-playback"


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001'
} else {
  //baseURL = 'your heroku bakend url here'
}

console.log('current base URL:', baseURL)



class UserPlaylist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    }
  }

  componentDidMount(){
    this.getPlaylists()
  }


  getPlaylists = () => {
    fetch(baseURL + '/apex')
    .then((res) => {
      if (res.status === 200) {
       return res.json();
      } else {
       return [];
      }
     })
     .then((data) => {
      console.log(data);
      this.setState({ playlists: data.playlists });
    });
 }
  render () {
    return (
      <>
  <h1>Your Playlist</h1>
   
       <Card 
       border="success" 
       style={{ width: '35rem' }}>
        <Card.Header style={{ backgroundColor: '#070D29'}}>
        { this.state.playlists.map(playlists=> {
          return (
            <div>
            <h3 key={playlists._id}> {playlists.playlistName}</h3>
            </div>
          )
        })}
        </Card.Header>
        <Card.Body style={{ backgroundColor: '#070D29' }}>
        { this.state.playlists.map(playlists=> {
          return (
            <div>
            <h3 key={playlists._id}> {playlists.description}</h3>
            </div>
          )
        })}
          <Card.Title>Input a description</Card.Title>
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