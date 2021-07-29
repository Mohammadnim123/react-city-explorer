import React from 'react'
import Movie from './Movie'
import { Container, Row ,Col} from 'react-bootstrap'

export default function Movies(props) {
    
    return (
        <>
        <div className="movies-container" id='movies'>
        {props.moviesData.length && <h1>Movies</h1>}
        <Container>
            <Row>
            {props.moviesData.map((elem, idx) => {
                return <Col lg={4}> <Movie
                
                key = {idx}
                released_on = {elem.released_on}
                title= {elem.title}
                overview= {elem.overview}
                average_votes= {elem.average_votes}
                popularity= {elem.popularity}
                image_url = {elem.image_url}
                /></Col>

            })}
            </Row>
            </Container>
        </div>
        </>
    )
}
