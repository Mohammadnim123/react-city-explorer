import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

export default function WeatherDay(props) {
    return (
        <Card style={{ width: '18rem' }} className='weather-card'>

            <ListGroup variant="flush">
                <ListGroup.Item>Description:{props.description}</ListGroup.Item>
                <ListGroup.Item>Date:{props.date}</ListGroup.Item>

            </ListGroup>
        </Card>
    )
}
