import React from 'react'

const Country = ({ country, onButtonClick }) => {
  const handleButtonClick = () => {
    onButtonClick({ country })
  }

  return (
    <div>{country.name} <button onClick={handleButtonClick}>show</button></div>
  )
}

export default Country