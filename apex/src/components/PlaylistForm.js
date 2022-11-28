import React, { Component } from 'react'

class PlaylistForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
          playlistName: ''}
    }
    handleChange = (event) => {
      this.setState({
        playlistName: event.target.value
      })
    }

 
    handleSubmit = (event) => {
      event.preventDefault()
      fetch('http://localhost:3001/apex', {
        method: 'POST',
        body: JSON.stringify({playlistName: this.state.playlistName}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then (res => res.json())
        .then (resJson => {
          console.log('PlaylistForm - resJson', resJson)
          this.props.handleAddPlaylist(resJson)
          this.setState({
            playlistName: ''})
      }).catch (error => console.error({'Error': error}))
    }
  render () {
    return (
      <>
        <h1>Create A Playlist</h1>
        <hr></hr>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="playlistName"></label>
            <input type="text" 
                   id="playlistName" 
                   name="playlistName" 
                   onChange={this.handleChange} 
                   value={this.state.playlistName} 
                   placeholder="Name your playlist"/>
            <input type="submit" value="Submit"/>
          </form>
      </>
    )
  }
}

export default PlaylistForm