import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryDetails = ({ country }) => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
            .then(response => {
                setWeather(response.data)
            })
    }, [country])
    if (typeof (weather.current) === "undefined") {
        return null
    } else {
        return (
            <div>
                <h1>{country.name}</h1>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <h2>Spoken languages</h2>
                <ul>
                    {country.languages.map(lang =>
                        <li key={lang.iso639_1}>{lang.name}</li>)}
                </ul>
                <img style={{
                    maxWidth: "150px",
                    maxHeight: "150px",
                }} src={country.flag} alt={`flag of ${country.name}`} />
                <Weather city={country.capital} weather={weather} />
            </div>

        )
    }
}

export default CountryDetails