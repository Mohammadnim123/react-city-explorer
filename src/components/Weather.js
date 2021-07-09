import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
export default function Weather(props) {
    return (
        <div className="weather-container">
            <h1>Weather Status</h1>
            {props.weatherData.map((elem, idx) => {
                return <Card style={{ width: '18rem' }} key={idx} className='weather-card'>

                    <ListGroup variant="flush">
                        <ListGroup.Item>Description:{elem.description}</ListGroup.Item>
                        <ListGroup.Item>Date:{elem.date}</ListGroup.Item>

                    </ListGroup>
                </Card>
            })}

        </div>
    )
}
