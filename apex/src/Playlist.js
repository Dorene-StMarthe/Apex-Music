import React from "react"
import { Card } from "react-bootstrap"
import Dashboard from "./Search"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Playlist(){

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
}