import React from 'react'
import CountryDetails from './CountryDetails'
import Country from './Country'

const Countries = ({ countries, filterValue, onButtonClick }) => {
    const countriesToShow = countries.filter(country => country.name.toUpperCase().includes(filterValue.toUpperCase()))

    if (countriesToShow.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    if (countriesToShow.length === 1) {
        return (
            <CountryDetails country={countriesToShow[0]} />
        )
    }

    return (
        countriesToShow.map(country =>
            <Country key={country.name} country={country} onButtonClick={onButtonClick} />
        )
    )
}

export default Countries