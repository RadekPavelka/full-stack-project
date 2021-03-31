import React from 'react'
import Person from './Person'

const Persons = ({ persons, filterValue, onDeleteClick }) => {
    const personsToShow = persons.filter(person => person.name.toUpperCase().includes(filterValue.toUpperCase()))
  
    return (
      personsToShow.map(person =>
        <Person key={person.id} person={person} onDeleteClick={onDeleteClick} />
      )
    )
  }

export default Persons