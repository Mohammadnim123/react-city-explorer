import React from 'react'
import { Card } from 'react-bootstrap'

export default function Movie(props) {
    return (
        <Card style={{ width: '18rem', margin: 'auto' , marginTop: '2rem'  }}>
            <Card.Header>
                <small className="text-muted">released on: {props.released_on}</small>
            </Card.Header>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.image_url}`} style={{height:'429px', width:'286px'}} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ overflow: 'scroll', height: '200px' }}>
                    {props.overview}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">average votes: {props.average_votes}
                    <span style={{ display: 'block' }}>popularity: {props.popularity}</span>
                </small>
            </Card.Footer>
        </Card>
    )
}
