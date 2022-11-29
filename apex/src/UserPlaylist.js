import React, { Component } from 'react'
import { Card } from "react-bootstrap"
import Dashboard from "./Search"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import SpotifyPlayer from "react-spotify-web-playback"
import PlaylistForm from "./components/PlaylistForm"
import './Login.css'

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

 handleAddPlaylist = (playlist) => {
  const copyPlaylists = [...this.state.playlists]
  copyPlaylists.unshift(playlist)
  this.setState({
    playlists: copyPlaylists})
}
handleToggleFinished= (playlist) => {
  fetch(baseURL + '/apex/' + playlist._id, {
    method: 'PUT',
    body: JSON.stringify({finished: !playlist.finished}),
    headers: {
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
  .then(resJson => {
    console.log('resJson', resJson)
       const copyPlaylists = [...this.state.playlists]
        const findIndex = this.state.playlists.findIndex(playlist => playlist._id === resJson._id)
        copyPlaylists[findIndex].finished = resJson.finished
        this.setState({playlists: copyPlaylists})
  })
}

handleDeletePlaylist = (id) => {
  fetch(baseURL + '/apex/' + id, {
    method: 'DELETE'
  }).then( response => {
    const copyPlaylists = [...this.state.playlists]
    const findIndex = this.state.playlists.findIndex(playlist => playlist._id === id)
    copyPlaylists.splice(findIndex, 1)
    this.setState({playlists: copyPlaylists})
  })
}

  render () {
  
    return (
      <div className='UserPlaylist'>
        <PlaylistForm handleAddPlaylist={this.handleAddPlaylist}/>
      <br></br>
      <br></br>
        <h1>YOUR REFLECTIONS</h1>
      <hr></hr>
        <table>
          <tbody>
            { this.state.playlists.map(playlist => {
              
              return (
                <tr key={playlist._id}>
                  <td
                    onDoubleClick={() => this.handleToggleFinished(playlist)}
                    className={playlist.finished ? 'finished' : null}>
                    {playlist.playlistName}</td>
                    <tr>{playlist.description}</tr>
                    <td onClick={()=>this.handleDeletePlaylist(playlist._id)}>
                      ✖️ 
                    </td>
                </tr>
                
              )
              
        })}
  </tbody>
</table>
      </div>
    )
    ;}
}

export default UserPlaylist 