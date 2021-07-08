import React from 'react'
import {Card, ListGroup } from 'react-bootstrap'
export default function Weather(props) {
    console.log(props);
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <ListGroup variant="flush">
                    <ListGroup.Item>Description:{props.description}</ListGroup.Item>
                    <ListGroup.Item>Date:{props.date}</ListGroup.Item>
                    
                </ListGroup>
            </Card>
        </div>
    )
}
