import React from 'react'
import { Card, ListGroup,Col } from 'react-bootstrap'

export default function WeatherDay(props) {
    return (
        <Col lg={3}>
        <Card style={{ width: '18rem' }} className='weather-card'>

            <ListGroup variant="flush">
                <ListGroup.Item>Description:{props.description}</ListGroup.Item>
                <ListGroup.Item>Date:{props.date}</ListGroup.Item>

            </ListGroup>
        </Card>
        </Col>
    )
}
