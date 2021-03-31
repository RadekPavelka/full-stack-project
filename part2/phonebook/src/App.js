import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState({text: '', type: ''})

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const removePersonWithId = (id) => {
    console.log("deleting person", id)

    personService
      .remove(id)
      .then(setPersons(persons.filter(p => p.id !== id)))
  }

  const updatePerson = (id, updatedPerson) => {
    personService
      .update(id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
        setMessage({type: 'info', text:`${returnedPerson.name}'s number was updated`})
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }
      )
      .catch(error => {
        setMessage({type: 'error', text:`Information of ${updatedPerson.name} has already been removed from server`})
        setPersons(persons.filter(p => p.id !== id))
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })


  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(p => p.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personToUpdate = persons.find(p => p.name === newName)
        const id = personToUpdate.id
        const updated = { ...personToUpdate, number: newNumber }

        console.log("id", id)
        console.log("updatedPerson", updated)
        updatePerson(id, updated)
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage({type: 'info', text:`Added ${returnedPerson.name}`})
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })

    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />
      
      <Filter filter={newFilter} setNewFilter={setNewFilter} />

      <h3>add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange} />


      <h3>Numbers</h3>

      <Persons persons={persons} filterValue={newFilter} onDeleteClick={removePersonWithId} />
    </div>
  )
}


export default App