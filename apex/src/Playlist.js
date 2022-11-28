import React from "react"
import { Card } from "react-bootstrap"
export default function Playlist(){

    return (
        
   <>
      {[
        'Dark',
        'Dark'
      ].map((variant) => (
        <Card 
          border="success"
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Create Your Playlist</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Songs</Card.Title>
            <Card.Text>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>  
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
    </>
  );
}
