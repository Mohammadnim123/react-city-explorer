import React from 'react'
import WeatherDay from './WeatherDay'
import { Container, Row } from 'react-bootstrap'


export default function Weather(props) {
    return (
        <div className="weather-container" id='weather'>
            <div className="main-to-margin"></div>
                        
            {props.weatherData.length && <h1 className='dynamic-text-shadow'>Weather Status</h1>}
            <Container>
            <Row>
            {props.weatherData.map((elem, idx) => {
                return <WeatherDay
                key={idx}
                description={elem.description}
                date={elem.date}
                />
            })}
            </Row>
            </Container>

        </div>
    )
}
