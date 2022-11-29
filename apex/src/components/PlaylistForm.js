import React, { Component } from 'react'

class PlaylistForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
          playlistName: '',
          description: ''
        }
    }
    handleChange = (event) => {
      this.setState({
        playlistName: event.target.value
      })
    }
    handleModify = (event) => {
      this.setState({
        description: event.target.value
      })
    }
 
    handleSubmit = (event) => {
      event.preventDefault()
      fetch('http://localhost:3001/apex', {
        method: 'POST',
        body: JSON.stringify({playlistName: this.state.playlistName, description: this.state.description}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then (res => res.json())
        .then (resJson => {
          console.log('PlaylistForm - resJson', resJson)
          this.props.handleAddPlaylist(resJson)
          this.setState({
            playlistName: '',
            description:''
          })
      }).catch (error => console.error({'Error': error}))
    }
  render () {
    return (
      <>
        <h1>CREATE A REFLECTION</h1>
        <hr></hr>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="playlistName"></label>
            <input type="text" 
                   id="playlistName" 
                   name="playlistName" 
                   onChange={this.handleChange} 
                   value={this.state.playlistName} 
                   placeholder="What are you listening too?"/><br></br>
           
            <br></br>  
            
          <label htmlFor="description"></label>
            <textarea rows='4' cols='50' 
                   id="description" 
                   name="description" 
                   onChange={this.handleModify} 
                   value={this.state.description} 
                   placeholder="What are your thoughts?">  
                   
            </textarea>
            <br></br>
            <input type="submit" value="Submit" className="cursor-pointer"/>
            </form>
      </>
    )
  }
}

export default PlaylistForm