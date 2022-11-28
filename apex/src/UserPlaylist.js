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
  <h1>Your Playlists</h1>
  <hr></hr>
  <table>
  <tbody>
    { this.state.playlists.map(playlist => {
        return (
          <tr key={playlist._id} >
            <td> {playlist.playlistName }</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
    
      </>
    );}
}

export default UserPlaylist 