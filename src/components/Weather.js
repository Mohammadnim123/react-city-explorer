import React from 'react'
import WeatherDay from './WeatherDay'

export default function Weather(props) {
    return (
        <div className="weather-container" id='weather'>
            <h1>Weather Status</h1>
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
