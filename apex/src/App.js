import React, {Component}from 'react'
import './App.css'


class App extends Component {

   

  constructor (props) {
    super(props)
    this.state = {
      music:[]
    }
  }
  render() {
    return (
      <div className='App'>
        <h1>Browse Music</h1>
        <h3>Create Playlist</h3>
      </div>
    );
  }
}
export default App;