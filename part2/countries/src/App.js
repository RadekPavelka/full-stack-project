import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import Filter from './components/Filter'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState('')
  const [selectedCountry, setSelectedCountry] = useState({})


  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])



  const handleFilterChange = (event) => {
    setSelectedCountry({})
    setFilterValue(event.target.value)
  }

  const handleShowButtonClick = ({ country }) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />
      {(!(Object.keys(selectedCountry).length === 0)) ? <CountryDetails country={selectedCountry} /> : <Countries countries={countries} filterValue={filterValue} onButtonClick={handleShowButtonClick} />}
    </div>

  )
}


export default App;
