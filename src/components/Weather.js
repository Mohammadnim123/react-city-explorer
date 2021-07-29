import React from 'react'
import WeatherDay from './WeatherDay'

export default function Weather(props) {
    return (
        <div className="weather-container" id='weather'>
            {props.weatherData.length && <h1>Weather Status</h1>}
            
            {props.weatherData.map((elem, idx) => {
                return <WeatherDay
                key={idx}
                description={elem.description}
                date={elem.date}
                />
            })}

        </div>
    )
}
