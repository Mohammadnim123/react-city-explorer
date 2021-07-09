import React from 'react'
import { Card } from 'react-bootstrap'

export default function Movies(props) {
    console.log(props.moviesData);
    return (
        <div className="movies-container">
            <h1>Movies</h1>
            {props.moviesData.map((elem, idx) => {
                return <Card style={{ width: '18rem', marginTop: '10px' }}>
                    <Card.Header>
                    <small className="text-muted">released on: {elem.released_on}</small>
                    </Card.Header>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${elem.image_url}`} />
                    <Card.Body>
                        <Card.Title>{elem.title}</Card.Title>
                        <Card.Text style={{ overflow: 'scroll' , height: '200px' }}>
                            {elem.overview}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">average votes: {elem.average_votes}         
                        <span style={{ display: 'block' }}>popularity: {elem.popularity}</span>
                        </small>
                    </Card.Footer>
                </Card>

            })}
        </div>
    )
}
