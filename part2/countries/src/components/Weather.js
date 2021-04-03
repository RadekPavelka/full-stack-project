import React from 'react'

const Weather = ({ city, weather }) => {
    return (
        <div>
            <h2>Weather in {city}</h2>
            <p>temperature: {weather.current.temperature} Celsius</p>
            <img src={weather.current.weather_icons} alt={weather.current.weather_descriptions} />
            <p>wind: {weather.current.wind_speed} km/h {weather.current.wind_dir}</p>
        </div>
    )
}

export default Weather