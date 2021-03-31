import React from 'react'

const Person = ({ person, onDeleteClick }) => {
    const removePerson = () => {
      console.log("delete button clicked")
      console.log("person id", person.id)
      if (window.confirm(`Delete ${person.name} ?`)) {
        onDeleteClick(person.id)
      }
  
    }
  
    return (
      <p>{person.name} {person.number} <button onClick={removePerson} >Delete</button></p>
    )
  }

  export default Person